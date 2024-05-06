@Offer
Feature: Offer Feature

  Scenario: OFR01-Seller can decline offer from buyer
 		Given seller already at login page
    And seller input all fields with valid credentials at login page
    And seller successfully login
    And seller already open Diminati page
    When seller select offer from buyer
    And seller decline offer from buyer
    Then seller successfully declined offer from buyer

  Scenario: OFR02-Seller can accept offer and change status to canceled transaction
  	Given buyer already at login page
    And buyer 2 input all fields with valid credentials at login page
    And buyer successfully login
    And buyer already search a product
    And buyer enters submit the offer price
    And buyer successfully send a bid
    And seller already at login page
    And seller input all fields with valid credentials at login page
    And seller successfully login
    And seller already open Diminati page
    When seller select offer from buyer
    And seller accept offer and change status to canceled transaction
    Then seller done canceled the order
      
    Scenario: OFR03-Seller can accept offer and change status to successfully sold
  	Given buyer already at login page
    And buyer 3 input all fields with valid credentials at login page
    And buyer successfully login
    And buyer already search a product
    And buyer enters submit the offer price
    And buyer successfully send a bid
    And seller already at login page
    And seller input all fields with valid credentials at login page
    And seller successfully login
    And seller already open Diminati page
    When seller select offer from buyer
    And seller accept offer and change status to successfully sold
    Then seller done finished the order
      
