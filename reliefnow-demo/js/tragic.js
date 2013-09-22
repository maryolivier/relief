/**
 * Actions to run when the DOM is ready with JQuery
 */

function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function loadCompany() {
	console.log()
}

var company = getURLParameter('company');
var cbKey = "7by586y4p7bjjt8rcaw5fu69";
var cbCompany;
var cbPerson;
var personArray = [];
var cbCoAPI;
var cbPersonAPI;

$(function() {

	// Execute the quicksearch form using the query entered
	$('form#quicksearch').submit(function() {
		var searchQuery = $("#query").val();

		// Trim the search string, remove quotes and remove extra spaces
		searchQuery = $.trim(searchQuery).replace(/"/g, '').replace(/ +(?= )/g, '');
		window.location = "results.html?company=" + searchQuery;
		return false;
	});

	

});
