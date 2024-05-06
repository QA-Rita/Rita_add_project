@Profile
Feature: Profile Feature

  Background: User already login
    Given user already at login page
    When user input all fields with valid credentials at login page
    Then user success to login using valid credentials

  Scenario Outline: <case_id>-User want to edit the profile
    Given user already on the profile page
    When user input <fields> section with <fill> data in the profile page
		Then user will <get> edit the profile
    Examples: 
      | case_id | fields 			| fill        | get     |
      | PROF01  | all	 			  | complete    | success |
      | PROF02  | name  			| empty value | failed  |
