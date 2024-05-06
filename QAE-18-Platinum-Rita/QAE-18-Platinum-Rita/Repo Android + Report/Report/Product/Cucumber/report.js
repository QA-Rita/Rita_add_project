$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/5.Product.feature");
formatter.feature({
  "name": "Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Product"
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
  "name": "MOB49-Seller view product detail",
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
  "name": "seller select product at homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_product_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller can view product detail",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_can_view_product_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller post a product using \u003cvalue\u003e value in \u003cfields\u003e field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already in post product page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller input \u003cfields\u003e field with \u003cvalue\u003e value",
  "keyword": "When "
});
formatter.step({
  "name": "seller \u003cresult\u003e to post a product with \u003cvalue\u003e value in \u003cfields\u003e field",
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
        "MOB37",
        "all",
        "valid",
        "successfully"
      ]
    },
    {
      "cells": [
        "MOB38",
        "product name",
        "empty",
        "failed"
      ]
    },
    {
      "cells": [
        "MOB39",
        "produk price",
        "empty",
        "failed"
      ]
    },
    {
      "cells": [
        "MOB40",
        "location",
        "empty",
        "failed"
      ]
    },
    {
      "cells": [
        "MOB41",
        "description",
        "empty",
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
  "name": "MOB37-Seller post a product using valid value in all field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in post product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_post_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input all field with valid value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully to post a product with valid value in all field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_post_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB38-Seller post a product using empty value in product name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in post product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_post_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input product name field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to post a product with empty value in product name field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_post_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB39-Seller post a product using empty value in produk price field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in post product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_post_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input produk price field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to post a product with empty value in produk price field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_post_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB40-Seller post a product using empty value in location field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in post product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_post_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input location field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to post a product with empty value in location field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_post_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB41-Seller post a product using empty value in description field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in post product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_post_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input description field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_input_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to post a product with empty value in description field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_post_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB45-Seller get notification for post a product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already upload the product at product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_upload_the_product_at_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller go to notification page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_go_to_notification_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller should receive berhasil diterbitkan",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_should_receive_berhasil_diterbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e Seller edit a product using \u003cvalue\u003e value in \u003cfields\u003e field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already in edit product page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller edit value in \u003cfields\u003e field with \u003cvalue\u003e value",
  "keyword": "When "
});
formatter.step({
  "name": "seller \u003cresult\u003e to edit a product with \u003cvalue\u003e value in \u003cfields\u003e field",
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
        "MOB16",
        "all",
        "valid",
        "successfully"
      ]
    },
    {
      "cells": [
        "MOB17",
        "product name",
        "empty",
        "failed"
      ]
    },
    {
      "cells": [
        "MOB18",
        "produk price",
        "empty",
        "failed"
      ]
    },
    {
      "cells": [
        "MOB19",
        "location",
        "empty",
        "failed"
      ]
    },
    {
      "cells": [
        "MOB20",
        "description",
        "empty",
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
  "name": "MOB16 Seller edit a product using valid value in all field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller edit value in all field with valid value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_edit_value_in_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully to edit a product with valid value in all field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_edit_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB17 Seller edit a product using empty value in product name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller edit value in product name field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_edit_value_in_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to edit a product with empty value in product name field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_edit_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB18 Seller edit a product using empty value in produk price field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller edit value in produk price field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_edit_value_in_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to edit a product with empty value in produk price field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_edit_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB19 Seller edit a product using empty value in location field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller edit value in location field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_edit_value_in_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to edit a product with empty value in location field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_edit_a_product_with_value_in_field(String,Object,Object)"
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
  "name": "MOB20 Seller edit a product using empty value in description field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already in edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller edit value in description field with empty value",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_edit_value_in_field_with_value(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller failed to edit a product with empty value in description field",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_to_edit_a_product_with_value_in_field(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller can do \u003coptions\u003e a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already at product list page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller select \u003coptions\u003e a product",
  "keyword": "When "
});
formatter.step({
  "name": "seller successfully do \u003coptions\u003e a product",
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
        "options"
      ]
    },
    {
      "cells": [
        "MOB14",
        "cancel delete"
      ]
    },
    {
      "cells": [
        "MOB15",
        "delete"
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
  "name": "MOB14-Seller can do cancel delete a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at product list page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.void_seller_already_at_product_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select cancel delete a product",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully do cancel delete a product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_successfully_do_a_product(String)"
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
  "name": "MOB15-Seller can do delete a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already at product list page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.void_seller_already_at_product_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller select delete a product",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_select_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller successfully do delete a product",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_successfully_do_a_product(String)"
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
  "name": "MOB46-Seller get notification about items being bid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "seller already get an offer at product page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.seller_already_get_an_offer_at_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller go to notification page at home",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_go_to_notification_page_at_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller should receive penawaran produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.seller_should_receive_penawaran_produk()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-Seller can see the list of items \u003cmenu\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller already open Daftar Jual Saya page",
  "keyword": "Given "
});
formatter.step({
  "name": "seller go to \u003cpage\u003e page at Daftar Jual Saya page",
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
        "MOBB04",
        "Diminati",
        "being bid"
      ]
    },
    {
      "cells": [
        "MOBB05",
        "Terjual",
        "have been sold"
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
  "name": "MOBB04-Seller can see the list of items being bid",
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
  "name": "seller go to Diminati page at Daftar Jual Saya page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_go_to_page_at_Daftar_Jual_Saya_page(String)"
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
  "name": "MOBB05-Seller can see the list of items have been sold",
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
  "name": "seller go to Terjual page at Daftar Jual Saya page",
  "keyword": "When "
});
formatter.match({
  "location": "Product.seller_go_to_page_at_Daftar_Jual_Saya_page(String)"
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
});