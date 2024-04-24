$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/3.Category.feature");
formatter.feature({
  "name": "Filter by Categories",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Category"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User can filter product by \u003ccategory\u003e category",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user choose \u003ccategory\u003e category",
  "keyword": "When "
});
formatter.step({
  "name": "user can filter product by \u003ccategory\u003e category",
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
        "MOB09",
        "elektronic"
      ]
    },
    {
      "cells": [
        "MOB10",
        "computer and accessories"
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
  "name": "MOB09-User can filter product by elektronic category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Category"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Category.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose elektronic category",
  "keyword": "When "
});
formatter.match({
  "location": "Category.user_choose_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can filter product by elektronic category",
  "keyword": "Then "
});
formatter.match({
  "location": "Category.user_can_filter_product_by_category(String)"
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
  "name": "MOB10-User can filter product by computer and accessories category",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Category"
    }
  ]
});
formatter.step({
  "name": "user already at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Category.user_already_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose computer and accessories category",
  "keyword": "When "
});
formatter.match({
  "location": "Category.user_choose_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can filter product by computer and accessories category",
  "keyword": "Then "
});
formatter.match({
  "location": "Category.user_can_filter_product_by_category(String)"
});
formatter.result({
  "status": "passed"
});
});