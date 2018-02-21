//------------------------------ROB BAY------------------------------------------
var mysql = require("mysql");
var inquirer = require("inquirer");

//create a connection to mysql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "robBay_db"
});
connection.connect (function(err){
	if (err) throw err;
console.log("Connected as id: " + connecton.threadId);
start();
});

// start function incorporating a prompt to shop
var start = function() {
	inquirer.prompt({
		name: "selectCategory",
		type: "rawlist",
		message: "What category would you like to shop today?",
		choices: ["HOUSEWARES", "HARDWARE", "SPORTING GOODS"]

	})
	/*
	.then(function(answer) {
		var userSelection = answer.selectCategory.toUpperCase()
		switch (userSelection) {
			case userSelection == "HOUSEWARES"
			shopHousewares();
		}
			case userSelection == "HARDWARE" {
			shopHousewares();
		}
			case userSelection == "SPORTING GOODS"	{
			shopSportingGoods();
			}
			default {
				console.log("Please pick a department");
			}


		}
	})
}

function shopHousewares() {
  console.log("Selecting all products in HOUSEWARES...\n");
  connection.query("SELECT * FROM products WHERE department = 'Housewares' ", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

function shopHardware() {
  console.log("Selecting all products in HARDWARE...\n");
  connection.query("SELECT * FROM products WHERE department = 'Hardware' ", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

function shopSportingGoods() {
  console.log("Selecting all products in HOUSEWARES...\n");
  connection.query("SELECT * FROM products WHERE department = 'Housewares' ", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
*/










