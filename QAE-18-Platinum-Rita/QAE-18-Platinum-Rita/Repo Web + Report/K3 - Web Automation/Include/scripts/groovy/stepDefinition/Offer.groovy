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
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class Offer {
	@Given("seller already open notification page")
	public void seller_already_open_notification_page() {
		WebUI.click(findTestObject("Object Repository/Home Page/icon_notification"))
		WebUI.scrollToElement(findTestObject("Object Repository/Home Page/button_all_notification"), 3)
		WebUI.click(findTestObject("Object Repository/Home Page/button_all_notification"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Notification Page/product_being_offered"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Notification Page/product_being_offered"), 0)
	}

	@When("seller select offer from buyer")
	public void seller_select_offer_from_buyer(){
		WebUI.click(findTestObject("Object Repository/Notification Page/product_being_offered"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/button_accept"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/button_decline"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/button_accept"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/button_decline"), 0)
	}

	@When("seller decline offer from buyer")
	public void seller_decline_offer_from_buyer(){
		WebUI.click(findTestObject("Object Repository/Offer Page/button_decline"))
	}

	@Then("seller succesfully declined offer from buyer")
	public void seller_succesfully_declined_offer_from_buyer(){
		WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/offer_rejected"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/offer_information"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/offer_rejected"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/offer_information"), 0)
	}

	@When("seller accept offer and (.*)")
	public void seller_accept_offer_and(String action) {
		WebUI.click(findTestObject("Object Repository/Offer Page/button_accept"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/button_negotiate_via_wa"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/button_Status"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/button_negotiate_via_wa"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/button_Status"), 0)
		if(action=="contact buyer via wa") {
			WebUI.click(findTestObject("Object Repository/Offer Page/button_negotiate_via_wa"))
		}
		else if(action=="change status to successfully sold") {
			WebUI.click(findTestObject("Object Repository/Offer Page/button_Status"))
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/input_ofer_status_cancelled"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/input_offer_status_finished"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/input_ofer_status_cancelled"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/input_offer_status_finished"), 0)
			WebUI.click(findTestObject("Object Repository/Offer Page/input_offer_status_finished"))
			WebUI.click(findTestObject("Object Repository/Offer Page/button_submit_offer"))
		}
		else if(action=="change status to canceled transaction") {
			WebUI.click(findTestObject("Object Repository/Offer Page/button_Status"))
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/input_ofer_status_cancelled"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/input_offer_status_finished"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/input_ofer_status_cancelled"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/input_offer_status_finished"), 0)
			WebUI.click(findTestObject("Object Repository/Offer Page/input_ofer_status_cancelled"))
			WebUI.click(findTestObject("Object Repository/Offer Page/button_submit_offer"))
		}
	}

	@Then("seller done (.*)")
	public void seller_done(String condition) {
		if(condition=="negotiate with buyer") {
			WebUI.switchToWindowTitle("Share on WhatsApp")
			String title = WebUI.getWindowTitle()
			WebUI.verifyMatch(title, "Share on WhatsApp", true)
		}
		else if(condition=="finished the order") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/successfully_sold"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/offer_information"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/successfully_sold"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/offer_information"), 0)
		}
		else if(condition=="canceled the order") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/sale_canceled"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Offer Page/offer_information"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/sale_canceled"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Offer Page/offer_information"), 0)
		}
	}
}