/*
 * Marilyn Waldman Analyze apis for open source political stuff
 */

/*var  Zipcode = require('../model/zipcode.js')
    ,Contribution = require('../model/contribution.js')
    ,Expenditure = require('../model/expenditure.js')
    ,Loan  = require('../model/loan.js')
    ,ErrorStuff  = require('../model/errorstuff.js')
    ,fs = require('fs');

  */  


var fs = require('fs');




exports.rescue = function(req, res) {
console.log("In rescue " );

//     res.render('map.html', {
//
//         }); // render
        console.log('dir  ' + __dirname);
		//fs.readFile('/Users/marilynwaldman/analyzeHer/views/income2.html', 'utf8', function(err, text){
		   fs.readFile('./views/income3.html', 'utf8', function(err, text){
		        res.send(text);
		    });
}; //home function
