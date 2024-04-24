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

public class WithoutLogin {
	//User want to see <page> page without page
	@Given("user select (.*) page without login")
	public void user_select_page_without_login(String page){
		Mobile.startApplication("Apk/app-debug.apk", true)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_all_categories"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_all_categories"), 0)

		if(page=="akun"){
			Mobile.tap(findTestObject("Object Repository/Profile page/btn_profile"), 0)
		} else if(page=="notification"){
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_notification"), 0)
		} else if(page=="transaction"){
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_transaction"), 0)
		}
	}

	@When("user at (.*) page without login")
	public void user_at_page_without_login(String page){
		if(page=="akun"){
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_akun_saya"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Authorization Page/account_login_button"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_akun_saya"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Authorization Page/account_login_button"), 0)
		} else if(page=="notification") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_notifikasi"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_notifikasi"), 0)
		} else if(page=="transaction"){
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_transaksi"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_transaksi"), 0)
		}
	}

	@Then("user cant see (.*) page without login first")
	public void user_cant_see_page_without_login_first(String page){
		if(page=="akun"){
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_login_akun"), 0)
		} else if(page=="notification") {
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_login_transaksi"), 0)
		} else if(page=="transaction"){
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_login_transaksi"), 0)
		}
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_masuk"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_email"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_password"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_masuk"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_email"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_password"), 0)
	}

	//User use back icon at <page> page
	@Given("user select (.*) page at homepage")
	public void user_select_page_at_homepage(String page) {
		Mobile.startApplication("Apk/app-debug.apk", true)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/textbar_search"), 0)

		if(page=="akun"){
			Mobile.tap(findTestObject("Object Repository/Profile page/btn_profile"), 0)
		} else if(page=="notification"){
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_notification"), 0)
		} else if(page=="transaction"){
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_transaction"), 0)
		}
	}

	@When("user press back at (.*) page")
	public void user_press_back_at_page(String page) {
		Mobile.pressBack()
		if(page=="akun"){
			Mobile.pressBack()
		} else if(page=="notification"){
			Mobile.pressBack()
		} else if(page=="transaction"){
			Mobile.pressBack()
		}
	}

	@Then("user succsessfully use press back")
	public void user_succsessfully_use_press_back() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/textbar_search"), 0)
	}
}

