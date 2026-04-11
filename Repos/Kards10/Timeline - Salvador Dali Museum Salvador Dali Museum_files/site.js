jQuery(document).ready(function ($) {

	var el, title, $this;

	var breakpoint_width = 1024;

	var page_wrapper = $('#page-container'),
		responsive_trigger = $('.mobile-nav-toggle'),
		menu_activated = false,
		back_text = '<li class="mobile_menu_go_back"><span class="back_icon"></span><a href="#">Back</a></li>',
		top_nav = $('#menu-top-menu li.mobile').clone(true),
		cloned_menu = $('ul#menu-mega-menu').clone(true).attr({id:'mobile-menu', 'class':''})
			.find('div.column-megamenu-right, h1, .m-menu-back').remove().end()
			.find('.megamenu-trigger .megamenu-hidden ul').addClass('sub-menu').unwrap().unwrap().end()
			.find('.megamenu-trigger > div > a').unwrap().end(); // Strip extra HTML junk

	// Stick top nav to top of main mobile menu
	$(cloned_menu).prepend(top_nav);

	var start_responsive_menu = function(){
		var responsive_menu = cloned_menu.prependTo(page_wrapper);

		// Bind trigger on click
		responsive_trigger.click(function(e){
			e.preventDefault();
			window.scrollTo(0,0);
			responsive_menu.addClass('mobile-menu-visible');
			set_height();
		});

		// Add arrows to submenu triggers
		responsive_menu.find('li:has(> ul.sub-menu), li:has(> div.mobile_mega_container)').addClass('mobile_has_submenu').prepend('<span class="submenu_trigger"></span>');

		// Add back buttons at the top of each submenu
		responsive_menu.find('.mobile_has_submenu > ul.sub-menu, .mobile_has_submenu > div.mobile_mega_container').addBack().prepend(back_text);

		// Back button click handler
		$( '.mobile_menu_go_back' ).click(function(e){
			e.preventDefault();
			var active_menu = $(this).closest('.mobile-menu-visible');
			active_menu.removeClass('mobile-menu-visible');
			set_height();
			if( active_menu.is('#mobile-menu') ) {
				page_wrapper.css({'height':'auto'});
			}
		});

		$('.submenu_trigger').on('click', function(e){
			e.preventDefault();
			$(this).siblings('ul,.mobile_mega_container').addClass('mobile-menu-visible');
			title = $(this).siblings('a').text();
			$(this).closest('li').find('ul .mobile_menu_go_back a').text(title);
			set_height();
		});
	}

	var set_height = function(){
		var height = $('.mobile-menu-visible').last().css({height:'auto'}).outerHeight(true),
			window_height  = $(window).height(),
			adminbar_height = 0,
			admin_bar = $('#wpadminbar');

		// Adjust for admin bar
		if(height < window_height) {
			height = window_height;
			if ( admin_bar.length > 0 ) {
				adminbar_height = admin_bar.outerHeight(true);
				height = height - adminbar_height;
			}
		}

		$('.mobile-menu-visible').last().attr('style','');
		page_wrapper.css({'height':height, 'overflow':'hidden'});
		$('#mobile-menu').css({'height':height});
	};

	// Trigger responsive menu
	if ( $(window).width() < breakpoint_width || screen.width < breakpoint_width ) {
		if ( !menu_activated ){
			start_responsive_menu();
			menu_activated = true;
		}
		page_wrapper.addClass('mobile_menu_visible');
	} else {
		// Hide the menu
		$('.mobile-menu-visible').removeClass('mobile-menu-visible');
		page_wrapper.css({'height':'auto'}).removeClass('mobile_menu_visible');
	}

	// Make a select element navigation for mobile
	if( $('#subnav li.current_page_item').hasClass('page_item_has_children') ){
		// Create the dropdown base
		el = [
			'<div id="dropnav" class="m-item-interior-subnav m-visible">',
			'<select name="navmenu"></select>',
			'</div>',
			].join("");

		if( $('#subtitle').length ){
			$(el).insertAfter('#subtitle');
		} else {
			$(el).insertAfter('#subnav');
		}

		// Create default option "Go to..."
		$('<option />', {
			"selected": "selected",
			"value"   : "",
			"text"    : "Page Navigation"
		}).appendTo('#dropnav select');

		// Populate dropdown with menu items
		$('#subnav li.current_page_item ul.children > li > a').each(function(i,e){
			$('<option />', {
				'value'   : $(e).attr('href'),
				'text'    : $(e).text()
			}).appendTo('#dropnav select');
		});
		$('#dropnav select').change(function() {
			window.location = $(this).find('option:selected').val();
		});

		// Put everything back in DOM
		$(el).appendTo('.item-top-nav');
	}

    // Toggle Homepage sections
    $('#homepage-link1-list').hide();
    $('#homepage-link2-list').hide();
    $('#homepage-link1-drop').click(function(){
        $(this).siblings('#homepage-link1-list').slideToggle().siblings('#homepage-link2-list').hide();
    });
    $('#homepage-link2-drop').click(function(){
        $(this).siblings('#homepage-link2-list').slideToggle().siblings('#homepage-link1-list').hide();
    });

    // Toggle Dropdown sections
    $('#dropdown-link1-list').hide();
    $('#dropdown-link2-list').hide();
    $('#dropdown-link3-list').hide();
    $('#dropdown-link1-drop').click(function(){
        $(this).siblings('#dropdown-link1-list').slideToggle().siblings('#dropdown-link2-list').hide().siblings('#dropdown-link3-list').hide();
    });
    $('#dropdown-link2-drop').click(function(){
        $(this).siblings('#dropdown-link2-list').slideToggle().siblings('#dropdown-link1-list').hide().siblings('#dropdown-link3-list').hide();
    });
    $('#dropdown-link3-drop').click(function(){
        $(this).siblings('#dropdown-link3-list').slideToggle().siblings('#dropdown-link1-list').hide().siblings('#dropdown-link2-list').hide();
    });


    // Toggle FAQ sections
	$('.faq-answer').hide();
	$('.faq-question').click(function(){
		$(this).toggleClass('active').siblings('.faq-answer').slideToggle();
	});

	// Move form labels to placeholders
	$(".container-contact form :input").each(function(index, elem) {
		var eId = $(elem).attr("id");
		var label = null;
		if (eId && ($(elem).not(':radio, :checkbox')) && (label = $(elem).parents("form").find("label[for="+eId+"]")).length == 1) {
			$(elem).attr("placeholder", $(label).text());
			$(label).hide();
		}
	});

	// Add GA tracking on side slideout
	$('#slide-out a').on('click', function(e){

		$this = $(this);

		// Set title based on data attribute or link text
		if( $this.data('title') ){
			title = $this.data('title');
		} else {
			title = $this.text();
		}

		// Send event to GA - Yoast uses __gaTracker
		if (typeof __gaTracker !== 'undefined' && $.isFunction(__gaTracker)) {
			__gaTracker('send', {
				'hitType': 'event',
				'eventCategory': 'side-slider',
				'eventAction': 'click',
				'eventLabel': title
			});
		}
	});

	// Add Youtube modal to feature image
	$(".container-interior-content img").each(function(evt){
		var youtubeId = $(this).data("youtube");
		if( youtubeId ){
		$(this).addClass('clickable').click(function(evt){
			DALI_showYouTube(youtubeId);
		}).css({ 'cursor': 'pointer' });
		}
	});

	// Modify mobile map link to Apple if iOS device
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		el = $('#map-link').attr('href');
		$('#map-link').attr('href', el.replace('maps.google', 'maps.apple'));
	}

	// Toggle mobile search
	$('.toggle-search').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('#mobile-search').slideToggle();
		return false;
	});

    // Open virtual tour link in new window
    $('a[href*="/virtual-tour/index.html"]').each(function(i, e){
		$(e).attr('target', '_blank');
    });

    // New page slideshows
    $('.page-slideshow').slick({
		dots: true,
		infinite: true
    });

	// Disable scroll for mobile nav openings
	$('.exhibit-listing-summary a.btn-toggle, .event-listing-summary a.btn-toggle, .exhibit-item-listing a.btn-toggle').on('click', function(e){
		e.preventDefault();
		$(this).closest('article').toggleClass('is-open').find('section.content').slideToggle();
		return false;
	});
	// Set initial state
	$('.exhibit-listing-summary section.content, .event-listing-summary section.content, .exhibit-item-listing section.content').slideUp();

});


