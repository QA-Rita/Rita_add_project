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

public class Update_Information {

	//<case_id>-User can do the order at your cart page
	@Given("user already add an order to the cart")
	public void user_already_add_an_order_to_the_cart() {
		WebUI.click(findTestObject("Object Repository/Products Page/button_add to cart"))
	}

	@When("user update information before select the (.*) option")
	public void user_update_information_before_select_the_option(String button) {
		WebUI.click(findTestObject("Object Repository/Products Page/icon_cart"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"), 0)
		WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue"), 0)
		WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_first_name"), "Rita")
		WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_last_name"), "Chou")
		WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_postal_code"), "11460")
		WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue"))
		if(button=="finish") {
			WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_finish"))
		}
		else if(button=="cancel") {
			WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_cancel"))
		}
	}

	@Then("user will redirected to the (.*)")
	public void user_will_redirected_to_the(String page) {
		if(page=="complete page") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/text_thank_you_for_your_order"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_back_home"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/text_thank_you_for_your_order"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_back_home"), 0)
		}
		else if(page=="products page") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
		}
	}


	//TCOR03-User can continue shopping after add an order to cart
	@When("user select continue shopping button")
	public void user_select_continue_shopping_button() {
		WebUI.click(findTestObject("Object Repository/Products Page/icon_cart"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"), 0)
		WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue_shopping"))
	}

	@Then("user redirected to products page")
	public void user_redirected_to_products_page() {
		String page = "products page"
		user_will_redirected_to_the(page)
	}


	//TCOR04-User can reset order state after add to cart
	@When("user select reset app state option on menu icon")
	public void user_select_reset_app_state_option_on_menu_icon() {
		WebUI.click(findTestObject("Object Repository/Products Page/icon_menu"))
		WebUI.click(findTestObject("Object Repository/Products Page/Product Detail/button_reset App State"))
	}

	@Then("user successfully reset the order by using the option")
	public void user_successfully_reset_the_order_by_using_the_option() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
	}
	
	
	//<case_id>-User update information with <data>
	@When("user update information with empty (.*)")
	public void user_update_information_with_empty_(String data) {
		WebUI.click(findTestObject("Object Repository/Products Page/icon_cart"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"), 0)
		WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_checkout"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue"), 0)
		if(data=="first name") {
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_first_name"), "")
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_last_name"), "Chou")
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_postal_code"), "11460")
		}
		else if(data=="last name") {
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_first_name"), "Rita")
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_last_name"), "")
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_postal_code"), "11460")
		}	
		else if(data=="portal code") {
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_first_name"), "Rita")
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_last_name"), "Chou")
			WebUI.setText(findTestObject("Object Repository/Products Page/Your Cart Page/input_postal_code"), "")
		}
		WebUI.click(findTestObject("Object Repository/Products Page/Your Cart Page/button_continue"))
	
	}
	
	@Then("user will get (.*)")
	public void user_will_get(String message) {
		if(message=="First Name is required") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/error_first_name"), 5)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/error_first_name"), 5)
		}
		else if(message=="Last Nme is required") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/error_last_name"), 5)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/error_last_name"), 5)
		}
		else if(message=="Portal Code is required") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/error_postal_code"), 5)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/Your Cart Page/error_postal_code"), 5)
		}
	}
}
