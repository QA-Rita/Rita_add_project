Feature: Authorization

    Scenario Outline: <case_id>-User login with valid credentials
        Given user already at login page
        When  user input <fieldS> field with <value>
        Then  user successfully to login
        Examples:
            | case_id | fields | VALUE               |
            | TCLOG01 | all    | service account     |
            | TCLOG02 | all    | invalid credentials |

    @positive
    Scenario: TCLOG03-User want to logout
        Given user already login
        When  user select three lines icon at home page
        Then  user successfully logout