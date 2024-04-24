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
import cucumber.api.java.en.Then
import stepDefinition.Product


public class Category {
	//User can filter product by <fields> category
	@Given("user already at homepage")
	public void user_already_at_homepage() {
		Product homepage = new Product()
		homepage.seller_already_at_homepage()
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_elektronic_category"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_computer_and_accessories_category"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_elektronic_category"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_computer_and_accessories_category"), 0)
	}

	@When("user choose (.*) category")
	public void user_choose_category(String category) {
		if(category=="elektronic") {
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_elektronic_category"), 0)
		}
		else if(category=="computer and accessories") {
			Mobile.tap(findTestObject("Object Repository/Home Page/btn_computer_and_accessories_category"), 0)
		}
	}

	@Then("user can filter product by (.*) category")
	public void user_can_filter_product_by_category(String category) {
		if(category=="elektronic") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_category_elektronic_product1"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_category_elektronic_product2"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_category_elektronic_product1"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_category_elektronic_product2"), 0)
		}
		else if(category=="computer and accessories") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_computer_and_accessories_category_product1"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_computer_and_accessories_category_product2"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_computer_and_accessories_category_product1"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_computer_and_accessories_category_product2"), 0)
		}
	}
}
