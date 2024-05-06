Feature: Order

    Scenario Outline: <case_id>-User can do the order at your cart page
        Given user already add an order to the cart
        When user update information before select the <button> option
        Then user will redirected to the <page>

        Examples:
            | case_id | button | page          |
            | TCOR01  | finish | complete page |
            | TCOR02  | cancel | products page |

    Scenario: TCOR03-User can continue shopping after add an order to cart
        Given user already add an order to the cart
        When user select continue shopping button
        Then user redirected to products page

    Scenario: TCOR04-User can reset order state after add to cart
        Given user already add an order to the cart
        When user select reset app state option on menu icon
        Then user successfully reset the order by using the option

    Scenario Outline: <case_id>-User update information with <data>
        Given user already add an order to the cart
        When user update information with empty <data>
        Then user will get <message>

        Examples:
            | case_id | data        | message                 |
            | TCOR05  | first name  | First Name is required  |
            | TCOR06  | last name   | Last Name is required   |
            | TCOR07  | portal code | Portal code is required |
