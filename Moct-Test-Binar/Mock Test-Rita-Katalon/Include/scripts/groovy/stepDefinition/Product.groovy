package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.security.PublicKey

import org.seleniumhq.jetty9.util.Fields

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class Product {

	//TCPR01-User view product detail at product detail page
	@Given("user already on products page")
	public void user_already_on_products_page() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
	}

	@When("user select one of product at the product page")
	public void user_select_one_of_product_at_the_product_page() {
		WebUI.click(findTestObject("Object Repository/Products Page/product_sauce_labs_bacpack"))
	}

	@Then("user succussfully redirected to product detail page")
	public void user_succussfully_redirected_to_product_detail_page() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_back to products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_add to cart"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_back to products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_add to cart"), 0)
	}


	//<case_id>-User can view product by dropdown filter
	@When("user select filter icon and select by the (.*) option")
	public void user_select_filter_icon_and_select_by_the_option(String dropdown) {
		if(dropdown=="Name A to Z") {
			//WebUI.click(findTestObject("Object Repository/Products Page/dropdown_list"))
			WebUI.selectOptionByIndex(findTestObject("Object Repository/Products Page/dropdown_list"), 0)
		}
		else if(dropdown=="Name Z to A") {
			//			WebUI.click(findTestObject("Object Repository/Products Page/dropdown_list"))
			WebUI.selectOptionByIndex(findTestObject("Object Repository/Products Page/dropdown_list"), 1)
		}
		else if(dropdown=="Price low to high") {
			//WebUI.click(findTestObject("Object Repository/Products Page/dropdown_list"))
			WebUI.selectOptionByIndex(findTestObject("Object Repository/Products Page/dropdown_list"), 2)
		}
		else if(dropdown=="price high to low") {
			//WebUI.click(findTestObject("Object Repository/Products Page/dropdown_list"))
			WebUI.selectOptionByIndex(findTestObject("Object Repository/Products Page/dropdown_list"), 3)
		}
	}

	@Then("user can view the product by select (.*) filter")
	public void user_can_view_the_product_by_select_filter(String dropdown) {
		if(dropdown=="Name A to Z") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/product_sauce_labs_bacpack"), 2)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/product_sauce_labs_bacpack"), 2)
		}
		else if(dropdown=="Name Z to A") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/product_test_all_the_things"), 2)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/product_test_all_the_things"), 2)
		}
		else if(dropdown=="Price low to high") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/product_sauce_labs_onesie"), 2)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/product_sauce_labs_onesie"), 2)
		}
		else if(dropdown=="price high to low") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/product_sauce_labs_fleece_jacket"), 2)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/product_sauce_labs_fleece_jacket"), 2)
		}
	}


	//TCPR06-User can view the number notification after add to cart
	@When("user select add to cart button on product at product page")
	public void user_select_add_to_cart_button_on_product_at_product_page() {
		WebUI.click(findTestObject("Object Repository/Products Page/button_add to cart"))
	}

	@Then("user successfully get 1 notification on cart icon")
	public void user_successfully_get_1_notification_on_cart_icon() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/1_notif_cart"), 5)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/1_notif_cart"), 5)
	}

	
	//TCPR08-User able to remove their order after add to cart
	@When("user select remove button on product at product page")
	public void user_select_remove_button_on_product_at_product_page() {
		user_select_add_to_cart_button_on_product_at_product_page()
		WebUI.click(findTestObject("Object Repository/Products Page/button_Remove"))
	}

	@Then("user successfully get 0 notification on cart icon")
	public void user_successfully_get_0_notification_on_cart_icon() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 4)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 4)
	}


	//<case_id>-User can do <options> an order at detail product page
	@When("user select (.*) button an order at (.*)")
	public void user_select_button_an_order_at(String options, pages) {
		if(options=="add to cart" && pages=="detail product page") {
			user_select_one_of_product_at_the_product_page()
			user_succussfully_redirected_to_product_detail_page()
			WebUI.click(findTestObject("Object Repository/Products Page/Product Detail/button_add to cart"))
		}
		else if(options=="remove" && pages=="detail product page") {
			user_select_one_of_product_at_the_product_page()
			user_succussfully_redirected_to_product_detail_page()
			WebUI.click(findTestObject("Object Repository/Products Page/Product Detail/button_add to cart"))
			WebUI.click(findTestObject("Object Repository/Products Page/Product Detail/button_remove"))
		}
		else if(options=="select remove" && pages=="your cart page") {
			user_select_add_to_cart_button_on_product_at_product_page()
			WebUI.click(findTestObject("Object Repository/Products Page/icon_cart"))
			WebUI.click(findTestObject("Object Repository/Products Page/button_remove"))
		}
	}

	@Then("user successfully (.*) an order")
	public void user_successfully_an_order(String options) {
		if(options=="add to cart") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_back to products"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Product Detail/name_sauce_labs_backpack"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_back to products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Product Detail/name_sauce_labs_backpack"), 0)
		}
		else if(options=="remove") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_back to products"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_add to cart"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_back to products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Product Detail/button_add to cart"), 0)
		}
		else if(options=="select remove") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue_shopping"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/text_your_cart"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue_shopping"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/text_your_cart"), 0)
		}
	}
}
