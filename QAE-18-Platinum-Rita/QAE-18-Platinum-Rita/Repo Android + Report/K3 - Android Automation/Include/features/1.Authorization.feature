@Authorization
Feature: Authorization

  Scenario Outline: <case_id>-User <result> create an account
    Given user already at register page
    When user submit <field> with <value> at register page
    Then user <result> register an account

    Examples: 
      | case_id | field              | value                        | result       |
      | MOB29   | all fields         | valid value                  | successfully |
      | MOB30   | email field        | value that had been register | failed to    |
      | MOB31   | name field         | empty value                  | failed to    |
      | MOB32   | email field        | empty value                  | failed to    |
      | MOB33   | password field     | empty value                  | failed to    |
      | MOB34   | phone number field | empty value                  | failed to    |
      | MOB35   | city field         | empty value                  | failed to    |
      | MOB36   | address field      | empty value                  | failed to    |

  Scenario Outline: <case_id>-Seller <result> login using <value>
    Given seller already at login page
    When seller input <fields> with <value> at login page
    Then seller <result> login

    Examples: 
      | case_id | fields     | value               | result       |
      | MOB23   | all fields | valid credentials   | successfully |
      | MOB24   | email      | invalid credentials | failed to    |
      | MOB25   | password   | invalid credentials | failed to    |
      | MOB26   | email      | empty value         | failed to    |
      | MOB27   | password   | empty value         | failed to    |
  
  Scenario Outline: <case_id>-Buyer login using valid credentials
    Given buyer already at login page
    When buyer <number> input all fields with valid credentials at login page
    Then buyer successfully login

    Examples: 
      | case_id | number |
      | BUY01   |      1 |
      | BUY02   |      2 |
      | BUY03   |      3 |

  Scenario: MOB28-User logout from secondhand apps
    Given user already at account page
    When user select logout button
    Then user successfully logout from secondhand apps
