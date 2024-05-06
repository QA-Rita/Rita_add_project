@Offer
Feature: Offer Feature

  Background: Buyer already offer a product and user already login
    Given buyer already at login page
    And buyer login with valid credentials at login page
    And buyer successfully login
    When buyer search product that want to buy at homepage
    And buyer sending bid price to seller
    And buyer successfully bid a product to seller
    And user already at login page
    And user input all fields with valid credentials at login page
    Then user success to login using valid credentials

  Scenario: OFR01-Seller can decline offer from buyer
    Given seller already open notification page
    When seller select offer from buyer
    And seller decline offer from buyer
    Then seller succesfully declined offer from buyer

  Scenario Outline: <case_id> Seller can accept offer and <action>
    Given seller already open notification page
    When seller select offer from buyer
    And seller accept offer and <action>
    Then seller done <condition>

    Examples: 
      | case_id | action                                | condition            |
      | OFR02   | contact buyer via wa                  | negotiate with buyer |
      | OFR03   | change status to successfully sold    | finished the order   |
      | OFR04   | change status to canceled transaction | canceled the order   |
