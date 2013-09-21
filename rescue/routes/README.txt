venues
===========


Initialize mongodb with this

go to mongodb
use bandvenues
db.venues.remove()

exit mongodb, then go to unix cmd line,
cd to venues and issue the following:
mongoimport  --db bandvenues --collection venues --file venues.json --jsonArray

There is a zipcode to latlong file that is uploaded to mongo.  GO to the cmd line and issue:
$ mongoimport -d mydb -c things --type csv --file coziplatlon.csv --headerline

mongoimport -d coopencampaign -c coziplatlon --type csv --file coziplatlon.csv --headerline

my-options = {"this": "something", "that": "something else", "those": "more stuff", "these": "also included"}

form
  select(name="myselection")
    each option, key in my-options
      option(value="#{key}") option

	form(action='/user_edit', method='POST') 
	    label(for='role') Role:  
	    select(name='role') 
	      option(value='admin',   selected=admin) Admin 
	      option(value='editor', selected=editor) Editor
	      option(value='user', selected=user) User
	
	

		I've just started to play around with node, express and thus, jade. I try to do something like this in a jade template:

		my-options = {"this": "something", "that": "something else", "those": "more stuff", "these": "also included"}

		form
		  select(name="myselection")
		    each option, key in my-options
		      option(value="#{key}") option
		However, all I get is an 500 server error which is not helpfull at all. What am I doing wrong here? Any help would be much appreciated.

		Update I've just figured out, that jade templates themselves cannot contain variable definitions. Thus, the my_options hash needs to be defined in the corresponding router.js file and passed as an parameter to the appropriate result.render() function.