/**
 * Pass in a youtube id and either show the video
 * in a modal or redirect if the view port is too
 * narrow.
 */
function DALI_showYouTube(youtubeId){
	var pageWidth = $(window).width();
	if(pageWidth >= 900){
		DALI_add_block_page();
		DALI_add_popup_box(youtubeId);
		DALI_add_styles();
	} else {
		var url = "https://www.youtube.com/watch?v=" + youtubeId;
		window.open(url,'_blank');
	}
}

/**
 * Add a background to the modal
 */
function DALI_add_block_page(){
	var block_page = $('<div class="dali_block_page"></div>');
	$(block_page).appendTo('body');
}

/**
 * Add the styles to the modal elements
 */
function DALI_add_styles(){
	var pageHeight = $(document).height();
	var pageWidth = $(window).width();
	var windowHeight = $(window).height();

	$('.dali_block_page').css({
		'position': 'absolute',
		'top': '0',
		'z-index': '600',
		'left': '0',
		'background-color': 'rgba(0,0,0,0.6)',
		'height': pageHeight,
		'width': pageWidth,
	});


	// CENTER THE MODAL
	var leftPos = (pageWidth - 640) / 2;
	var leftCss = leftPos + 'px';
	var topPos = (windowHeight - 320) / 2;
	var topCss = topPos + 'px';
	$('.dali-youtube-modal').css({
		'position': 'fixed',
		'top': topCss,
		'left': leftCss,
	});
}

/**
 * Add the data ot the modal
 */
function DALI_add_popup_box(youtubeId){
	var width = 640;
	var height = 360;
	var pop_up = $('<iframe class="dali-youtube-modal" width="' + width+ '" height="' + height + '" src="https://www.youtube-nocookie.com/embed/' + youtubeId + '?rel=0&enablejsapi=1&autoplay=1" frameborder="0" allowfullscreen></iframe>');
	$(pop_up).appendTo('.dali_block_page');

	$('.dali_block_page').click(function(){
		DALI_close_popup_box();
	});
}

/**
 * Close the modal elements
 */
function DALI_close_popup_box(){
	$('.dali_block_page').fadeOut().remove();
}
