

let nameAttrPattern = /\sname=["'](.*?)["']/i
let valAttrPattern = /\svalue=["'](.*?)["']/i
let typeAttrPattern = /\stype=["'](.*?)["']/i
let selectPattern = /(<select[\w\W]*?select\w*>)/im
let selectedAttrPattern = /\sselected(=["'](.*?)["'])?/i


function fetchValue(obj, path) {
	try {
		with(obj) {
			return eval(path)
		}
	}
	catch(e) {}
	return null
}

function escForRegex(val) {
	if(val && val.replace) {
		return val.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
	}
	else {
		return val;
	}
}

function isOrContains(target, possible) {
	if(typeof possible == 'array') {
		possible.includes(target)
	}
	else {
		return target == possible
	}
}


let injectValues = function(text, values) {
	
	let result = ''
	
	text.split(selectPattern).forEach((item) => {
		if(item.toLowerCase().indexOf('<select') == 0) {
			let r = item.match(nameAttrPattern)
			let name = r ? r[1] : null
			
			let newVal = fetchValue(values, name)
			if(typeof newVal != 'undefined' && newVal !== null) {
				item = item.replace(selectedAttrPattern, '')
				let optionMatch = item.match( new RegExp('value=["\']' + escForRegex(newVal) + '["\']', 'i'))
				if(optionMatch) {
					let breakIndex = item.indexOf(optionMatch[0]) + optionMatch[0].length
					item = item.slice(0, breakIndex) + ' selected="selected" ' + item.substring(breakIndex)
				}
			}
			
			result += item
		}
		else {
			result += item
		}
	})
	
	return result
}


module.exports = injectValues