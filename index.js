


/*<program>  Copyright (C) <year>  <name of author>

    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

  */  
//------------------------------ROB BAY------------------------------------------

var mysql = require("mysql");
var inquirer = require("inquirer");
var figlet = require('figlet');
//create a connection to mysql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "robBay_db"
});


figlet('                    Shop RobBay!', 
  function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

function start(){
//prints the items for sale and their details
connection.query('SELECT * FROM Products', function(err, res){
  if(err) throw err;

 console.log('                        BROSWSE THROUGH OUR ENTICING SELECTION OF SUNDRIES                           ')
  console.log('----------------------------------------------------------------------------------------------------')

  for(var i = 0; i<res.length;i++){
    console.log("ID: " + res[i].id + " | " + "Product: " + res[i].itemDesc + " | " + "Department: " + res[i].department + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].quantity);
    console.log('--------------------------------------------------------------------------------------------------')
  }

  console.log(' ');
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID of the product you would like to purchase?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "quantity",
      message: "How many would you like to purchase?",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ])
  .then(function(ans){
      var whatToBuy = (ans.id)-1;
      var howMuchToBuy = parseInt(ans.quantity);
      var grandTotal = parseFloat(((res[whatToBuy].price)*howMuchToBuy).toFixed(2));


      //check if quantity is sufficient
      if(res[whatToBuy].quantity >= howMuchToBuy){
        //after purchase, updates quantity in Products
        connection.query("UPDATE products SET ? WHERE ?", [
        {quantity: (res[whatToBuy].quantity - howMuchToBuy)},
        {id: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 3-5 business days.");
        });

        connection.query("SELECT * FROM departments", function(err, deptRes){
          if(err) throw err;
          var index;
          for(var i = 0; i < deptRes.length; i++){
         if(deptRes[i].department === res[whatToBuy].department){
              index = i;
            }
          }
          
          //updates totalSales in departments table

          connection.query("UPDATE Departments SET ? WHERE ?", [
          {sales: deptRes[index].sales + grandTotal},
          {department: res[whatToBuy].department}],
          function(err, deptRes){
              if(err) throw err;

          });
        });

      } else{
        console.log("Sorry, there's not enough in stock!");
      }

      reprompt();
    })
})
}

//asks if they would like to purchase another item
function reprompt(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to purchase another item?"
  }]).then(function(ans){

    if(ans.reply == true){
    start();
    } 
    else{
      console.log("Thank you1 Please come again!");
    }
  });
}
start();

