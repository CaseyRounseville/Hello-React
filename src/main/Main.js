import http from "http";

import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";

import TestComponent from "./TestComponent"

http.createServer(function (request, response) {
		switch (request.url) {
		case "/style.css":
			fs.readFile("./style.css", (err, data) => {
				if (err) {
					console.log(err);
					response.end("There was a problem reading the style");
				} else {
					response.end(data);
				}
			});
			break;
		default:
			fs.readFile("./Page.html", (err, data) => {
				if (err) {
					console.log(err);
					response.end("There was a problem reading the page");
				} else {
					response.end(data + ReactDOMServer.renderToString(<TestComponent />));
				}
			});
			break;
		}
}).listen(3001);