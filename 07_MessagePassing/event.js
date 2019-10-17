'use strict';

chrome.runtime.onMessage.addListener(
    (message, sender, callback) => {
        chrome.browserAction.setBadgeText({text: message.count + ''});
    }
);