@Buyer
Feature: Buyer Feature

  Background: Buyer already login
    Given buyer already at login page
    When buyer 1 input all fields with valid credentials at login page
    Then buyer successfully login

  Scenario: MOB44-User search a product
    Given user navigates to the search icon section
    When user enters relevant keywords into the search field
    Then page will display products from the search results

  Scenario: MOB50-Buyer send an offer
    Given buyer already search a product
    When buyer enters submit the offer price
    Then buyer successfully send a bid

  Scenario: MOB01-Buyer are able to see transaction list
    Given buyer already at Akun page
    When buyer go to Transaksi page
    Then buyer are able to see Transaksi page successfully

  Scenario Outline: <case_id>-Buyer get <status> notification
    Given buyer already made an offer on a product
    When buyer go to notification page
    Then buyer successfully get <status> notification

    Examples:
      | case_id | status            |
      | MOB07   | berhasil ditawar  |
      | MOB08   | penawaran ditolak |

  Scenario: MOB02-Buyer are able to see the list of items they bid
    Given buyer already at Akun page
    When buyer select Pesanan Saya
    Then buyer are able to see items they bid
