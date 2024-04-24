package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.security.PublicKey

import org.apache.commons.lang.RandomStringUtils

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory

import io.appium.java_client.MobileElement
import io.appium.java_client.TouchAction
import io.appium.java_client.touch.offset.PointOption

import ch.qos.logback.core.joran.conditional.ElseAction
import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils
import groovy.json.internal.NumberValue
import cucumber.api.java.en.Then

public class Authorization {
	//User create an account
	@Given("user already at register page")
	public void user_already_at_register_page() {
		seller_already_at_login_page()
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_register_page"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_register_page"), 0)
		Mobile.tap(findTestObject("Object Repository/Authorization Page/login_register_page"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/register_fullname"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/register_email"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/register_fullname"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/register_email"), 0)
	}

	@When("user submit (.*) with (.*) at register page")
	public void user_submit_with_at_register_page(String field, value) {
		int randomNumber
		String randomChara
		randomChara = RandomStringUtils.randomAlphanumeric(10)
		randomNumber = (int)(Math.random()*1000)

		if(field=="all fields" && value=="valid value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_fullname"), "James Bond", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), randomChara+randomNumber+"@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_password"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_phone_number"), "08123456789", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_city"), "Palembang", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_address"), "Jalan Madu", 0)
		}
		else if(field=="email field" && value=="value that had been register") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_fullname"), "James Bond", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_password"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_phone_number"), "08123456789", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_city"), "Palembang", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_address"), "Jalan Madu", 0)
		}
		else if(field=="name field" && value=="empty value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), randomChara+randomNumber+"@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_password"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_phone_number"), "08123456789", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_city"), "Palembang", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_address"), "Jalan Madu", 0)
		}
		else if(field=="password field" && value=="empty value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_fullname"), "James Bond", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), randomChara+randomNumber+"@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_phone_number"), "08123456789", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_city"), "Palembang", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_address"), "Jalan Madu", 0)
		}
		else if(field=="phone number field" && value=="empty value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_fullname"), "James Bond", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), randomChara+randomNumber+"@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_password"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_city"), "Palembang", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_address"), "Jalan Madu", 0)
		}
		else if(field=="city field" && value=="empty value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_fullname"), "James Bond", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), randomChara+randomNumber+"@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_password"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_phone_number"), "08123456789", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_address"), "Jalan Madu", 0)
		}
		else if(field=="address field" && value=="empty value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_fullname"), "James Bond", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_email"), randomChara+randomNumber+"@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_password"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_phone_number"), "08123456789", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/register_city"), "Palembang", 0)
		}
		Mobile.scrollToText("Daftar")
		Mobile.tap(findTestObject("Object Repository/Authorization Page/account_login_button"), 0)
	}

	@Then("user (.*) register an account")
	public void user_register_an_account(String result) {
		if(result=="successfully") {
			buyer_successfully_login()
		}
		else if(result=="failed to") {
			//Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/icon_error"), 0)
			//Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/message_error"), 0)
			//Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/icon_error"), 0)
			//Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/message_error"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/register_fullname"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/register_email"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/register_fullname"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/register_email"), 0)
		}
	}

	//Seller login
	@Given("seller already at login page")
	public void seller_already_at_login_page() {
		Mobile.startApplication("Apk/app-debug.apk", true)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/icon_account"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_add_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/icon_account"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_add_product"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/icon_account"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/account_login_button"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/account_login_button"), 0)
		Mobile.tap(findTestObject("Object Repository/Authorization Page/account_login_button"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_input_email"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_input_password"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_input_email"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_input_password"), 0)
	}

	@When("seller input (.*) with (.*) at login page")
	public void seller_input_with_at_login_page(String fields, value) {
		if(fields=="all fields" && value=="valid credentials") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "bb@mail.com", 0)
		}
		else if(fields=="email" && value=="invalid credentials") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "bbb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "bb@mail.com", 0)
		}
		else if(fields=="password" && value=="invalid credentials") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "bb@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "bbb@mail.com", 0)
		}
		else if(fields=="email" && value=="empty value") {
			//Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "bb@mail.com", 0)
		}
		else if(fields=="password" && value=="empty value") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "bb@mail.com", 0)
			//Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "", 0)
		}
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
		Mobile.tap(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
	}

	@Then("seller (.*) login")
	public void seller_login(String result) {
		if(result=="successfully") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/button_my_order"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/button_log_out"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/button_my_order"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/button_log_out"), 0)
		}
		else if(result=="failed to") {
			try {
				Thread.sleep(3000)
			} catch (InterruptedException e) {
				e.printStackTrace()
			}
			Mobile.tapAtPosition(700, 200)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_input_email"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_input_password"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_input_email"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_input_password"), 0)
		}
	}

	//Buyer login
	@Given("buyer already at login page")
	public void buyer_already_at_login_page() {
		seller_already_at_login_page()
	}

	//	@When("buyer input all fields with valid credentials at login page")
	//	public void buyer_input_all_fields_with_valid_credentials_at_login_page() {
	//		Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "cc@mail.com", 0)
	//		Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "cc@mail.com", 0)
	//		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
	//		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
	//		Mobile.tap(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
	//	}

	@When("buyer (.*) input all fields with valid credentials at login page")
	public void buyer_input_all_fields_with_valid_credentials_at_login_page(String number) {
		if(number == "1") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "cc@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "cc@mail.com", 0)
		}
		else if(number == "2") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "hh@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "hh@mail.com", 0)
		}else if(number == "3") {
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_email"), "kk@mail.com", 0)
			Mobile.setText(findTestObject("Object Repository/Authorization Page/login_input_password"), "kk@mail.com", 0)
		}
		Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
		Mobile.tap(findTestObject("Object Repository/Authorization Page/login_login_button"), 0)
	}

	@Then("buyer successfully login")
	public void buyer_successfully_login() {
		String result = "succefully"
		seller_login(result)
	}

	//User logout
	@Given("user already at account page")
	public void user_already_at_account_page() {
		buyer_already_at_login_page()
		String number = "1"
		buyer_input_all_fields_with_valid_credentials_at_login_page(number)
		buyer_successfully_login()
	}

	@When("user select logout button")
	public void user_select_logout_button() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/button_log_out"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/button_log_out"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/button_log_out"), 0)
	}

	@Then("user successfully logout from secondhand apps")
	public void user_successfully_logout_from_secondhand_apps() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_all_categories"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_all_categories"), 0)
	}
}
