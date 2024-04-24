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

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import cucumber.api.java.en.And
import org.openqa.selenium.Keys

public class Buyer {
	//Buyer bid a product to seller
	@Given("buyer search product that want to buy at homepage")
	public void buyer_search_product_that_want_to_buy_at_homepage() {
		WebUI.click(findTestObject("Object Repository/Home Page/search_products"))
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_search"), 0)
		WebUI.setText(findTestObject("Object Repository/Home Page/search_products"), "Dress Korea")
		WebUI.sendKeys(findTestObject("Object Repository/Home Page/search_products"), Keys.chord(Keys.ENTER))
		WebUI.scrollToElement(findTestObject("Object Repository/Home Page/search_buy_product"), 3)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/search_buy_product"), 0)
		WebUI.click(findTestObject("Object Repository/Home Page/search_buy_product"))
	}

	@When("buyer sending bid price to seller")
	public void buyer_sending_bid_price_to_seller() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Buy Product Page/button_offfering"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Buy Product Page/button_offfering"), 0)
		WebUI.click(findTestObject("Object Repository/Buy Product Page/button_offfering"))
		WebUI.setText(findTestObject("Object Repository/Buy Product Page/input_offering_price"), "100000")
		WebUI.click(findTestObject("Object Repository/Buy Product Page/button_send_offer"))
	}

	@Then("buyer successfully bid a product to seller")
	public void buyer_successfully_bid_a_product_to_seller() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Buy Product Page/unclickable_button"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Buy Product Page/unclickable_button"), 0)
	}
}
