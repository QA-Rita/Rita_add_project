@Product
Feature: Product Feature

  Background: User already login
    Given user already at login page
    When user input all fields with valid credentials at login page
    Then user success to login using valid credentials

  Scenario Outline: <case_id>-Seller want to add a product
    Given seller already at add product page
    When seller input data in <fields> with <value> data in the add product page
    Then seller will <results> add a product

    Examples: 
      | case_id | fields     | value       | results |
      | PROD01  | all fields | complete    | success |
      | PROD02  | name       | empty value | failed  |
      
   Scenario: PROD06-Seller get notifications when adding products
        Given seller already at homepage
        When seller already open notification page
        Then seller successfully get notifications when adding products

  Scenario Outline: <case_id>-Seller edit product detail
    Given seller already at edit page
    When seller input <field> using <data> in the add product page
    Then seller <result> edit data with <data> input for product detail

    Examples: 
      | case_id | field               | data        | result       |
      | PROD07  | all field           | valid       | successfully |
      | PROD08  | product name field  | empty value | failed       |
      | PROD09  | product price field | empty value | failed       |
      | PROD10  | description field   | empty value | failed       |

  Scenario Outline: <case_id>-Seller can <result> the product
    Given seller already at add product page
    When seller input all required fields and select <button> in add product page
    Then seller will successfully <result> the product

    Examples: 
      | case_id | button    | result  |
      | PROD22  | terbitkan | post    |
      | PROD23  | preview   | preview |

  Scenario: PROD13-Seller can delete the product
    Given seller open daftar jual saya page
    When seller select product that will be delete at product page
    Then seller successfully delete the product

  Scenario: PROD19-User can see full list of thier product
    Given user already at product list page
    When user go to all products list at product page
    Then user can view all product that had been create

  Scenario: PROD20-User want to see product description
    Given user input product name at search icon
    When user select products at homepage
    Then user successfully too see product description
