package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

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
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.util.internal.PathUtil as PathUtil


import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils
import cucumber.api.java.en.Then

public class Profile {
	@Given("user already at profile page")
	public void user_already_at_profile_page() {
		Mobile.tap(findTestObject("Object Repository/Profile page/icon_pencil"),0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/info_profile_page"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/info_profile"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/info_profile_page"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/info_profile"), 0)
	}

	@When("user input (.*) section with (.*) data in the profile page")
	public void user_input_section_with_data_in_the_profile_page(String fields, fill) {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/icon_foto"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/icon_foto"), 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/icon_foto"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/btn_image"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/btn_image"), 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_image"), 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/first_image"), 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_name"), 0)
		Mobile.setText(findTestObject("Object Repository/Profile page/field_name"), "Muthia", 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_save"),0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_phone_number"), 0)
		Mobile.setText(findTestObject("Object Repository/Profile page/field_phone_number"), "089010215455", 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_save"),0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_city"), 0)
		Mobile.setText(findTestObject("Object Repository/Profile page/field_city"), "jakarta", 0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_save"),0)
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_address"), 0)

		if(fields=="all" && fill=="complete") {
			Mobile.setText(findTestObject("Object Repository/Profile page/field_address"), "jln.sakura", 0)
		}
		else if(fields=="address" && fill=="empty value") {
			Mobile.clearText(findTestObject("Object Repository/Profile page/field_address"), 0)
		}
		Mobile.tap(findTestObject("Object Repository/Profile page/btn_save"),0)
		Mobile.hideKeyboard()
	}

	@Then("user will (.*) edit the profile")
	public void user_will_edit_the_profile(String result) {
		if(result=="success") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/popup_success"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/popup_success"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/info_profile_page"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/info_profile_page"), 0)
		}
		else if(result=="failed") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/warning_message"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/warning_message"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Profile page/warning"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Profile page/warning"), 0)
		}
	}
}
