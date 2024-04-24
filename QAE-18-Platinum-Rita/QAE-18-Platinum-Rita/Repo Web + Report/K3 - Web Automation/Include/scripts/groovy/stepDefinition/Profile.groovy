package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
//import static org.mockito.Mockito.verify

import java.security.PublicKey

import org.eclipse.persistence.jpa.jpql.parser.ElseExpressionBNF
import org.seleniumhq.jetty9.util.Fields

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.configuration.RunConfiguration
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
import com.kms.katalon.core.util.KeywordUtil

import ch.qos.logback.core.joran.conditional.ElseAction
import internal.GlobalVariable

import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils

public class Profile {
	@Given("user already on the profile page")
	public void user_already_on_the_profile_page() {
		WebUI.click(findTestObject("Object Repository/Home Page/icon_profile"))
		WebUI.click(findTestObject("Object Repository/Home Page/profile_name"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Profile Page/input_name"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Profile Page/input_address"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Profile Page/input_name"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Profile Page/input_address"), 0)
	}

	@When("user input (.*) section with (.*) data in the profile page")
	public void user_input_section_with_data_in_the_profile_page(String fields, fill) {
		if(fields=="all" && fill=="complete") {
			WebUI.setText(findTestObject("Object Repository/Profile Page/input_name"), "Kelompok 3 Seller")
		}
		else if(fields=="name" && fill=="empty value") {
			WebUI.clearText(findTestObject("Object Repository/Profile Page/input_name"))
		}
		WebUI.uploadFile(findTestObject("Object Repository/Profile Page/upload_image"), RunConfiguration.getProjectDir() + "/Asset/Anime1.jpeg")
		//WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), "C:\\Users\\mhani\\Katalon Studio\\K3 - Web Automation\\Asset\\Anime1.jpeg")
		WebUI.selectOptionByIndex(findTestObject("Object Repository/Profile Page/input_city"), "3")
		WebUI.setText(findTestObject("Object Repository/Profile Page/input_address"), "jln.Tawakal23")
		WebUI.setText(findTestObject("Object Repository/Profile Page/input_no_handphone"), "081316318584")
		WebUI.scrollToElement(findTestObject("Object Repository/Profile Page/button_save"), 3)
		WebUI.click(findTestObject("Object Repository/Profile Page/button_save"))
	}

	@Then("user will (.*) edit the profile")
	public void user_will_edit_the_profile(String get) {
		if(get=="success") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/button_add_product"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_add_product"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_profile"), 0)
		}
		else if(get=="failed") {
			String nama = "Nama"
			String namaPlaceholder = WebUI.getAttribute(findTestObject("Object Repository/Profile Page/placeholder_name"), "Nama")
			if(nama == namaPlaceholder)
				KeywordUtil.markPassed("Placeholder is as expected.")
		}
	}
}
