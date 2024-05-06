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
import com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
//import org.openqa.selenium.Keys
import org.openqa.selenium.Keys

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils
import cucumber.api.java.en.Then
import cucumber.api.java.en.And

public class Product {

	//MOB49-Buyer view product detail
	@Given("seller already at homepage")
	public void seller_already_at_homepage() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_home"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_home"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_notification"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_notification"), 0)
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_home"), 0)
	}

	@When("seller select product at homepage")
	public void seller_select_product_at_homepage() {
		Mobile.tap(findTestObject("Object Repository/Home Page/first_product_card"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_offer"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_offer"), 0)
	}

	@Then("seller can view product detail")
	public void seller_can_view_product_detail() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/text_detail_product"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_offer"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/text_detail_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_offer"), 0)
	}

	//Seller post a product using <value> value in <fields> field
	@Given("seller already in post product page")
	public void seller_already_in_post_product_page(){
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_add_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_add_product"), 0)
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_add_product"), 0)
	}

	@When("seller input (.*) field with (.*) value")
	public void seller_input_field_with_value(String fields, value) {
		if(fields=="all" && value=="valid") {
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_name"), "Foto abstrak keren", 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_price"), "55000", 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_category"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_elektronic_category"), 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_location"), "Galery Nasional", 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_description"), "foto keren jangan dihujat", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_publish"), 0)
		}
		else if(fields=="product name" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_price"), "55000", 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_category"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_elektronic_category"), 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_location"), "Galery Nasional", 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_description"), "foto keren jangan dihujat", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_publish"), 0)
		}
		else if(fields=="produk price" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_name"), "Foto abstrak keren", 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_category"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_elektronic_category"), 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_location"), "Galery Nasional", 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_description"), "foto keren jangan dihujat", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_publish"), 0)
		}
		else if(fields=="location" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_name"), "Foto abstrak keren", 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_price"), "55000", 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_category"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_elektronic_category"), 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_description"), "foto keren jangan dihujat", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_publish"), 0)
		}
		else if(fields=="description" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_name"), "Foto abstrak keren", 0)
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_price"), "55000", 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_category"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_elektronic_category"), 0)
			Mobile.hideKeyboard()
			Mobile.setText(findTestObject("Object Repository/Home Page/Add Product Page/input_product_location"), "Galery Nasional", 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Home Page/Add Product Page/btn_publish"), 0)
		}
	}

	@Then("seller (.*) to post a product with (.*) value in (.*) field")
	public void seller_to_post_a_product_with_value_in_field(String result,value,fields) {
		if(result=="successfully" && value=="valid" && fields=="all" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="product name" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/warning_product_name"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/warning_product_name"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="produk price" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/warning_price"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/warning_price"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="location" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/warning_location"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/warning_location"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="description" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/warning_description"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/warning_description"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/Add Product Page/text_add_product"), 0)
		}
	}

	//Seller edit a product <value> value in <fields> field
	@Given("seller already in edit product page")
	public void seller_already_in_edit_product_page(){
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/icon_account"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/icon_account"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/icon_account"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/icon_my_list_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/icon_my_list_product"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/icon_my_list_product"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/view_first_product"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
	}

	@When("seller edit value in (.*) field with (.*) value")
	public void seller_edit_value_in_field_with_value(String fields, value) {
		if(fields=="all" && value=="valid") {
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_name"), "gambar abstrak", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_price"), "123000", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_location"), "dijalan yang benar", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_description"), "buatan picasso", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_update_product"), 0)
		}
		else if(fields=="product name" && value=="empty") {
			Mobile.clearText(findTestObject("Object Repository/Account/Edit Product Page/input_product_name"), 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_price"), "123000", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_location"), "dijalan yang benar", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_description"), "buatan picasso", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_update_product"), 0)
		}
		else if(fields=="produk price" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_name"), "gambar abstrak", 0)
			Mobile.clearText(findTestObject("Object Repository/Account/Edit Product Page/input_product_price"), 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_location"), "dijalan yang benar", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_description"), "buatan picasso", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_update_product"), 0)
		}
		else if(fields=="location" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_name"), "gambar abstrak", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_price"), "123000", 0)
			Mobile.clearText(findTestObject("Object Repository/Account/Edit Product Page/input_product_location"), 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_description"), "buatan picasso", 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_update_product"), 0)
		}
		else if(fields=="description" && value=="empty") {
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_name"), "gambar abstrak", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_price"), "123000", 0)
			Mobile.setText(findTestObject("Object Repository/Account/Edit Product Page/input_product_location"), "dijalan yang benar", 0)
			Mobile.clearText(findTestObject("Object Repository/Account/Edit Product Page/input_product_description"), 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/input_product_image"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_galery"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/image_first"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/Edit Product Page/btn_update_product"), 0)
		}
	}

	@Then("seller (.*) to edit a product with (.*) value in (.*) field")
	public void seller_to_edit_a_product_with_value_in_field(String result,value,fields) {
		if(result=="successfully" && value=="valid" && fields=="all" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/text_product_successfully_updated"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/text_product_successfully_updated"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="product name" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/warning_product_name"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/warning_product_name"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="produk price" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/warning_price"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/warning_price"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="location" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/warning_location"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/warning_location"), 0)
		}
		else if(result=="failed" && value=="empty" && fields=="description" ) {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/Edit Product Page/warning_description"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/title_edit_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/Edit Product Page/warning_description"), 0)
		}
	}

	//Seller can do <options> a product
	@Given("seller already at product list page")
	public void_seller_already_at_product_list_page() {
		Mobile.tap(findTestObject("Object Repository/Account/icon_my_list_product"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_product"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
	}

	@When("seller select (.*) a product")
	public void seller_select_a_product(String options) {
		if(options=="cancel delete") {
			Mobile.tap(findTestObject("Object Repository/Account/My List Product/icon_trash"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/My List Product/btn_cancel_delete_product"), 0)
		}
		else if(options=="delete") {
			Mobile.tap(findTestObject("Object Repository/Account/My List Product/icon_trash"), 0)
			Mobile.tap(findTestObject("Object Repository/Account/My List Product/btn_delete_product"), 0)
		}
	}

	@Then("seller successfully do (.*) a product")
	public void seller_successfully_do_a_product(String options) {
		if(options=="cancel delete") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_product"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_my_sell_list"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_product"), 0)
		}
		else if(options=="delete") {
			Mobile.verifyElementVisible(findTestObject("Object Repository/Product Page/My List Product/toast_success_delete"), 0)
		}
	}

	//MOB44-User search a product
	@Given("user navigates to the search icon section")
	public void user_navigates_to_the_search_icon_section() {
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_home"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_home"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_home"), 0)
	}

	@When("user enters relevant keywords into the search field")
	public void user_enters_relevant_keywords_into_the_search_field() {
		Mobile.tap(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.setText(findTestObject("Object Repository/Home Page/textbar_search"), "Foto abstrak keren", 0)
		Mobile.tap(findTestObject("Object Repository/Home Page/search_first_product"), 0)
	}

	@Then("page will display products from the search results")
	public void page_will_display_products_from_the_search_results() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Home Page/btn_nego"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/textbar_search"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Home Page/btn_nego"), 0)
	}

	//MOB01-Buyer send an offer
	@Given("buyer already search a product")
	public void buyer_already_search_a_product() {
		user_navigates_to_the_search_icon_section()
		user_enters_relevant_keywords_into_the_search_field()
		page_will_display_products_from_the_search_results()
	}

	@When("buyer enters submit the offer price")
	public void buyer_enters_submit_the_offer_price() {
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_nego"), 0)
		Mobile.setText(findTestObject("Object Repository/Home Page/input_offer_price"), "20000", 0)
		Mobile.pressBack()
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_send_offer_price"), 0)
		Mobile.pressBack()
	}

	@Then("buyer successfully send a bid")
	public void buyer_successfully_send_a_bid() {
		page_will_display_products_from_the_search_results()
	}

	//MOB45-Seller can see notification information
	@Given("seller already upload the product at product page")
	public void seller_already_upload_the_product_at_product_page() {
		seller_already_in_post_product_page()
		String fields = "all"
		String value = "valid"
		seller_input_field_with_value(fields, value)
		String result = "successfully"
		seller_to_post_a_product_with_value_in_field(result,value,fields)
	}

	@When("seller go to notification page")
	public void seller_go_to_notification_page() {
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/btn_back_my_sell_list"), 0)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_notification"), 0)
	}

	@Then("seller should receive berhasil diterbitkan")
	public void seller_should_receive_berhasil_diterbitkan() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/header_transaction"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/text_published"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/header_transaction"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/text_published"), 0)
	}

	//Seller can see notification information
	@Given("seller already get an offer at product page")
	public void seller_already_get_an_offer_at_product_page() {
		Mobile.tap(findTestObject("Object Repository/Account/icon_my_list_product"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/icon_trash"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/icon_trash"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_product"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_penawaran_product"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_penawaran_product"), 0)
	}

	@When("seller go to notification page at home")
	public void seller_go_to_notification_page_at_home() {
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/btn_back_my_sell_list"), 0)
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_notification"), 0)
	}

	@Then("seller should receive penawaran produk")
	public void seller_should_receive_penawaran_produk() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/header_transaction"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/text_penawaran_produk"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/header_transaction"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/text_penawaran_produk"), 0)
	}

	//Buyer get <status> notification
	@Given("buyer already made an offer on a product")
	public void buyer_already_made_an_offer_on_a_product() {
		Authorization login = new Authorization()
		String result = "successfully"
		login.seller_login(result)
	}

	@When("buyer go to notification page")
	public void buyer_go_to_notification_page() {
		Mobile.pressBack()
		Mobile.tap(findTestObject("Object Repository/Product Page/My List Product/btn_back_offer_2"), 0)
		Mobile.tap(findTestObject("Object Repository/Home Page/btn_notification"), 0)
	}

	@Then("buyer successfully get (.*) notification")
	public void buyer_successfully_get_notification(String status) {
		if(status=="berhasil ditawar") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/text_kamu_akan_dihubungi"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/text_penawaran_produk"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/text_kamu_akan_dihubungi"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/text_penawaran_produk"), 0)
		}
		else if(status=="penawaran ditolak") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/text_kamu_akan_dihubungi"), 0)
			Mobile.waitForElementPresent(findTestObject("Object Repository/Notification/text_penawaran_produk"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/text_kamu_akan_dihubungi"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Notification/text_penawaran_produk"), 0)
		}
	}
	// Seller can see the list of items Diminati and Terjual
	@Given("seller already open Daftar Jual Saya page")
	public void seller_already_open_Daftar_Jual_Saya_page () {
		Mobile.tap(findTestObject("Object Repository/Account/button_my_selling_list"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/back_button_selling_list"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/header_my_selling_list"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/back_button_selling_list"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/header_my_selling_list"), 0)
	}

	@Then("seller can see the list of items (.*)")
	public void seller_can_see_the_list_of_items(String menu){
		if(menu=="being bid") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_first_card_diminati"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_first_card_diminati"), 0)
		}
		else if(menu=="have been sold") {
			Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_first_card_sold_out"), 0)
			Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_first_card_sold_out"), 0)
		}

	}

	//Seller can decline offer from buyer
	@Given("seller already open Diminati page")
	public void seller_already_open_Diminati_page() {
		Mobile.tap(findTestObject("Object Repository/Account/button_my_selling_list"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/back_button_selling_list"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/header_my_selling_list"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/back_button_selling_list"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/header_my_selling_list"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
	}
	@When("seller select offer from buyer")
	public void seller_select_offer_from_buyer() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/view_first_card_diminati"), 0)

	}
	@When("seller decline offer from buyer")
	public void seller_decline_offer_from_buyer() {
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_reject"), 0)
	}
	@Then ("seller successfully declined offer from buyer")
	public void seller_sucessfully_decline_offer_from_buyer() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/card_reject_immediately"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/card_reject_immediately"), 0)
	}

	@When("seller go to (.*) page at Daftar Jual Saya page")
	public void seller_go_to_page_at_Daftar_Jual_Saya_page(String page) {
		if(page=="Diminati") {
			Mobile.tap(findTestObject("Object Repository/Account/My List Product/view_diminati"), 0)
		}
		else if(page=="Terjual") {
			Mobile.tap(findTestObject("Object Repository/Account/My List Product/view_sold_out"), 0)
		}
	}

	@When("seller accept offer and change status to canceled transaction")
	public void seller_accept_offer_and_change_status_to_canceled_transaction() {
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_accept"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/bottom_sheet"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/button_contact_wa"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/bottom_sheet"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/button_contact_wa"), 0)
		Mobile.pressBack()

		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_status"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/bottom_sheet_for_status"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/bottom_sheet_for_status"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/radio_button_cancel_transaction"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_save_status"), 0)
	}

	@Then("seller done canceled the order")
	public void seller_done_canceled_the_order() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/card_buyer_info"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/card_item_cancel_transaction"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_item_price_cancel_transaction_from_card"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/card_buyer_info"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/card_item_cancel_transaction"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_item_price_cancel_transaction_from_card"), 0)
	}

	@When("seller accept offer and change status to successfully sold")
	public void seller_accept_offer_and_change_status_to_successfully_sold() {
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_accept"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/bottom_sheet"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/button_contact_wa"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/bottom_sheet"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/button_contact_wa"), 0)
		Mobile.pressBack()

		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_status"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/bottom_sheet_for_status"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/bottom_sheet_for_status"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/radio_button_success"), 0)
		Mobile.tap(findTestObject("Object Repository/Account/My List Product/button_save_status"), 0)
	}

	@Then("seller done finished the order")
	public void seller_done_finished_the_forder() {
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/card_buyer_info"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/card_item_cancel_transaction"), 0)
		Mobile.waitForElementPresent(findTestObject("Object Repository/Account/My List Product/text_item_price_cancel_transaction_from_card"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/card_buyer_info"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/card_item_cancel_transaction"), 0)
		Mobile.verifyElementVisible(findTestObject("Object Repository/Account/My List Product/text_item_price_cancel_transaction_from_card"), 0)
	}
}