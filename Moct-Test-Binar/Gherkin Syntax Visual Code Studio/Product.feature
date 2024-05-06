Feature: Product

    Scenario: TCPR01-User view product detail at product detail page
        Given user already on products page
        When user select one of product at the product page
        Then user succussfully redirected to product detail page

    Scenario Outline: <case_id>-User can view product by filter
        Given user already on products page
        When user select filter icon and select by the <dropdown> option
        Then user can view the product by select <dropdown> filter

        Examples:
            | case_id | dropdown          |
            | TCPR02  | Name A to Z       |
            | TCPR03  | Name Z to A       |
            | TCPR04  | Price low to high |
            | TCPR05  | price high to low |

    Scenario: TCPR06-User can view the number notification after add to cart
        Given user already on products page
        When user select add to cart button on product at product page
        Then user successfully get 1 notification on cart icon

    Scenario: TCPR08-User able to remove their order after add to cart
        Given user already on products page
        When user select remove button on product at product page
        Then user successfully get 0 notification on cart icon

    Scenario Outline: <case_id>-User can do <options> an order at detail product page
        Given user already on products page
        When user select <options> button an order at <pages>
        Then user successfully <options> an order

        Examples:
            | case_id | options     | pages               |
            | TCPR07  | add to cart | detail product page |
            | TCPR10  | remove1     | detail product page |
            | TCPR09  | remove2     | your cart page      |
