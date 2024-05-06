@WithoutLogin
Feature: Page without login

  Scenario Outline: <case_id>-User want to see <page> page without login
    Given user select <page> page without login
    When user at <page> page without login
    Then user cant see <page> page without login first

   Examples: 
      | case_id | page         |
      | MOB100  | akun         |
      | MOB101  | notification |
      | MOB102  | transaction  |
      
  Scenario Outline: <case_id>-User use back icon at <page> page
    Given user select <page> page at homepage
    When user press back at <page> page
    Then user succsessfully use press back

    Examples: 
      | case_id | page         |
      | MOB104  | akun         |
      | MOB105  | notification |
      | MOB106  | transaction  |
   
