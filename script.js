let value = {
	"A": "4", 
	"a": "4",
	"L": "1",
	"l": "1",
	"i": "3",
	"I": "3",
	"C": "4",
	"c": "4",
	"e": "0",
	"E": "0"
};

let cmb = function (text) {
	if(text.length % 2 != 0) text += "e";
	let left = 0, right = (text.length)-1;
	let textMod = "";
	while(left < right) {
		textMod += (text[right] + text[left]);
		left++, right--;
	}
	return textMod;
}

function encrypted(text){
	let _str = text.split("");
	for(let i=0;i<_str.length;i++) {
		if(value[_str[i]] != undefined) {
			   _str[i] = value[_str[i]];
		}
	}
	return _str.join("");
}

function ALCe(text, key) {
	text = (text.split("").reverse().join("") + key);
	text = cmb(text);
	text = encrypted(text);
	return text;
}


function main() {
	box = document.getElementById('box');
	
	text = document.Box1.text.value;
	key = document.Box1.key.value;

	box.innerHTML = ALCe(text, key);
}

window.onload = function() {
	document.Box1.submit.onclick = main;
};
