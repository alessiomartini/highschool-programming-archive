#!/usr/bin/env python

import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def getCPUtemperature( self ):
        res = os.popen('vcgencmd measure_temp').readline()
        return(res.replace("temp=","").replace("'C\n",""))

    def get(self):
        self.write( "Temperature: %s" % ( self.getCPUtemperature() ) )

application = tornado.web.Application([
    (r"/", MainHandler),
])

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
