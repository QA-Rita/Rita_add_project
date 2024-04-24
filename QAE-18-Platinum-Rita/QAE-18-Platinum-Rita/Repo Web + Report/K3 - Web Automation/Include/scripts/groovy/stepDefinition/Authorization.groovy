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
	@Given("user already at register page")
	public void user_already_at_register_page() {
		WebUI.openBrowser("https://secondhand.binaracademy.org/users/sign_up")
		WebUI.verifyElementPresent(findTestObject("Object Repository/Register Page/input_name"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Register Page/input_email"),0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Register Page/input_password"),0)
	}

	@When("user input (.*) with (.*) at register page")
	public void user_input_field_with_value_at_register_page(String fields, value) {
		if(fields=="all" && value=="valid credentials") {
			WebUI.setText(findTestObject("Object Repository/Register Page/input_name"), "Ramadhannisa A")
			int RandomNumber;
			RandomNumber = (int)(Math.random()*1000)
			WebUI.setText(findTestObject("Object Repository/Register Page/input_email"), "nisa"+RandomNumber+"@mail.com")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_password"), "test123")
		}
		else if(fields=="email" && value=="value that has been taken") {
			WebUI.setText(findTestObject("Object Repository/Register Page/input_name"), "Binar Challenge Platinum")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_email"), "tugas123@mail.com")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_password"), "tugas")
		}
		else if(fields=="name" && value=="empty value") {
			WebUI.setText(findTestObject("Object Repository/Register Page/input_name"), "")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_email"), "tugas1234@mail.com")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_password"), "tugas")
		}
		else if(fields=="email" && value=="empty value") {
			WebUI.setText(findTestObject("Object Repository/Register Page/input_name"), "Binar Challenge Platinum Satu")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_email"), "")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_password"), "tugas")
		}
		else if(fields=="password" && value=="empty value") {
			WebUI.setText(findTestObject("Object Repository/Register Page/input_name"), "Binar Challenge Platinum Dua")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_email"), "tugas321@mail.com")
			WebUI.setText(findTestObject("Object Repository/Register Page/input_password"), "")
		}
		WebUI.click(findTestObject("Object Repository/Register Page/button_register"))
	}
	
	@Then("user (.*) to register using (.*)")
	public void user_result_to_register_using_value(String result, value) {
		if(result=="success" && value=="valid credentials") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
		}
		else if(result=="failed" && value=="value that has been taken") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Register Page/alert_email_has_already_taken"),0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Register Page/alert_email_has_already_taken"),0)
		}
		else if(result=="failed" && value=="empty values") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Register Page/placeholder_name"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Register Page/placeholder_email"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Register Page/placeholder_password"), 0)
			String namePlaceholder = "Nama Lengkap"
			String nameplaceholder = WebUI.getAttribute(findTestObject("Object Repository/Profile Page/placeholder_name"), "Placeholder name register")
			if(namePlaceholder != nameplaceholder) {
				KeywordUtil.markFailed("Placeholder is not as expected.")
			}
			String emailregisterPlaceholder = "Contoh: johndee@gmail.com"
			String emailregisterplaceholder = WebUI.getAttribute(findTestObject("Object Repository/Profile Page/placeholder_email"), "Placeholder email register")
			if(emailregisterPlaceholder != emailregisterplaceholder) {
				KeywordUtil.markFailed("Placeholder is not as expected.")
			}
			String passwordregisterPlaceholder = "Masukkan password"
			String passwordregisterplaceholder = WebUI.getAttribute(findTestObject("Object Repository/Profile Page/placeholder_password"), "Placeholder password register")
			if(passwordregisterPlaceholder != passwordregisterplaceholder) {
				KeywordUtil.markFailed("Placeholder is not as expected.")
			}
		}
	}

	@Given("user already at login page")
	public void user_already_at_login_page() {
		WebUI.openBrowser("https://secondhand.binaracademy.org/users/sign_in")
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/input_email"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/input_password"),0)
	}

	@When("user input (.*) with (.*) at login page")
	public void user_input_with_at_login_page(String fields, value) {
		if(fields=="all fields" && value=="valid credentials") {
			WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "bb@mail.com")
			WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "bb")
		}
		else if(fields=="email" && value=="invalid credentials") {
			WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "bb333@mail.com")
			WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "bb")
		}
		else if(fields=="password" && value=="invalid credentials") {
			WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "bb@mail.com")
			WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "bb33")
		}
		else if(fields=="email" && value=="empty value") {
			WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "")
			WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "bb")
		}
		else if(fields=="password" && value=="empty value") {
			WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "bb@mail.com")
			WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "")
		}
		WebUI.click(findTestObject("Object Repository/Login Page/button_login"))
	}

	@Then("user (.*) to login using (.*)")
	public void user_result_to_login_using_value(String result, value) {
		if(result=="success" && value=="valid credentials") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/button_add_product"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_add_product"), 0)
		}
		else if(result=="failed" && value=="invalid credentials") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Login Page/alert_invalid_email_password"),0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/alert_invalid_email_password"),0)
		}
		else if(result=="failed" && value=="empty values") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Login Page/placeholder_email"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Login Page/placeholder_password"), 0)
			String emailPlaceholder = "Contoh: johnde@@gmail.com"
			String emailplaceholder = WebUI.getAttribute(findTestObject("Object Repository/Profile Page/placeholder_email"), "Placeholder email")
			if(emailPlaceholder != emailplaceholder) {
				KeywordUtil.markFailed("Placeholder is not as expected.")
			}
			String passwordPlaceholder = "Masukkan password"
			String passwordplaceholder = WebUI.getAttribute(findTestObject("Object Repository/Profile Page/placeholder_password"), "Placeholder password")
			if(passwordPlaceholder != passwordplaceholder) {
				KeywordUtil.markFailed("Placeholder is not as expected.")
			}
		}
	}

	//Buyer want to login
	@Given("buyer already at login page")
	public void buyer_already_at_login_page() {
		WebUI.openBrowser("https://secondhand.binaracademy.org/users/sign_in")
		WebUI.maximizeWindow()
		WebUI.waitForElementPresent(findTestObject("Object Repository/Login Page/input_email"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Login Page/input_password"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/input_email"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/input_password"),0)
	}

	@When("buyer login with valid credentials at login page")
	public void buyer_login_with_valid_credentials_at_login_page() {
		WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "dd@mail.com")
		WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "dd")
		WebUI.click(findTestObject("Object Repository/Login Page/button_login"))
	}

	@Then("buyer successfully login")
	public void buyer_successfully_login() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
	}

	//User want to logout
	@Given("user already login")
	public void user_already_login() {
		WebUI.openBrowser("https://secondhand.binaracademy.org/users/sign_in")
		WebUI.maximizeWindow()
		WebUI.setText(findTestObject("Object Repository/Login Page/input_email"), "bb@mail.com")
		WebUI.setText(findTestObject("Object Repository/Login Page/input_password"), "bb")
		WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/input_email"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Login Page/input_password"),0)
		WebUI.click(findTestObject("Object Repository/Login Page/button_login"))
	}

	@When("user select logout button")
	public void user_select_logout_button() {
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
		WebUI.click(findTestObject("Object Repository/Home Page/icon_profile"))
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_logout"), 0)
		WebUI.click(findTestObject("Object Repository/Home Page/button_logout"))
	}

	@Then("user successfully logout")
	public void user_successfully_logout() {
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_home_page"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_login"), 0)
	}
}

