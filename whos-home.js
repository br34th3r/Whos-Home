const express = require('express');
const app = express();

const port = 80;

let piotr = false;
let josh = false;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		josh: josh ? "Home" : "Not Home", 
		piotr: piotr ? "Home" : "Not Home",
		joshColor: josh ? "#77DD77" : "#FF9494",
		piotrColor: piotr ? "#77DD77" : "#FF9494"
	});
});

app.get('/piotr', (req, res) => {
	try {
		res.json({ home: piotr });
		console.log("Sent Piotr");
	} catch {
		res.json({ home: "Error" });
		console.log("Error sending Piotr");
	}
});

app.get('/josh', (req, res) => {
	try {
		res.json({ home: josh });
		console.log("Sent Josh");
	} catch {
		res.json({ home: "Error" });
		console.log("Error sending Josh");
	}
});

app.get('/piotr/toggle', (req, res) => {
	try {
		piotr = !piotr;
		req.query.response ? res.json({ success: true, home: piotr }) : res.redirect('/');
		console.log("Toggled Piotr");
	} catch {
		res.json({ success: false, home: piotr });
		console.log("Toggled Piotr");
	}
});

app.get('/josh/toggle', (req, res) => {
	try {
		josh = !josh;
		req.query.response ? res.json({ success: true, home: josh }) : res.redirect('/');
		console.log("Toggled Josh");
	} catch {
		res.json({ success: false, home: josh });
		console.log("Error toggling Josh");
	}
});

app.listen(port, () => {
	console.log("Listening on port: %s", port);
});
