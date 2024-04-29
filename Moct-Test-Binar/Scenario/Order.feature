Feature: Order

    Scenario Outline: <case_id>-User can view the number notification on the cart icon
        Given user already to login
        When  user select <action> button on product at product page
        Then  user successfully get <result> on cart icon
        Examples:
            | case_id | action      | result             |
            | TCOR01  | add to cart | 1 notification     |
            | TCOR03  | remove      | empty notification |

    Scenario: <case_id>-User can do <options> an order at detail product page
        Given user already to login
        When  user select <options> button an order at <pages>
        Then  user successfully do <options> an order
        Examples:
            | case_id | options     | pages               |
            | TCOR02  | add to cart | detail product page |
            | TCOR04  | remove      | detail product page |
            | TCOR05  | remove      | your cart page      |

    Scenario: TCOR06-User can checkout an order at your cart page
        Given user already add an order to the cart
        When  user update information before continue checkout an order
        Then  user successfully checkout an order

    Scenario: TCOR07-User can continue shopping after add an order to cart
        Given user already add an order to the cart
        When  user select continue shopping button
        Then  user will redirected to the products page

    Scenario: TCOR08-User can reset order state after add to cart
        Given user already add an order to the cart
        When  user select three lines icon at product page
        And   user select reset app state option
        Then  user successfully reset the order by using the option