$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/6.Buyer.feature");
formatter.feature({
  "name": "Buyer Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.background({
  "name": "Buyer already login",
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
  "name": "MOB44-User search a product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.step({
  "name": "user navigates to the search icon section",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.user_navigates_to_the_search_icon_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters relevant keywords into the search field",
  "keyword": "When "
});
formatter.match({
  "location": "Product.user_enters_relevant_keywords_into_the_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page will display products from the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.page_will_display_products_from_the_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Buyer already login",
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
  "name": "MOB50-Buyer send an offer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.step({
  "name": "buyer already search a product",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.buyer_already_search_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer enters submit the offer price",
  "keyword": "When "
});
formatter.match({
  "location": "Product.buyer_enters_submit_the_offer_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully send a bid",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.buyer_successfully_send_a_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Buyer already login",
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
  "name": "MOB01-Buyer are able to see transaction list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.step({
  "name": "buyer already at Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "Buyer.buyer_already_at_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer go to Transaksi page",
  "keyword": "When "
});
formatter.match({
  "location": "Buyer.buyer_go_to_Transaksi_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer are able to see Transaksi page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Buyer.buyer_are_able_to_see_Transaksi_page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Buyer get \u003cstatus\u003e notification",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "buyer already made an offer on a product",
  "keyword": "Given "
});
formatter.step({
  "name": "buyer go to notification page",
  "keyword": "When "
});
formatter.step({
  "name": "buyer successfully get \u003cstatus\u003e notification",
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
        "status"
      ]
    },
    {
      "cells": [
        "MOB07",
        "berhasil ditawar"
      ]
    },
    {
      "cells": [
        "MOB08",
        "penawaran ditolak"
      ]
    }
  ]
});
formatter.background({
  "name": "Buyer already login",
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
  "name": "MOB07-Buyer get berhasil ditawar notification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.step({
  "name": "buyer already made an offer on a product",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.buyer_already_made_an_offer_on_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer go to notification page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.buyer_go_to_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully get berhasil ditawar notification",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.buyer_successfully_get_notification(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Buyer already login",
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
  "name": "MOB08-Buyer get penawaran ditolak notification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.step({
  "name": "buyer already made an offer on a product",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.buyer_already_made_an_offer_on_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer go to notification page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.buyer_go_to_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully get penawaran ditolak notification",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.buyer_successfully_get_notification(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Buyer already login",
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
  "name": "MOB02-Buyer are able to see the list of items they bid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Buyer"
    }
  ]
});
formatter.step({
  "name": "buyer already at Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "Buyer.buyer_already_at_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer select Pesanan Saya",
  "keyword": "When "
});
formatter.match({
  "location": "Buyer.buyer_select_Pesanan_Saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer are able to see items they bid",
  "keyword": "Then "
});
formatter.match({
  "location": "Buyer.buyer_are_able_to_see_items_they_bid()"
});
formatter.result({
  "status": "passed"
});
});