# robBay
Shopping site a la Amazon. I apologize if the name robBay throws anybody off. robBay is a rudimentary command line shopping site using Node.js to extract data from a mysql database. A customer

##Technologies Utilized
###Node.js
- The user will have to use Node.js command line to run the index.js (Management can use the indexManager.js).
The user will have to install the node modules mysql and inquirer to run the program.
###MySQL
- The program queries a database of products for sale, and tracks sales and inventory.
###inquirer
- allows you to pronpt the user for input.
###figlet
- a fun little node.js module that allows to to add some fun graphic text to your command line program.

##How it works
A user runs index.js and is promted to make a selection from a list of products. They are promted to enter a quantity,
Their order is totalled and the sales are registered and the inventory reduced. A manager can use indexManger.js to check sales and inventory, and order more inventory.

#License
This software was written by Robin Bertuccelli. If you have questions about the software or would like to collaborate on a project, you mayt contact me at robin.bertuccelli@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
