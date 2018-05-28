import http from "http";

import React from "react";
import ReactDOMServer from "react-dom/server";

import TestComponent from "./TestComponent"

http.createServer(function (request, response) {
	var html = "<html><head></head><body>" + ReactDOMServer.renderToString(<TestComponent />) + "</body></html>";
	response.end(html);
	//response.end();
}).listen(3001);