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

public class Authorization {

	//<case_id>-User login with valid credentials
	@Given("user already at login page")
	public void user_already_at_login_page() {
		WebUI.openBrowser("https://www.saucedemo.com/")
		WebUI.maximizeWindow()
		WebUI.waitForElementPresent(findTestObject("Object Repository/Authorization/Login/input_user_name"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Authorization/Login/input_password"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Authorization/Login/input_user_name"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Authorization/Login/input_password"), 0)
	}

	@When("user input (.*) with (.*) credentials")
	public void user_input_with_credentials(String fields, value) {
		if(fields=="all fields" && value=="service account") {
			WebUI.setText(findTestObject("Object Repository/Authorization/Login/input_user_name"), "standard_user")
			WebUI.setText(findTestObject("Object Repository/Authorization/Login/input_password"), "secret_sauce")
		}
		else if(fields=="all fields" && value=="invalid") {
			WebUI.setText(findTestObject("Object Repository/Authorization/Login/input_user_name"), "Rita123")
			WebUI.setText(findTestObject("Object Repository/Authorization/Login/input_password"), "rita123")
		}
		WebUI.click(findTestObject("Object Repository/Authorization/Login/button_login"))
	}

	@Then("user (.*) to login")
	public void user_to_login(String get) {
		if(get=="successfully") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/text_products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Products Page/icon_cart"), 0)
		}
		else if(get=="failed") {
			WebUI.verifyElementPresent(findTestObject("Object Repository/Authorization/Login/input_user_name"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Authorization/Login/text_not_match_user"), 0)
		}
	}

	//TCLOG03-User want to logout
	@Given("user already at products page")
	public void user_already_at_products_page() {
		user_already_at_login_page()
		String fields = "all fields"
		String value = "service account"
		user_input_with_credentials(fields, value)
		String get = "successfully"
		user_to_login(get)
	}

	@When("user select menu icon at products page")
	public void user_select_menu_icon_at_products_page() {
		WebUI.click(findTestObject("Object Repository/Products Page/icon_menu"))
	}

	@Then("user successfully logout")
	public void user_successfully_logout() {
		WebUI.click(findTestObject("Object Repository/Products Page/button_logout"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Authorization/Login/input_user_name"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Authorization/Login/input_password"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Authorization/Login/input_user_name"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Authorization/Login/input_password"), 0)
	}
}
