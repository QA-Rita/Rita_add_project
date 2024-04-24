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

public class Selling {
	@Given("seller already open Daftar Jual Saya page")
	public void seller_already_open_Daftar_Jual_Saya_page() {
		WebUI.click(findTestObject("Object Repository/Home Page/icon_product"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"),0)
	}

	@When("seller go to (.*) page")
	public void seller_go_to_page(String page){
		if(page=="Diminati") {
			WebUI.click(findTestObject("Object Repository/Product Page/button_interested_products"))
			WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_sold_products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_sold_products"), 0)
		}
		else if(page=="Terjual") {
			WebUI.click(findTestObject("Object Repository/Product Page/button_sold_products"))
			WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
		}
	}

	@Then("seller can see the list of items (.*)")
	public void seller_can_see_the_list_of_items(String menu){
		if(menu=="being bid") {
			WebUI.click(findTestObject("Object Repository/Product Page/view_interested_products"))
		}
		else if(menu=="have been sold") {
			WebUI.click(findTestObject("Object Repository/Product Page/view_sold_products"))
		}
		WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_edit"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_edit"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
	}
}
