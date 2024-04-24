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
import groovy.json.StringEscapeUtils
import org.openqa.selenium.Keys

public class Homepage {
	//Category
	@Given("user already at homepage")
	public void user_already_at_homepage() {
		//full screen
		WebUI.maximizeWindow()
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_notification"), 0)
	}

	@When("user sellect product (.*) bar at homepage")
	public void user_sellect_product_bar_at_homepage(String category){
		WebUI.scrollToElement(findTestObject("Object Repository/Home Page/text_60_percent"), 3)
		if(category=="Hobby"){
			WebUI.click(findTestObject("Object Repository/Home Page/category_hobby"))
		} else if(category=="Vehicle"){
			WebUI.click(findTestObject("Object Repository/Home Page/category_vehicle"))
		} else if(category=="Healty"){
			WebUI.click(findTestObject("Object Repository/Home Page/category_healty"))
		} else if(category=="Electronic"){
			WebUI.click(findTestObject("Object Repository/Home Page/category_electronic"))
		} else if(category=="Clotes"){
			WebUI.click(findTestObject("Object Repository/Home Page/category_clotes"))
		}
	}

	@Then("user can see product (.*)")
	public void user_can_see_product(String category){
		WebUI.scrollToElement(findTestObject("Object Repository/Home Page/text_60_percent"), 5)
		if(category=="Hobby"){
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/category_hobby"), 0)
		} else if(category=="Vehicle"){
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/category_vehicle"), 0)
		} else if(category=="Healty"){
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/category_healty"), 0)
		} else if(category=="Electronic"){
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/category_electronic"), 0)
		} else if(category=="Clotes"){
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/category_clotes"), 0)
		}
	}

	//Search product
	@Given("user navigates to the search icon section")
	public void user_navigates_to_the_search_icon_section() {
		WebUI.click(findTestObject("Object Repository/Home Page/search_products"))
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_search"), 0)
	}

	@When("user input relevant keywords into the search field")
	public void user_input_relevant_keywords_into_the_search_field() {
		WebUI.setText(findTestObject("Object Repository/Home Page/search_products"), "Dress Korea")
		WebUI.sendKeys(findTestObject("Object Repository/Home Page/search_products"), Keys.chord(Keys.ENTER))
	}

	@Then("user successfully search product by relevan keyword")
	public void user_successfully_search_product_by_relevan_keyword() {
		WebUI.scrollToElement(findTestObject("Object Repository/Home Page/find_category"), 3)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/find_search_product"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/find_search_product"), 0)
	}
}
