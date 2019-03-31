let colors = [
	{ bg: "#ffbf00", contrast: "#36454f", normal: "#f5f0f0" },
	{ bg: "#424242", contrast: "#76ff03", normal: "#b5b5b5" },
	{ bg: "#76ff03", contrast: "#424242", normal: "#424242" },
	{ bg: "#36454f", contrast: "#ffbf00", normal: "#f5f0f0" },
	{ bg: "#251351", contrast: "#e2d7d3", normal: "#b5b5b5" },
	{ bg: "#ff3800", contrast: "#030708", normal: "#030708" },
	{ bg: "#2b64a9", contrast: "#fffcff", normal: "#b5b5b5" },
	{ bg: "#cbd4c2", contrast: "#19647e", normal: "#50514f" },
	{ bg: "#50514f", contrast: "#f4c430", normal: "#b5b5b5" },
	{ bg: "#ede8e8", contrast: "#71cfeb", normal: "#b5b5b5" },
	{ bg: "#33302b", contrast: "#d40000", normal: "#b5b5b5" },
	{ bg: "#393d3f", contrast: "#62929e", normal: "#b5b5b5" },
	{ bg: "#fff", contrast: "#00f", normal: "#000"},
	{ bg: "#fff", contrast: "#000", normal: "#000"},
	{ bg: "#000", contrast: "#f00", normal: "#fff"},
	{ bg: "#000", contrast: "#0f0", normal: "#fff"}
];

function generateStylesheet() {
	let n = Math.floor(Math.random() * colors.length);
	let c = colors[n];
	return `:root { --bg: ${c.bg} !important; --contrast: ${c.contrast} !important; --normal: ${c.normal} !important; }`;
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

    let reqCookie = event.headers["cookie"];

    if (typeof reqCookie === "string"
    	&& reqCookie.includes("seen-it=yeah")) {
    	response.body = generateStylesheet();
    }

	callback(null, response);
}
