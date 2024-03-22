
require('mocha')
var expect = require('chai').expect
var assert = require('chai').assert

let valueInjector = require('../select-value-injector')


let testData1 = {
	businessName: 'Emergent Ideas',
	alternateName: '',
	whenDate: new Date(2017, 10, 16, 14, 20, 30, 700),
	thenDate: new Date(2017, 10, 16, 14, 20, 30, 700).toString(),
	timeAndLabor: 'two',
	timeAndLabor2: true,
	timeAndLabor4: false,
	timeAndLabor3: 'two',
	videoUrl: 'home-small-new',
	videoUrl2: ''
	
}

describe("standard parsing and execution", function() {
	it('select values', function() {

		assert.equal(
			valueInjector(
				"			<select class=\"form-control\" id=\"videoUrl\" name=\"videoUrl\">\n" + 
				"				<option value=\"\" >-- no video --</option>\n" + 
				"				<option value=\"bgc\" selected=\"selected\" >bgc</option>\n" + 
				"				<option value=\"clements\">clements</option>\n" + 
				"				<option value=\"clements-6m\">clements-6m</option>\n" + 
				"				<option value=\"home-small-new\">home-small-new</option>\n" + 
				"				<option value=\"mayo\">mayo</option>\n" + 
				"				<option value=\"smart-hr-home-2\">smart-hr-home-2</option>\n" + 
				"				<option value=\"smart-hr-home-small\">smart-hr-home-small</option>\n" + 
				"				<option value=\"smart-hr-home-small-new\">smart-hr-home-small-new</option>\n" + 
				"				<option value=\"smart-hr-training\">smart-hr-training</option></select>\n" ,
				testData1
			),
			"			<select class=\"form-control\" id=\"videoUrl\" name=\"videoUrl\">\n" + 
			"				<option value=\"\" >-- no video --</option>\n" + 
			"				<option value=\"bgc\" >bgc</option>\n" + 
			"				<option value=\"clements\">clements</option>\n" + 
			"				<option value=\"clements-6m\">clements-6m</option>\n" + 
			"				<option value=\"home-small-new\" selected=\"selected\" >home-small-new</option>\n" + 
			"				<option value=\"mayo\">mayo</option>\n" + 
			"				<option value=\"smart-hr-home-2\">smart-hr-home-2</option>\n" + 
			"				<option value=\"smart-hr-home-small\">smart-hr-home-small</option>\n" + 
			"				<option value=\"smart-hr-home-small-new\">smart-hr-home-small-new</option>\n" + 
			"				<option value=\"smart-hr-training\">smart-hr-training</option></select>\n" 
		)
		
		assert.equal(
			valueInjector(
				"			<select class=\"form-control\" id=\"videoUrl2\" name=\"videoUrl2\">\n" + 
				"				<option value=\"\">-- no video --</option>\n" + 
				"				<option value=\"bgc\" >bgc</option>\n" + 
				"				<option value=\"clements\">clements</option>\n" + 
				"				<option value=\"clements-6m\">clements-6m</option>\n" + 
				"				<option value=\"home-small-new\" selected=\"selected\" >home-small-new</option>\n" + 
				"				<option value=\"mayo\">mayo</option>\n" + 
				"				<option value=\"smart-hr-home-2\">smart-hr-home-2</option>\n" + 
				"				<option value=\"smart-hr-home-small\">smart-hr-home-small</option>\n" + 
				"				<option value=\"smart-hr-home-small-new\">smart-hr-home-small-new</option>\n" + 
				"				<option value=\"smart-hr-training\">smart-hr-training</option></select>\n" ,
				testData1
			),
			"			<select class=\"form-control\" id=\"videoUrl2\" name=\"videoUrl2\">\n" + 
			"				<option value=\"\" selected=\"selected\" >-- no video --</option>\n" + 
			"				<option value=\"bgc\" >bgc</option>\n" + 
			"				<option value=\"clements\">clements</option>\n" + 
			"				<option value=\"clements-6m\">clements-6m</option>\n" + 
			"				<option value=\"home-small-new\" >home-small-new</option>\n" + 
			"				<option value=\"mayo\">mayo</option>\n" + 
			"				<option value=\"smart-hr-home-2\">smart-hr-home-2</option>\n" + 
			"				<option value=\"smart-hr-home-small\">smart-hr-home-small</option>\n" + 
			"				<option value=\"smart-hr-home-small-new\">smart-hr-home-small-new</option>\n" + 
			"				<option value=\"smart-hr-training\">smart-hr-training</option></select>\n" 
		)

		assert.equal(
			valueInjector(
				"			<select class=\"form-control\" id=\"videoUrl3\" name=\"videoUrl3\">\n" + 
				"				<option value=\"\">-- no video --</option>\n" + 
				"				<option value=\"bgc\" >bgc</option>\n" + 
				"				<option value=\"clements\">clements</option>\n" + 
				"				<option value=\"clements-6m\">clements-6m</option>\n" + 
				"				<option value=\"home-small-new\" selected=\"selected\" >home-small-new</option>\n" + 
				"				<option value=\"mayo\">mayo</option>\n" + 
				"				<option value=\"smart-hr-home-2\">smart-hr-home-2</option>\n" + 
				"				<option value=\"smart-hr-home-small\">smart-hr-home-small</option>\n" + 
				"				<option value=\"smart-hr-home-small-new\">smart-hr-home-small-new</option>\n" + 
				"				<option value=\"smart-hr-training\">smart-hr-training</option></select>\n" ,
				testData1
			),
			"			<select class=\"form-control\" id=\"videoUrl3\" name=\"videoUrl3\">\n" + 
			"				<option value=\"\">-- no video --</option>\n" + 
			"				<option value=\"bgc\" >bgc</option>\n" + 
			"				<option value=\"clements\">clements</option>\n" + 
			"				<option value=\"clements-6m\">clements-6m</option>\n" + 
			"				<option value=\"home-small-new\" selected=\"selected\" >home-small-new</option>\n" + 
			"				<option value=\"mayo\">mayo</option>\n" + 
			"				<option value=\"smart-hr-home-2\">smart-hr-home-2</option>\n" + 
			"				<option value=\"smart-hr-home-small\">smart-hr-home-small</option>\n" + 
			"				<option value=\"smart-hr-home-small-new\">smart-hr-home-small-new</option>\n" + 
			"				<option value=\"smart-hr-training\">smart-hr-training</option></select>\n" 
		)
	})
})