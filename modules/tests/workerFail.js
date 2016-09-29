/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/ */
"use strict";
/* global onmessage:true, postMessage, close */

onmessage = function(event) {
	let data = event.data;
	if (data === "close") {
		close();
		return;
	}
	data.result = "worker";
	postMessage(data);
};

postMessage(true);
