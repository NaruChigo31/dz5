let text_elem = document.querySelector(".text-content");
let text_more = document.querySelector(".text-readmore")

let text = text_elem.innerHTML;

let dots = '...';

let text_20 = text.slice(0,19) + dots;

let a = 1;

function changeText(event){
    if (a % 2 == 0){
        text_elem.innerHTML = text;
        a += 1;
        text_more.innerHTML = 'Read Less';
    } else {
        text_elem.innerHTML = text_20;
        a += 1;    
        text_more.innerHTML = 'Read More';
    }
}

text_more.addEventListener("click", changeText);

console.log(text);
console.log(text_20);