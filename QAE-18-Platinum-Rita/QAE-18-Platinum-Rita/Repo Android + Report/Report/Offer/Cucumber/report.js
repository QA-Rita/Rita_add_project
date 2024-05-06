$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/7.Offer.feature");
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
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already open Diminati page",
  "keyword": "And "
});
formatter.match({
  "location": "Product.seller_already_open_Diminati_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller decline offer from buyer",
  "keyword": "And "
});
formatter.match({
  "location": "Product.seller_decline_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully declined offer from buyer",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_sucessfully_decline_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFR02-Seller can accept offer and change status to canceled transaction",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Offer"
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
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_input_all_fields_with_valid_credentials_at_login_page(String)"
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
  "name": "buyer already search a product",
  "keyword": "And "
});
formatter.match({
  "location": "Product.buyer_already_search_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer enters submit the offer price",
  "keyword": "And "
});
formatter.match({
  "location": "Product.buyer_enters_submit_the_offer_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully send a bid",
  "keyword": "And "
});
formatter.match({
  "location": "Product.buyer_successfully_send_a_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all fields with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already open Diminati page",
  "keyword": "And "
});
formatter.match({
  "location": "Product.seller_already_open_Diminati_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accept offer and change status to canceled transaction",
  "keyword": "And "
});
formatter.match({
  "location": "Product.seller_accept_offer_and_change_status_to_canceled_transaction()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller done canceled the order",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_done_canceled_the_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFR03-Seller can accept offer and change status to successfully sold",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Offer"
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
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.buyer_input_all_fields_with_valid_credentials_at_login_page(String)"
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
  "name": "buyer already search a product",
  "keyword": "And "
});
formatter.match({
  "location": "Product.buyer_already_search_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer enters submit the offer price",
  "keyword": "And "
});
formatter.match({
  "location": "Product.buyer_enters_submit_the_offer_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer successfully send a bid",
  "keyword": "And "
});
formatter.match({
  "location": "Product.buyer_successfully_send_a_bid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_already_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all fields with valid credentials at login page",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_input_with_at_login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Authorization.seller_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller already open Diminati page",
  "keyword": "And "
});
formatter.match({
  "location": "Product.seller_already_open_Diminati_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select offer from buyer",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_offer_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accept offer and change status to successfully sold",
  "keyword": "And "
});
formatter.match({
  "location": "Product.seller_accept_offer_and_change_status_to_successfully_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller done finished the order",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_done_finished_the_forder()"
});
formatter.result({
  "status": "passed"
});
});