$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/1.Authorization.feature");
formatter.feature({
  "name": "Authorization",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User \u003cresult\u003e create an account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.step({
  "name": "user submit \u003cfield\u003e with \u003cvalue\u003e at register page",
  "keyword": "When "
});
formatter.step({
  "name": "user \u003cresult\u003e register an account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "field",
        "value",
        "result"
      ]
    },
    {
      "cells": [
        "MOB29",
        "all fields",
        "valid value",
        "successfully"
      ]
    },
    {
      "cells": [
        "MOB30",
        "email field",
        "value that had been register",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB31",
        "name field",
        "empty value",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB32",
        "email field",
        "empty value",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB33",
        "password field",
        "empty value",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB34",
        "phone number field",
        "empty value",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB35",
        "city field",
        "empty value",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB36",
        "address field",
        "empty value",
        "failed to"
      ]
    }
  ]
});
formatter.scenario({
  "name": "MOB29-User successfully create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit all fields with valid value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB30-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit email field with value that had been register at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB31-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit name field with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB32-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit email field with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB33-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit password field with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB34-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit phone number field with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB35-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit city field with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB36-User failed to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submit address field with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_submit_with_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register an account",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_register_an_account(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller \u003cresult\u003e login using \u003cvalue\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller input \u003cfields\u003e with \u003cvalue\u003e at login page",
  "keyword": "When "
});
formatter.step({
  "name": "seller \u003cresult\u003e login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "fields",
        "value",
        "result"
      ]
    },
    {
      "cells": [
        "MOB23",
        "all fields",
        "valid credentials",
        "successfully"
      ]
    },
    {
      "cells": [
        "MOB24",
        "email",
        "invalid credentials",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB25",
        "password",
        "invalid credentials",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB26",
        "email",
        "empty value",
        "failed to"
      ]
    },
    {
      "cells": [
        "MOB27",
        "password",
        "empty value",
        "failed to"
      ]
    }
  ]
});
formatter.scenario({
  "name": "MOB23-Seller successfully login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB24-Seller failed to login using invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input email with invalid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB25-Seller failed to login using invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input password with invalid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB26-Seller failed to login using empty value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input email with empty value at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB27-Seller failed to login using empty value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input password with empty value at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Buyer login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "buyer already at login page",
  "keyword": "Given "
});
formatter.step({
  "name": "buyer \u003cnumber\u003e input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "number"
      ]
    },
    {
      "cells": [
        "BUY01",
        "1"
      ]
    },
    {
      "cells": [
        "BUY02",
        "2"
      ]
    },
    {
      "cells": [
        "BUY03",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "BUY01-Buyer login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "buyer already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.buyer_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer 1 input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.buyer_input_all_fields_with_valid_credentials_at_login_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "BUY02-Buyer login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "buyer already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.buyer_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer 2 input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.buyer_input_all_fields_with_valid_credentials_at_login_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "BUY03-Buyer login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "buyer already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.buyer_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer 3 input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.buyer_input_all_fields_with_valid_credentials_at_login_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB28-User logout from secondhand apps",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at account page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select logout button",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_select_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logout from secondhand apps",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_successfully_logout_from_secondhand_apps()"
});
formatter.result({
  "status": "passed"
});
});