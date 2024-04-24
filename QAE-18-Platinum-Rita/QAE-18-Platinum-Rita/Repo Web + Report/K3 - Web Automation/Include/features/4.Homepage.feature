@Homepage
Feature: Home Page Feature

  Background: User already login
    Given user already at login page
    When user input all fields with valid credentials at login page
    Then user success to login using valid credentials

  Scenario Outline: <case_id>-User can filter the product <category>
    Given user already at homepage
    When user sellect product <category> bar at homepage
    Then user can see product <category>

    Examples: 
      | case_id | category   |
      | PROD14  | Hobby      |
      | PROD15  | Vehicle    |
      | PROD16  | Healty     |
      | PROD17  | Electronic |
      | PROD18  | Clotes     |

  Scenario: PROD21-User want to search product by relevan keyword
    Given user navigates to the search icon section
    When user input relevant keywords into the search field
    Then user successfully search product by relevan keyword
