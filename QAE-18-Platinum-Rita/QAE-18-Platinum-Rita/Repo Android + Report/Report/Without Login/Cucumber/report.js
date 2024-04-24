$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/2.Without Login.feature");
formatter.feature({
  "name": "Page without login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User want to see \u003cpage\u003e page without login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user select \u003cpage\u003e page without login",
  "keyword": "Given "
});
formatter.step({
  "name": "user at \u003cpage\u003e page without login",
  "keyword": "When "
});
formatter.step({
  "name": "user cant see \u003cpage\u003e page without login first",
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
        "page"
      ]
    },
    {
      "cells": [
        "MOB100",
        "akun"
      ]
    },
    {
      "cells": [
        "MOB101",
        "notification"
      ]
    },
    {
      "cells": [
        "MOB102",
        "transaction"
      ]
    }
  ]
});
formatter.scenario({
  "name": "MOB100-User want to see akun page without login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.step({
  "name": "user select akun page without login",
  "keyword": "Given "
});
formatter.match({
  "location": "WithoutLogin.user_select_page_without_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user at akun page without login",
  "keyword": "When "
});
formatter.match({
  "location": "WithoutLogin.user_at_page_without_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cant see akun page without login first",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutLogin.user_cant_see_page_without_login_first(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB101-User want to see notification page without login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.step({
  "name": "user select notification page without login",
  "keyword": "Given "
});
formatter.match({
  "location": "WithoutLogin.user_select_page_without_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user at notification page without login",
  "keyword": "When "
});
formatter.match({
  "location": "WithoutLogin.user_at_page_without_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cant see notification page without login first",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutLogin.user_cant_see_page_without_login_first(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB102-User want to see transaction page without login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.step({
  "name": "user select transaction page without login",
  "keyword": "Given "
});
formatter.match({
  "location": "WithoutLogin.user_select_page_without_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user at transaction page without login",
  "keyword": "When "
});
formatter.match({
  "location": "WithoutLogin.user_at_page_without_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cant see transaction page without login first",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutLogin.user_cant_see_page_without_login_first(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User use back icon at \u003cpage\u003e page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user select \u003cpage\u003e page at homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user press back at \u003cpage\u003e page",
  "keyword": "When "
});
formatter.step({
  "name": "user succsessfully use press back",
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
        "page"
      ]
    },
    {
      "cells": [
        "MOB104",
        "akun"
      ]
    },
    {
      "cells": [
        "MOB105",
        "notification"
      ]
    },
    {
      "cells": [
        "MOB106",
        "transaction"
      ]
    }
  ]
});
formatter.scenario({
  "name": "MOB104-User use back icon at akun page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.step({
  "name": "user select akun page at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WithoutLogin.user_select_page_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press back at akun page",
  "keyword": "When "
});
formatter.match({
  "location": "WithoutLogin.user_press_back_at_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user succsessfully use press back",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutLogin.user_succsessfully_use_press_back()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB105-User use back icon at notification page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.step({
  "name": "user select notification page at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WithoutLogin.user_select_page_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press back at notification page",
  "keyword": "When "
});
formatter.match({
  "location": "WithoutLogin.user_press_back_at_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user succsessfully use press back",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutLogin.user_succsessfully_use_press_back()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "MOB106-User use back icon at transaction page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WithoutLogin"
    }
  ]
});
formatter.step({
  "name": "user select transaction page at homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WithoutLogin.user_select_page_at_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press back at transaction page",
  "keyword": "When "
});
formatter.match({
  "location": "WithoutLogin.user_press_back_at_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user succsessfully use press back",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutLogin.user_succsessfully_use_press_back()"
});
formatter.result({
  "status": "passed"
});
});