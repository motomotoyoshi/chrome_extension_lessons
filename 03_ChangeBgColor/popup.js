'use strict';

const colors = document.getElementById('colors');

colors.addEventListener('change', () => {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + colors.value + '"'
    });
});