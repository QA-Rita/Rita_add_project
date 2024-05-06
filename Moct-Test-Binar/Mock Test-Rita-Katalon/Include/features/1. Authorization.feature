@Authorization
Feature: Authorization

  Scenario Outline: <case_id>-User login with valid credentials
    Given user already at login page
    When user input <fields> with <value> credentials
    Then user <get> to login

    Examples: 
      | case_id | fields     | value           | get          |
      | TCLOG01 | all fields | service account | successfully |
      | TCLOG02 | all fields | invalid         | failed       |

  Scenario: TCLOG03-User want to logout
    Given user already at products page
    When user select menu icon at products page
    Then user successfully logout
