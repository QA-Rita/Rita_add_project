@Profile
Feature: Edit Profile

  Background: Seller already login
    Given seller already at login page
    When seller input all fields with valid credentials at login page
    Then seller successfully login

  Scenario Outline: <case_id>-User want to edit profile
    Given user already at profile page
    When user input <fields> section with <fill> data in the profile page
    Then user will <result> edit the profile

    Examples: 
      | case_id | fields  | fill        | result  |
      | MOB47   | all     | complete    | success |
      | MOB48   | address | empty value | failed  |
