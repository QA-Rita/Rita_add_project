$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/4.Profile.feature");
formatter.feature({
  "name": "Edit Profile",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User want to edit profile",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already at profile page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003cfields\u003e section with \u003cfill\u003e data in the profile page",
  "keyword": "When "
});
formatter.step({
  "name": "user will \u003cresult\u003e edit the profile",
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
        "result"
      ]
    },
    {
      "cells": [
        "MOB47",
        "all",
        "complete",
        "success"
      ]
    },
    {
      "cells": [
        "MOB48",
        "address",
        "empty value",
        "failed"
      ]
    }
  ]
});
formatter.background({
  "name": "Seller already login",
  "description": "",
  "keyword": "Background"
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
  "name": "MOB47-User want to edit profile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.step({
  "name": "user already at profile page",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.user_already_at_profile_page()"
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
  "name": "Seller already login",
  "description": "",
  "keyword": "Background"
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
  "name": "MOB48-User want to edit profile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.step({
  "name": "user already at profile page",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.user_already_at_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input address section with empty value data in the profile page",
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
});