let divElem = document.querySelector("p");
let div2Elem = divElem.nextElementSibling;
console.log(divElem); 
console.log(div2Elem)

let pElem = document.body.children[1];
console.log(pElem);


divElem.style.color = "indigo";
div2Elem.style.color = "indigo";
pElem.style.color = "indianred";

// ######################################
const inner_p = Array.from(document.querySelectorAll("#container p"));
const outer_p = Array.from(document.querySelectorAll("#container~p"));

inner_p.forEach((p) => {
    p.style.color = "indigo";
});

outer_p.forEach((p) => {
    p.style.color = "indianred";
});