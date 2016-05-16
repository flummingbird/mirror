//API here: https://github.com/ttezel/twit
//get other user's text
//ie godtributes
var Twit = require('twit');
var T = new Twit({
  consumer_key:         'UrKeyHere',
  consumer_secret:      'UrSecret',
  access_token:         'UrtokenHere',
  access_token_secret:  'UrTokenSecretHere',
  timeout_ms:           60*1000,
 })
var buddy = '@FakeUnicode'


T.get('statuses/user_timeline', { screen_name: buddy, count: 1},  function(err, data, response){
	var id = data[0].id;
	var tweet =data[0].text ;
	var teewt = flipString(tweet);
	T.post('statuses/update', {status: '.'+ buddy + ' ' + teewt  , in_reply_to_status_id: id });
	console.log(id,teewt);
})

T.post('statuses/update', {status: buddy + ' the mirror reflects your message' })


//source www.fliptext.org/flip.js?c=2
//stolen by me

function flipString(aString) {
	aString = aString.toLowerCase();
	var last = aString.length - 1;
	var result = "";
	for (var i = last; i >= 0; --i) {
		result += flipChar(aString.charAt(i))
	}
	return result;
}

function flipChar(c) {
	if (c == 'a') {
		return '\u0250'
	}
	else if (c == 'b') {
		return 'q'
	}
	else if (c == 'c') {
		return '\u0254'  
	}
	else if (c == 'd') {
		return 'p'
	}
	else if (c == 'e') {
		return '\u01DD'
	}
	else if (c == 'f') {
		return '\u025F' 
	}
	else if (c == 'g') {
		return 'b'
	}
	else if (c == 'h') {
		return '\u0265'
	}
	else if (c == 'i') {
		return '\u0131'//'\u0131\u0323' 
	}
	else if (c == 'j') {
		return '\u0638'
	}
	else if (c == 'k') {
		return '\u029E'
	}
	else if (c == 'l') {
		return '\u05DF'
	}
	else if (c == 'm') {
		return '\u026F'
	}
	else if (c == 'n') {
		return 'u'
	}
	else if (c == 'o') {
		return 'o'
	}
	else if (c == 'p') {
		return 'd'
	}
	else if (c == 'q') {
		return 'b'
	}
	else if (c == 'r') {
		return '\u0279'
	}
	else if (c == 's') {
		return 's'
	}
	else if (c == 't') {
		return '\u0287'
	}
	else if (c == 'u') {
		return 'n'
	}
	else if (c == 'v') {
		return '\u028C'
	}
	else if (c == 'w') {
		return '\u028D'
	}
	else if (c == 'x') {
		return 'x'
	}
	else if (c == 'y') {
		return '\u028E'
	}
	else if (c == 'z') {
		return 'z'
	}
	else if (c == '[') {
		return ']'
	}
	else if (c == ']') {
		return '['
	}
	else if (c == '(') {
		return ')'
	}
	else if (c == ')') {
		return '('
	}
	else if (c == '{') {
		return '}'
	}
	else if (c == '}') {
		return '{'
	}
	else if (c == '?') {
		return '\u00BF'  
	}
	else if (c == '\u00BF') {
		return '?'
	}
	else if (c == '!') {
		return '\u00A1'
	}
	else if (c == "\'") {
		return ','
	}
	else if (c == ',') {
		return "\'"
	}
	else if (c == '.') {
		return '\u02D9'
	}
	else if (c == '_') {
		return '\u203E'
	}
	else if (c == ';') {
		return '\u061B'
	}
	else if (c == '9') {
		return '6'
	}
	else if (c == '6') {
		return '9'
	}
	return c;
}
