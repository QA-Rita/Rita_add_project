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
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils
import cucumber.api.java.en.Then


public class Buyer {
	@Given("buyer already at Akun page")
	public void buyer_already_at_Akun_page () {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/button_my_order"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/button_my_order"), 0)
	}

	@When("buyer go to Transaksi page")
	public void buyer_go_to_Transaksi_page () {
		Mobile.tap(findTestObject("Object Repository/Home Page/Icon_transaksi"), 0)
	}

	@Then("buyer are able to see Transaksi page successfully")
	public void buyer_are_able_to_see_Transaksi_page_successfully () {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Transaction Page/header_transaction"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Transaction Page/header_transaction"), 0)
	}

	@When("buyer select Pesanan Saya")
	public void buyer_select_Pesanan_Saya () {
		Mobile.tap(findTestObject("Object Repository/Account/button_my_order"), 0)
	}

	@Then("buyer are able to see items they bid")
	public void buyer_are_able_to_see_items_they_bid () {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My Order/text_pesanan_saya"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My Order/card_1card"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My Order/text_pesanan_saya"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My Order/card_1card"), 0)
	}
}
