@Selling
Feature: Selling Feature

  Background: User already login
    Given user already at login page
    When user input all fields with valid credentials at login page
    Then user success to login using valid credentials


  Scenario Outline: <case_id> Seller can see the list of items <menu>
    Given seller already open Daftar Jual Saya page
    When seller go to <page> page
    Then seller can see the list of items <menu>

    Examples: 
      | case_id | page     | menu           |
      | SEL01   | Diminati | being bid      |
      | SEL02   | Terjual  | have been sold |
