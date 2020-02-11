// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex);
}

document.getElementById('textNotes').onkeyup = function(element) {
  let textNotes = document.getElementById('textNotes').value;
  let urls = urlify(textNotes.replace(/%20/g, " "));
  for (var x in urls) {
	chrome.tabs.create({url: urls[x]});
  }
};
