(function () {

    const links = [...document.links].filter(link => link.href.match(/^http:\/\//));
    let list1 = [];
    let list2 = [];
    let list3 = [];

    let https = links.map(link => toHttps(link.href));

    for(let i = 0; i < https.length; i++){
        fetch(https[i])
        .then(res => list1.push(https[i]), rej => list2.push(rej))
        .catch(ng => list3.push(ng));
    }

    function toHttps(href) {
        return href.slice(0, 4) + 's' + href.slice(4);
    }

    console.log(links);
    console.log(links.length);
    console.log(https);
    console.log(https.length);
    console.log(list1);
    console.log(list1.length);
    console.log(list2);
    console.log(list2.length);
    console.log(list3);
    console.log(list3.length);
})();