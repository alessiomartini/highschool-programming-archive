(function ($) {


    /**
     * Build yo self a timeline using Timeline.
     *
     * @param node
     * @constructor
     */
    var Timeline = function (node) {

        this.local = false;
        this.root = this.local ? '' : '/wp-content/themes/dali-museum';

        this.$node = $(node);
        this.$highlight = $('<div />', {
            'class': 'timeline-highlight',
            style: 'background-color: #434343;position:absolute;'
        }).appendTo($('body'));


        this.$viewport = this.$node.find('[data-timeline-viewport]');
        this.$title    = this.$node.find('[data-timeline-title]');

        this.initControls();

        //keep all options
        var dates = [];

        this.$node.find('[data-timeline-nav] [data-timeline-date]').each(function () {

            dates.push($(this).attr('data-timeline-date'));
        });

        this.dates = dates;
        this.selectedDate = null;


        $(window).on('resize', this.windowDidResize.bind(this));


        //read data and populate slides
        $.ajax({
            url: this.root + '/timeline/js/feed.json',
            dataType: 'json'
        }).done(function (results) {

            this.buildPhotos(results);

            //select the first option
            this.selectDate(this.dates[0]);

        }.bind(this)).fail(function (err) {
            console.log(err);
            alert('Loading the timeline failed. Please refresh and try again.');
        });

    };

    /**
     * Setup the controls
     */
    Timeline.prototype.initControls = function () {

        var me = this;

        //setup all my listeners
        this.$controls = this.$node.find('[data-timeline-nav] [data-timeline-date]').on('click', function (e) {

            e.preventDefault();

            var date = $(this).attr('data-timeline-date');

            me.selectDate(date);

        });

        this.$btnNext = this.$node.find('[data-timeline-arrow="forward"]').on('click', this.didClickNextButton.bind(this));
        this.$btnBack = this.$node.find('[data-timeline-arrow="back"]').on('click', this.didClickBackButton.bind(this));

    };


    Timeline.prototype.selectedDateIndex = function () {
        return this.dates.indexOf(this.selectedDate);
    };

    Timeline.prototype.isOnFirstDate = function () {
        return this.selectedDateIndex() <= 0;
    };

    Timeline.prototype.isOnLastDate = function () {
        return this.selectedDateIndex() >= this.dates.length - 1;
    };


    Timeline.prototype.buildPhotos = function (data) {



        var template ='<div data-timeline-date="{{key}}" ' +
            'class="timeline-slide-image timeline-dropshadow {{className}}" ' +
            'date-timeline-slide-image>' +
            '<img src="' + this.root + '/timeline/images/{{key}}/{{index}}.jpg" />' +
            '<div class="timeline-image-overlay">' +
            '<div class="vertical-center">' +
            '<span>{{desc}}</span>' +
            '</div>' +
            '<div class="timeline-close"></div>' +
            '</div>' +
            '<div class="timeline-date-bar">' +
            '<span>{{year}}</span>' +
            '<div class="timeline-discolsure"></div>' +
            '</div>' +
            '</div>';


        var keys = Object.keys(data);

        for(var k in keys) {

            var i = 1,
                key = keys[k],
                items = data[key];

            for (; i<= items.length; i++) {


                var item = items[i-1],
                    className = item['class'] || '',
                    html = template.replace(/\{\{key\}\}/g, key)
                                   .replace(/\{\{year\}\}/g, item.year)
                                   .replace(/\{\{index\}\}/g, i)
                                   .replace(/\{\{desc\}\}/g, item.desc)
                                   .replace(/\{\{className\}\}/g, className);

                this.$viewport[0].innerHTML += html;

            }

        }

        //$('.timeline-discolsure').on('hover, click', function() {
        //    $(this).closest('[date-timeline-slide-image]').addClass('slide-image-hover');
        //});
        //
        //$('.timeline-close').on('hover, click', function() {
        //    $(this).closest('[date-timeline-slide-image]').removeClass('slide-image-hover');
        //});

        $('.timeline-slide-image').on('click', function () {
            $(this).toggleClass('slide-image-hover');
        })


    };



    /**
     * Select a date.
     *
     * @param date
     */
    Timeline.prototype.selectDate = function (date) {

        $('#timeline .content-col, #timeline .title-column').height('auto');


        //hack for last slide
        if (date === 'credits') {

            $('#white-col').hide();
            $('#viewport').addClass('credits').addClass('col-md-11').removeClass('col-md-7');

        } else {

            $('#viewport').removeClass('credits').removeClass('col-md-11').addClass('col-md-7');
            $('#white-col').show();
        }

        //hide all content, then show the only the right one
        this.$node.find('[data-timeline-content] [data-timeline-date]').hide();
        this.$node.find('[data-timeline-content] [data-timeline-date="' + date + '"]').show();
        this.selectedDate = date;

        if(date == "credits") {
            $('#timeline').addClass('in-credits');
        }
        else if($('#timeline').hasClass('in-credits')) {
            $('#timeline').removeClass('in-credits');
        }

        var $navItem = $('[data-timeline-nav] [data-timeline-date="' + date + '"]');

        if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
        }

        this.animationTimeout = setTimeout(function () {

            //if no date was passed, select the first
            var padding = 0,
                pos = $navItem.offset(),
                x = pos.left + parseInt($navItem.css('padding-left')) - padding,
                y = pos.top + parseInt($navItem.css('padding-top')),
                width = $navItem.width() + padding * 2,
                height = $navItem.height();

            //state

            //animate highlight into position
            this.$highlight.animate({
                left: x,
                top: y,
                width: width,
                height: height
            }, {
                easing: 'easeOutBounce'
            });


        }.bind(this), 100);

        //isotope it
        this.$viewport.isotope({
            filter: '[data-timeline-date="' + date + '"]',
            layoutMode: 'fitRows'
        });

        if (this.isOnFirstDate()) {
            this.$btnBack.parent().fadeOut();
            this.$btnNext.parent().fadeIn();
        } else if (this.isOnLastDate()) {
            this.$btnBack.parent().fadeIn();
            this.$btnNext.parent().fadeOut();
        } else {

            this.$btnBack.parent().fadeIn();
            this.$btnNext.parent().fadeIn();

        }

        var html = $navItem.html();

        this.$title.html(html === '<span>Intro</span>' ? 'Introduction' : html);


        //set height of col and title
        if ($(window).width() >= 992) {
            var height = Math.max($('#timeline .content-col').height(), this.$viewport.height());
            $('#timeline .content-col, #timeline .title-column').height(height + 'px');
        }


    };

    Timeline.prototype.didClickBackButton = function (e) {
        e.preventDefault();

        if (!this.isOnFirstDate()) {
            this.selectDate(this.dates[this.selectedDateIndex() - 1]);
        }

    };

    Timeline.prototype.didClickNextButton = function (e) {
        e.preventDefault();

        if (!this.isOnLastDate()) {
            this.selectDate(this.dates[this.selectedDateIndex() + 1]);
        }

    };

    Timeline.prototype.windowDidResize = function () {

        if (this._resizeTimeout) {
            clearTimeout(this._resizeTimeout);
        }

        this._resizeTimeout = setTimeout(function () {

            this.selectDate(this.selectedDate);

        }.bind(this), 500);

    }

    $(document).ready(function () {
        window.timeline = new Timeline('#timeline');



    });



})(jQuery);