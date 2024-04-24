$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/1.Authorization.feature");
formatter.feature({
  "name": "Authorization Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User create an account with \u003cvalue\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already at register page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003cfields\u003e with \u003cvalue\u003e at register page",
  "keyword": "When "
});
formatter.step({
  "name": "user \u003cresult\u003e to register using \u003cvalue\u003e",
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
        "AUTH01",
        "all",
        "valid credentials",
        "success"
      ]
    },
    {
      "cells": [
        "AUTH09",
        "email",
        "value that has been taken",
        "failed"
      ]
    },
    {
      "cells": [
        "AUTH10",
        "name",
        "empty value",
        "failed"
      ]
    },
    {
      "cells": [
        "AUTH11",
        "email",
        "empty value",
        "failed"
      ]
    },
    {
      "cells": [
        "AUTH12",
        "password",
        "empty value",
        "failed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "AUTH01-User create an account with valid credentials",
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
  "name": "user input all with valid credentials at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_field_with_value_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to register using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_register_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH09-User create an account with value that has been taken",
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
  "name": "user input email with value that has been taken at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_field_with_value_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register using value that has been taken",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_register_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH10-User create an account with empty value",
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
  "name": "user input name with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_field_with_value_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register using empty value",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_register_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH11-User create an account with empty value",
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
  "name": "user input email with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_field_with_value_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register using empty value",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_register_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH12-User create an account with empty value",
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
  "name": "user input password with empty value at register page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_field_with_value_at_register_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to register using empty value",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_register_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User login using \u003cvalue\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003cfields\u003e with \u003cvalue\u003e at login page",
  "keyword": "When "
});
formatter.step({
  "name": "user \u003cresult\u003e to login using \u003cvalue\u003e",
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
        "AUTH03",
        "all fields",
        "valid credentials",
        "success"
      ]
    },
    {
      "cells": [
        "AUTH04",
        "email",
        "invalid credentials",
        "failed"
      ]
    },
    {
      "cells": [
        "AUTH06",
        "password",
        "invalid credentials",
        "failed"
      ]
    },
    {
      "cells": [
        "AUTH07",
        "email",
        "empty value",
        "failed"
      ]
    },
    {
      "cells": [
        "AUTH08",
        "password",
        "empty value",
        "failed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "AUTH03-User login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH04-User login using invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email with invalid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to login using invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH06-User login using invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password with invalid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to login using invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH07-User login using empty value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email with empty value at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to login using empty value",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH08-User login using empty value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password with empty value at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed to login using empty value",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AUTH13-Buyer want to login",
  "description": "",
  "keyword": "Scenario",
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
  "name": "buyer login with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.buyer_login_with_valid_credentials_at_login_page()"
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
  "name": "AUTH05-User want to logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user already login",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_login()"
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
  "name": "user successfully logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_successfully_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/2.Profile.feature");
formatter.feature({
  "name": "Profile Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User want to edit the profile",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already on the profile page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003cfields\u003e section with \u003cfill\u003e data in the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "user will \u003cget\u003e edit the profile",
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
        "fill",
        "get"
      ]
    },
    {
      "cells": [
        "PROF01",
        "all",
        "complete",
        "success"
      ]
    },
    {
      "cells": [
        "PROF02",
        "name",
        "empty value",
        "failed"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROF01-User want to edit the profile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.step({
  "name": "user already on the profile page",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.user_already_on_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all section with complete data in the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "Profile.user_input_section_with_data_in_the_profile_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will success edit the profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Profile.user_will_edit_the_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROF02-User want to edit the profile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.step({
  "name": "user already on the profile page",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.user_already_on_the_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name section with empty value data in the profile page",
  "keyword": "When "
});
formatter.match({
  "location": "Profile.user_input_section_with_data_in_the_profile_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will failed edit the profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Profile.user_will_edit_the_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/3.Product.feature");
formatter.feature({
  "name": "Product Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller want to add a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already at add product page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller input data in \u003cfields\u003e with \u003cvalue\u003e data in the add product page",
  "keyword": "When "
});
formatter.step({
  "name": "seller will \u003cresults\u003e add a product",
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
        "results"
      ]
    },
    {
      "cells": [
        "PROD01",
        "all fields",
        "complete",
        "success"
      ]
    },
    {
      "cells": [
        "PROD02",
        "name",
        "empty value",
        "failed"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD01-Seller want to add a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at add product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_add_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input data in all fields with complete data in the add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_data_in_with_data_in_the_add_product_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will success add a product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_will_add_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD02-Seller want to add a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at add product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_add_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input data in name with empty value data in the add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_data_in_with_data_in_the_add_product_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will failed add a product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_will_add_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD06-Seller get notifications when adding products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already open notification page",
  "keyword": "When "
});
formatter.match({
  "location": "Offer.seller_already_open_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully get notifications when adding products",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_successfully_get_notifications_when_adding_products()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller edit product detail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already at edit page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller input \u003cfield\u003e using \u003cdata\u003e in the add product page",
  "keyword": "When "
});
formatter.step({
  "name": "seller \u003cresult\u003e edit data with \u003cdata\u003e input for product detail",
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
        "data",
        "result"
      ]
    },
    {
      "cells": [
        "PROD07",
        "all field",
        "valid",
        "successfully"
      ]
    },
    {
      "cells": [
        "PROD08",
        "product name field",
        "empty value",
        "failed"
      ]
    },
    {
      "cells": [
        "PROD09",
        "product price field",
        "empty value",
        "failed"
      ]
    },
    {
      "cells": [
        "PROD10",
        "description field",
        "empty value",
        "failed"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD07-Seller edit product detail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at edit page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all field using valid in the add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_using_in_the_add_product_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully edit data with valid input for product detail",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_edit_data_with_input_for_product_detail(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD08-Seller edit product detail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at edit page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input product name field using empty value in the add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_using_in_the_add_product_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed edit data with empty value input for product detail",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_edit_data_with_input_for_product_detail(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD09-Seller edit product detail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at edit page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input product price field using empty value in the add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_using_in_the_add_product_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed edit data with empty value input for product detail",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_edit_data_with_input_for_product_detail(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD10-Seller edit product detail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at edit page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input description field using empty value in the add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_using_in_the_add_product_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed edit data with empty value input for product detail",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_edit_data_with_input_for_product_detail(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller can \u003cresult\u003e the product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already at add product page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller input all required fields and select \u003cbutton\u003e in add product page",
  "keyword": "When "
});
formatter.step({
  "name": "seller will successfully \u003cresult\u003e the product",
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
        "button",
        "result"
      ]
    },
    {
      "cells": [
        "PROD22",
        "terbitkan",
        "post"
      ]
    },
    {
      "cells": [
        "PROD23",
        "preview",
        "preview"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD22-Seller can post the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at add product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_add_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all required fields and select terbitkan in add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_all_required_fields_and_select_in_add_product_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will successfully post the product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_will_successfully_the_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD23-Seller can preview the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at add product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_at_add_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all required fields and select preview in add product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_all_required_fields_and_select_in_add_product_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will successfully preview the product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_will_successfully_the_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD13-Seller can delete the product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller open daftar jual saya page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_open_daftar_jual_saya_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select product that will be delete at product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_product_that_will_be_delete_at_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully delete the product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_successfully_delete_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD19-User can see full list of thier product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "user already at product list page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.user_already_at_product_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go to all products list at product page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.user_go_to_all_products_list_at_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view all product that had been create",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.user_can_view_all_product_that_had_been_create()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD20-User want to see product description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "user input product name at search icon",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.user_input_product_name_at_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select products at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Product.user_select_products_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully too see product description",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.user_successfully_too_see_product_description()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e Seller can see the list of items \u003cmenu\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already open Daftar Jual Saya page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller go to \u003cpage\u003e page",
  "keyword": "When "
});
formatter.step({
  "name": "seller can see the list of items \u003cmenu\u003e",
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
        "page",
        "menu"
      ]
    },
    {
      "cells": [
        "PROD24",
        "Diminati",
        "being bid"
      ]
    },
    {
      "cells": [
        "PROD25",
        "Terjual",
        "have been sold"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD24 Seller can see the list of items being bid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already open Daftar Jual Saya page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_open_Daftar_Jual_Saya_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller go to Diminati page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_go_to_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller can see the list of items being bid",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_can_see_the_list_of_items(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD25 Seller can see the list of items have been sold",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already open Daftar Jual Saya page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_open_Daftar_Jual_Saya_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller go to Terjual page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_go_to_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller can see the list of items have been sold",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_can_see_the_list_of_items(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/4.Homepage.feature");
formatter.feature({
  "name": "Home Page Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User can filter the product \u003ccategory\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user sellect product \u003ccategory\u003e bar at homepage",
  "keyword": "When "
});
formatter.step({
  "name": "user can see product \u003ccategory\u003e",
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
        "category"
      ]
    },
    {
      "cells": [
        "PROD14",
        "Hobby"
      ]
    },
    {
      "cells": [
        "PROD15",
        "Vehicle"
      ]
    },
    {
      "cells": [
        "PROD16",
        "Healty"
      ]
    },
    {
      "cells": [
        "PROD17",
        "Electronic"
      ]
    },
    {
      "cells": [
        "PROD18",
        "Clotes"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD14-User can filter the product Hobby",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sellect product Hobby bar at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Homepage.user_sellect_product_bar_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product Hobby",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_can_see_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD15-User can filter the product Vehicle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sellect product Vehicle bar at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Homepage.user_sellect_product_bar_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product Vehicle",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_can_see_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD16-User can filter the product Healty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sellect product Healty bar at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Homepage.user_sellect_product_bar_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product Healty",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_can_see_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD17-User can filter the product Electronic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sellect product Electronic bar at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Homepage.user_sellect_product_bar_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product Electronic",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_can_see_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD18-User can filter the product Clotes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sellect product Clotes bar at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Homepage.user_sellect_product_bar_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product Clotes",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_can_see_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "When "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PROD21-User want to search product by relevan keyword",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "name": "user navigates to the search icon section",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.user_navigates_to_the_search_icon_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input relevant keywords into the search field",
  "keyword": "When "
});
formatter.match({
  "location": "Homepage.user_input_relevant_keywords_into_the_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully search product by relevan keyword",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_successfully_search_product_by_relevan_keyword()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/5.Offer.feature");
formatter.feature({
  "name": "Offer Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Offer"
    }
  ]
});
formatter.background({
  "name": "Buyer already offer a product and user already login",
  "description": "",
  "keyword": "Background"
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
  "name": "buyer login with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_login_with_valid_credentials_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer search product that want to buy at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Buyer.buyer_search_product_that_want_to_buy_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer sending bid price to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_sending_bid_price_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully bid a product to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_successfully_bid_a_product_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFR01-Seller can decline offer from buyer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Offer"
    }
  ]
});
formatter.step({
  "name": "seller already open notification page",
  "keyword": "Given "
});
formatter.match({
  "location": "Offer.seller_already_open_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Offer.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller decline offer from buyer",
  "keyword": "And "
});
formatter.match({
  "location": "Offer.seller_decline_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller succesfully declined offer from buyer",
  "keyword": "Then "
});
formatter.match({
  "location": "Offer.seller_succesfully_declined_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e Seller can accept offer and \u003caction\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already open notification page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.step({
  "name": "seller accept offer and \u003caction\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "seller done \u003ccondition\u003e",
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
        "action",
        "condition"
      ]
    },
    {
      "cells": [
        "OFR02",
        "contact buyer via wa",
        "negotiate with buyer"
      ]
    },
    {
      "cells": [
        "OFR03",
        "change status to successfully sold",
        "finished the order"
      ]
    },
    {
      "cells": [
        "OFR04",
        "change status to canceled transaction",
        "canceled the order"
      ]
    }
  ]
});
formatter.background({
  "name": "Buyer already offer a product and user already login",
  "description": "",
  "keyword": "Background"
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
  "name": "buyer login with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_login_with_valid_credentials_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer search product that want to buy at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Buyer.buyer_search_product_that_want_to_buy_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer sending bid price to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_sending_bid_price_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully bid a product to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_successfully_bid_a_product_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFR02 Seller can accept offer and contact buyer via wa",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Offer"
    }
  ]
});
formatter.step({
  "name": "seller already open notification page",
  "keyword": "Given "
});
formatter.match({
  "location": "Offer.seller_already_open_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Offer.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accept offer and contact buyer via wa",
  "keyword": "And "
});
formatter.match({
  "location": "Offer.seller_accept_offer_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller done negotiate with buyer",
  "keyword": "Then "
});
formatter.match({
  "location": "Offer.seller_done(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Buyer already offer a product and user already login",
  "description": "",
  "keyword": "Background"
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
  "name": "buyer login with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_login_with_valid_credentials_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer search product that want to buy at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Buyer.buyer_search_product_that_want_to_buy_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer sending bid price to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_sending_bid_price_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully bid a product to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_successfully_bid_a_product_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFR03 Seller can accept offer and change status to successfully sold",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Offer"
    }
  ]
});
formatter.step({
  "name": "seller already open notification page",
  "keyword": "Given "
});
formatter.match({
  "location": "Offer.seller_already_open_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Offer.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accept offer and change status to successfully sold",
  "keyword": "And "
});
formatter.match({
  "location": "Offer.seller_accept_offer_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller done finished the order",
  "keyword": "Then "
});
formatter.match({
  "location": "Offer.seller_done(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Buyer already offer a product and user already login",
  "description": "",
  "keyword": "Background"
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
  "name": "buyer login with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_login_with_valid_credentials_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_successfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer search product that want to buy at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Buyer.buyer_search_product_that_want_to_buy_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer sending bid price to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_sending_bid_price_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully bid a product to seller",
  "keyword": "And "
});
formatter.match({
  "location": "Buyer.buyer_successfully_bid_a_product_to_seller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input all fields with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.user_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success to login using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Authorization.user_result_to_login_using_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFR04 Seller can accept offer and change status to canceled transaction",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Offer"
    }
  ]
});
formatter.step({
  "name": "seller already open notification page",
  "keyword": "Given "
});
formatter.match({
  "location": "Offer.seller_already_open_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Offer.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accept offer and change status to canceled transaction",
  "keyword": "And "
});
formatter.match({
  "location": "Offer.seller_accept_offer_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller done canceled the order",
  "keyword": "Then "
});
formatter.match({
  "location": "Offer.seller_done(String)"
});
formatter.result({
  "status": "passed"
});
});