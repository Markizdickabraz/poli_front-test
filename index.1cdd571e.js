!function(){var n=document.querySelector("body");fetch("https://poli-back.onrender.com/api/goods").then((function(n){if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((function(o){var t=o;console.log(t),function(o){var t=o.map((function(n){var o=n.name,t=n.title,e=n.photo;return"\n    <h1>".concat(o,"</h1>\n    <H2>").concat(t,"</H2>\n    <img width =300 height= 300 src=").concat(e," alt='photo product'</img>\n    ")})).join("");n.innerHTML=t;var e=o[0].product.enamel.colors.map((function(n){var o=n.name,t=n.color,e=n.price;return"\n    <h3>color: ".concat(o,"</h3>\n    <h3>price: ").concat(e,'</h3>\n    <div style= "width :200px; height:100px; background: ').concat(t,'"></div>\n    ')})).join("");n.insertAdjacentHTML("beforeend",e)}(t)})).catch((function(n){console.error("There was a problem with the fetch operation:",n)}))}();
//# sourceMappingURL=index.1cdd571e.js.map