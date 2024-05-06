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
import cucumber.api.java.en.And

import groovy.json.StringEscapeUtils
import org.openqa.selenium.Keys

public class Product {

	//Seller want to add a product
	@Given("seller already at add product page")
	public void seller_already_at_add_product_page() {
		WebUI.click(findTestObject("Object Repository/Home Page/button_add_product"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/input_product_name"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/input_product_price"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/input_product_name"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/input_product_price"), 0)
	}

	@When("seller input data in (.*) with (.*) data in the add product page")
	public void seller_input_data_in_with_data_in_the_add_product_page(String fields, value) {
		if(fields=="all fields" && value=="complete") {
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_name"), "Dress Korea")
		}
		else if(fields=="name" && value=="empty value") {
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_name"), "")
		}
		WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_price"), "150000")
		WebUI.selectOptionByIndex(findTestObject("Object Repository/Add Product Page/input_category"), "3")
		WebUI.setText(findTestObject("Object Repository/Add Product Page/input_description"), "Asli dari Import")
		//WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), "C:\\Users\\mhani\\Katalon Studio\\K3 - Web Automation\\Asset\\dress korea.jpg")
		WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), RunConfiguration.getProjectDir() + "/Asset/dress korea.jpg")
		WebUI.scrollToElement(findTestObject("Object Repository/Add Product Page/button_published"), 3)
		WebUI.click(findTestObject("Object Repository/Add Product Page/button_published"))
	}

	@Then("seller will (.*) add a product")
	public void seller_will_add_a_product(String results) {
		if(results=="success") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_edit"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_edit"), 1)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 1)
		}
		else if(results=="failed") {
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/invalid_add_product"), 0)
		}
	}

	//Seller get notifications when adding products
	@Given("seller already at homepage")
	public void seller_already_at_homepage() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/button_home_page"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_home_page"), 0)
	}

	@Then("seller successfully get notifications when adding products")
	public void seller_successfully_get_notifications_when_adding_products() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Notification Page/published_notification"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Notification Page/published_notification"), 0)
	}

	//Seller edit product detail
	@Given("seller already at edit page")
	public void seller_already_at_edit_page() {
		WebUI.click(findTestObject("Object Repository/Home Page/icon_product"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/first_product_card"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/first_product_card"), 0)
		WebUI.scrollToElement(findTestObject("Object Repository/Product Page/first_product_card"), 3)
		WebUI.click(findTestObject("Object Repository/Product Page/first_product_card"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/edit_button"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/edit_button"), 0)
		WebUI.click(findTestObject("Object Repository/Product Page/edit_button"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/input_product_name"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/input_product_name"), 0)
	}

	@When("seller input (.*) using (.*) in the add product page")
	public void seller_input_using_in_the_add_product_page(String fields, data) {
		if(fields=="all field" && data=="valid") {
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_name"), "pensil")
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_price"), "2000")
			WebUI.selectOptionByIndex(findTestObject("Object Repository/Add Product Page/input_category"), "1")
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_description"), "buat menulis")
		}
		else if(fields=="product name field" && data=="empty value") {
			WebUI.clearText(findTestObject("Object Repository/Add Product Page/input_product_name"))
		}
		else if(fields=="product price field" && data=="empty value") {
			WebUI.clearText(findTestObject("Object Repository/Add Product Page/input_product_price"))
		}
		else if(fields=="description field" && data=="empty value") {
			WebUI.clearText(findTestObject("Object Repository/Add Product Page/input_description"))
		}
		WebUI.scrollToElement(findTestObject("Object Repository/Add Product Page/button_published"), 3)
		WebUI.click(findTestObject("Object Repository/Add Product Page/button_published"))
	}

	@Then("seller (.*) edit data with (.*) input for product detail")
	public void seller_edit_data_with_input_for_product_detail(String result, data) {
		if(result=="successfully" && data=="valid") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Preview Page/button_edit"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Preview Page/button_delete"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Preview Page/button_edit"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Preview Page/button_delete"), 0)
		}
		else if(result=="failed" && data=="empty value") {
			def name = "Nama Produk"
			def namePlaceholder = WebUI.getAttribute(findTestObject("Object Repository/Add Product Page/input_product_name"), "Nama Produk")
			def price = "Rp 0,00"
			def pricePlaceholder = WebUI.getAttribute(findTestObject("Object Repository/Add Product Page/input_product_price"), "Rp 0,00")
			def description = "Contoh: Jalan Ikan Hiu 33"
			def descriptionPlaceholder = WebUI.getAttribute(findTestObject("Object Repository/Add Product Page/input_description"), "Contoh: Jalan Ikan Hiu 33")
			if(name == namePlaceholder || price == pricePlaceholder || description == descriptionPlaceholder) {
				KeywordUtil.markPassed("Placeholder is not fill yet")
			}
		}
	}

	//Seller can post/preview the product
	@When("seller input all required fields and select (.*) in add product page")
	public void seller_input_all_required_fields_and_select_in_add_product_page(String button) {
		WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_price"), "50000")
		WebUI.selectOptionByIndex(findTestObject("Object Repository/Add Product Page/input_category"), "1")
		WebUI.setText(findTestObject("Object Repository/Add Product Page/input_description"), "Dijamin Bagus")
		if(button=="terbitkan") {
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_name"), "Headset Gaming ROG")
			WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), RunConfiguration.getProjectDir() + "/Asset/headset.jpg")
			//WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), "C:\\Users\\mhani\\Katalon Studio\\K3 - Web Automation\\Asset\\headset.jpg")
			WebUI.scrollToElement(findTestObject("Object Repository/Add Product Page/button_published"), 3)
			WebUI.click(findTestObject("Object Repository/Add Product Page/button_published"))
		}
		else if(button=="preview") {
			WebUI.setText(findTestObject("Object Repository/Add Product Page/input_product_name"), "Poster One Piece")
			WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), RunConfiguration.getProjectDir() + "/Asset/fotoOne.jpg")
			//WebUI.uploadFile(findTestObject("Object Repository/Add Product Page/upload_image"), "C:\\Users\\mhani\\Katalon Studio\\K3 - Web Automation\\Asset\\fotoOne.jpg")
			WebUI.scrollToElement(findTestObject("Object Repository/Add Product Page/button_preview"), 3)
			WebUI.click(findTestObject("Object Repository/Add Product Page/button_preview"))
		}
	}

	@Then("seller will successfully (.*) the product")
	public void seller_will_successfully_the_product(String results) {
		if(results=="post") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_edit"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_edit"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
		}
		else if(results=="preview") {
			WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_published_preview"), 0)
			WebUI.waitForElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_published_preview"), 0)
			WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 5)
		}
	}

	//Seller can delete the product
	@Given("seller open daftar jual saya page")
	public void seller_open_daftar_jual_saya_page() {
		WebUI.click(findTestObject("Object Repository/Home Page/icon_product"))
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_sold_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_sold_products"), 0)

	}

	@When("seller select product that will be delete at product page")
	public void seller_select_product_that_will_be_delete_at_product_page() {
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/first_product_card"), 0)
		WebUI.scrollToElement(findTestObject("Object Repository/Product Page/first_product_card"), 3)
		WebUI.click(findTestObject("Object Repository/Product Page/first_product_card"))
		WebUI.verifyElementPresent(findTestObject("Object Repository/Add Product Page/button_delete"), 0)
		WebUI.click(findTestObject("Object Repository/Add Product Page/button_delete"))
	}

	@Then("seller successfully delete the product")
	public void seller_successfully_delete_the_product() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_interested_products"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_sold_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_sold_products"), 0)
	}

	//Displays a list of product
	@Given("user already at product list page")
	public void user_already_at_product_list_page() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/icon_product"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/icon_product"), 0)
		WebUI.click(findTestObject("Object Repository/Home Page/icon_product"))
	}

	@When("user go to all products list at product page")
	public void user_go_to_all_products_list_at_product_page() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_created_products"), 0)
		WebUI.click(findTestObject("Object Repository/Product Page/button_created_products"))
	}

	@Then("user can view all product that had been create")
	public void user_can_view_all_product_that_had_been_create() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/first_product_card"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/first_product_card"), 0)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Product Page/button_add_product"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/button_add_product"), 0)
	}

	//Buyer want to see product description
	@Given("user input product name at search icon")
	public void user_input_product_name_at_search_icon() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Home Page/button_home_page"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Home Page/button_home_page"), 0)
		WebUI.click(findTestObject("Object Repository/Home Page/search_products"))
		WebUI.setText(findTestObject("Object Repository/Home Page/search_products"), "Mobil balap super")
		WebUI.sendKeys(findTestObject("Object Repository/Home Page/search_products"), Keys.chord(Keys.ENTER))
	}

	@When("user select products at homepage")
	public void user_select_products_at_homepage() {
		WebUI.scrollToElement(findTestObject("Object Repository/Home Page/find_category"), 3)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Product Page/search_product_card"), 0)
		WebUI.click(findTestObject("Object Repository/Product Page/search_product_card"))
	}

	@Then("user successfully too see product description")
	public void user_successfully_too_see_product_description() {
		WebUI.waitForElementPresent(findTestObject("Object Repository/Buy Product Page/button_offfering"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Buy Product Page/button_offfering"), 0)
		WebUI.scrollToElement(findTestObject("Object Repository/Buy Product Page/button_offfering"), 3)
		WebUI.waitForElementPresent(findTestObject("Object Repository/Buy Product Page/description_text"), 0)
		WebUI.verifyElementPresent(findTestObject("Object Repository/Buy Product Page/description_text"), 0)
	}
}
