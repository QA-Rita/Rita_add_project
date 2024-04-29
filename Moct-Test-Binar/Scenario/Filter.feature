Feature: Filter

    Scenario Outline: <case_id>-User can view product by dropdown filter
        Given user already to login
        When  user select filter icon and select by the <options>
        Then  user can view the product by select dropdown filter
        Examples:
            | case_id | options           |
            | TCFI01  | Name A to Z       |
            | TCFI01  | Name Z to A       |
            | TCFI01  | Price low to high |
            | TCFI01  | price high to low |