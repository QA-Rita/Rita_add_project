@Product
Feature: Product

  Background: Seller already login
    Given seller already at login page
    When seller input all fields with valid credentials at login page
    Then seller successfully login

  Scenario: MOB49-Seller view product detail
    Given seller already at homepage
    When seller select product at homepage
    Then seller can view product detail

  Scenario Outline: <case_id>-Seller post a product using <value> value in <fields> field
    Given seller already in post product page
    When seller input <fields> field with <value> value
    Then seller <result> to post a product with <value> value in <fields> field

    Examples: 
      | case_id | fields       | value | result       |
      | MOB37   | all          | valid | successfully |
      | MOB38   | product name | empty | failed       |
      | MOB39   | produk price | empty | failed       |
      | MOB40   | location     | empty | failed       |
      | MOB41   | description  | empty | failed       |

  Scenario: MOB45-Seller get notification for post a product
    Given seller already upload the product at product page
    When seller go to notification page
    Then seller should receive berhasil diterbitkan

  Scenario Outline: <case_id>-Seller edit a product using <value> value in <fields> field
    Given seller already in edit product page
    When seller edit value in <fields> field with <value> value
    Then seller <result> to edit a product with <value> value in <fields> field

    Examples: 
      | case_id | fields       | value | result       |
      | MOB16   | all          | valid | successfully |
      | MOB17   | product name | empty | failed       |
      | MOB18   | produk price | empty | failed       |
      | MOB19   | location     | empty | failed       |
      | MOB20   | description  | empty | failed       |

  Scenario Outline: <case_id>-Seller can do <options> a product
    Given seller already at product list page
    When seller select <options> a product
    Then seller successfully do <options> a product

    Examples: 
      | case_id | options       |
      | MOB14   | cancel delete |
      | MOB15   | delete        |

  Scenario: MOB46-Seller get notification about items being bid
    Given seller already get an offer at product page
    When seller go to notification page at home
    Then seller should receive penawaran produk

  Scenario Outline: <case_id>-Seller can see the list of items <menu>
    Given seller already open Daftar Jual Saya page
    When seller go to <page> page at Daftar Jual Saya page
    Then seller can see the list of items <menu>

    Examples: 
      | case_id | page     | menu           |
      | MOBB04  | Diminati | being bid      |
      | MOBB05  | Terjual  | have been sold |

