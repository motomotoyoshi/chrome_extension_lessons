(async function () {

    const links = [...document.links].filter(link => link.href.match(/^http:\/\//));
    let list1 = [];
    let list2 = [];

    let httpslinks = links.map(link => toHttps(link.href));

    for (const httpslink of httpslinks){
        try {
            await fetch(httpslink);
            await list1.push(httpslink);
        } catch (err) {
            list2.push(httpslink);
        }
    }

    function toHttps(href) {
        return href.slice(0, 4) + 's' + href.slice(4);
    }

    console.log(httpslinks);
    console.log(httpslinks.length);

    console.log(list1);
    console.log(list1.length);

    console.log(list2);
    console.log(list2.length);
})();