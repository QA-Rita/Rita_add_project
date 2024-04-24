@Category
Feature: Filter by Categories

  Background: Seller already login
    Given seller already at login page
    When seller input all fields with valid credentials at login page
    Then seller successfully login

  Scenario Outline: <case_id>-User can filter product by <category> category
    Given user already at homepage
    When user choose <category> category
    Then user can filter product by <category> category

    Examples: 
      | case_id | category                 |
      | MOB09   | elektronic               |
      | MOB10   | computer and accessories |
