import tornado.ioloop
import tornado.web
import MySQLdb

class MainHandler(tornado.web.RequestHandler):
    def set_headers(self):
        self.set_header('Content-Type', 'application/json')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Credentials", "true")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET')
    
    def sql_write(self,inn,ouu):
        db = MySQLdb.connect("localhost","root","root","chat" )
        cursor = db.cursor()
        sql = "INSERT INTO `chat`.`chat_log` (`user`, `bot`) VALUES ('%s', '%s')" % (inn,ouu)
        cursor.execute(sql)
        db.commit()
        db.close()
        print "Successfully written to sql: ",inn,ouu
        
    def get(self):
        self.write("Hello, world")
        
    def post(self):
        self.set_headers()
        inn = self.get_argument("input")
        ouu = self.get_argument("output")
        
        print "writtend entry:", inn, ouu
        self.sql_write(str(inn),str(ouu))
        
def make_app():
    return tornado.web.Application([
        (r"/app", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    print "Listening: 8888"
    tornado.ioloop.IOLoop.current().start()