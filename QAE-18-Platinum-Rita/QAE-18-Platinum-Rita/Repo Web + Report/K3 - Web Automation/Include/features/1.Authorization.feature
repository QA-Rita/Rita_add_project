@Authorization
Feature: Authorization Feature

  Scenario Outline: <case_id>-User create an account with <value>
    Given user already at register page
    When user input <fields> with <value> at register page
    Then user <result> to register using <value>

    Examples: 
      | case_id | fields   | value                     | result  |
      | AUTH01  | all      | valid credentials         | success |
      | AUTH09  | email    | value that has been taken | failed  |
      | AUTH10  | name     | empty value               | failed  |
      | AUTH11  | email    | empty value               | failed  |
      | AUTH12  | password | empty value               | failed  |

  Scenario Outline: <case_id>-User login using <value>
    Given user already at login page
    When user input <fields> with <value> at login page
    Then user <result> to login using <value>

    Examples: 
      | case_id | fields     | value               | result  |
      | AUTH03  | all fields | valid credentials   | success |
      | AUTH04  | email      | invalid credentials | failed  |
      | AUTH06  | password   | invalid credentials | failed  |
      | AUTH07  | email      | empty value         | failed  |
      | AUTH08  | password   | empty value         | failed  |

	Scenario: AUTH13-Buyer want to login
    Given buyer already at login page
    When buyer login with valid credentials at login page
    Then buyer successfully login

  Scenario: AUTH05-User want to logout
    Given user already login
    When user select logout button
    Then user successfully logout
