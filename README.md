# Eat-Da-Burger!

## Introduction

* Eat-Da-Burger! is a restaurant app that lets restaurant users input the names of burgers and quantity, and lets customer users input the their name and burger they would like to eat.

* App provides the restaurant user interface and customer user interface on page for now.

* Restaurant owner senario:

    * As a restaurant owner, you can add the burger name and quantity you are able to provide.

    * The customer who orders the burger and hasn't been served will be displayed in the drop down list of the burger row.

    * You can select the customer and click devour it to serve the customer.

    * The customers who have been served will be listed following the 'Eaten by'.

* Customer user senario:

    * As a customer user, you can input your name and select the burger you would like to order from the drop down list and submit your order to the app.

    * Once a burger is ordered, the quantity will decrement by 1.

    * Only burger quantity greater than 0 will be displayed in the drop down for customer to select.

## Overview

This is a burger logger using mySQL database to store data, and using sequelize module to model the database table and to query data, using Handlebars to generate the HTML.