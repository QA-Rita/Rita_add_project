Feature: Update Information

    Scenario Outline: <case_id>-User can update information before continue checkout an order
        Given user already add an order to cart
        When  user input <fields> with <value>
        Then  user will <get> update the information
        Examples:
            | case_id | fields      | value       | get     |
            | TCUI01  | all field   | valid value | success |
            | TCUI02  | first name  | empty value | failed  |
            | TCUI03  | last name   | empty value | failed  |
            | TCUI04  | portal code | empty value | failed  |