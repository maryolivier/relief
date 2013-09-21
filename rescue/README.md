 Venues

 This is a small app using Node.js, Express, MongoDb and Google Maps.

 The app displays a small map with information about venues.  The map is initialized with hard coded lat and log for Telluride, CO.  Users current location will be added next time

 To run:

 npm install

 See the Readme file for how to load MongoDb with test data. 

 node app.js

 http://17/0/0/1:3000/venue

go to mongodb
use fable_development
db.fables.remove()

exit mongodb, then go to unix cmd line,
cd to analyze and issue the following:
mongoimport  --db campaign --collection myerrors --type csv --file food4.csv --headerline

mongoimport  --db campaign --collection coziplatlon --type csv --file coziplatlon.csv --headerline
mongoimport  --db campaign --collection coziplatlon --type csv --file cozips2.csv --headerline
mongoimport  --db campaign --collection zipcontributions --type csv --file zipcontributions.csv --headerline
mongoimport  --db campaign --collection zipcounties --type csv --file zipcounty.csv --headerline
mongoimport  --db campaign --collection zipexpenditures --type csv --file zipcontributions.csv --headerline
mongoimport  --db campaign --collection zipnames --type csv --file zipname.csv --headerline




mongoexport --db campaign --collection zipcontributions --csv --out zipcontributions1.csv --fields zip,county,total,num,lat,lon
mongoexport --db campaign --collection zipexpenditures --csv --out zipexpenditures1.csv --fields zip,county,total,num,lat,lon
mongoexport  --db dbname --collection name --csv --out text.csv --fields firstName,middleName,lastName 





mongoimport -d mydb -c things --type csv --file locations.csv --headerline


  mongoimport -h ds043348.mongolab.com:43348 -d heroku_app17862035 -c myerrors -u marilyn -p....  --file food4.csv --type csv --headerline
	
	mongodb://<dbuser>:<dbpassword>@ds043348.mongolab.com:43348/heroku_app17862035
	
	mongo ds043348.mongolab.com:43348/heroku_app17862035 -u marilyn -p ....
	
	heroku config:add LOG_LEVEL=DEBUG
	heroku addons:upgrade logging:expanded
	Then go to your app and get ready to hit the page with an error. But before you do do this:

	heroku logs --tail
	
