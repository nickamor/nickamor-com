let colors = [
	{ bg: "#ffbf00", contrast: "#36454f", normal: "#f5f0f0" }
];

function generateStylesheet() {
	let c = colors[0];
	return `:root { --bg: ${c.bg}; --contrast: ${c.contrast}; --normal: ${c.normal}; }`;
}

exports.handler = function(event, context, callback) {
	let response = {
	    statusCode: 200,
	    body: "",
	    headers: {
	    	"Set-Cookie": "seen-it=yeah",
	    	"Content-Type": "text/css"
	    }
    };

    let reqCookie = event.headers["Cookie"];

    if (typeof reqCookie === "string"
    	&& reqCookie.includes("seen-it=yeah")) {
    	response.body = generateStylesheet();
    }

	callback(null, response);
}
