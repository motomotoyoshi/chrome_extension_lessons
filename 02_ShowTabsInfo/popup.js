'use strict';

chrome.tabs.query({}, (tabs) => {
    let i;
    let results = document.getElementById('results');
    let titles = [];

    for (i = 0; i < tabs.length; i++){
        titles.push(tabs[i].title);
    }
    results.value = titles.join('\n');
    results.select();
});