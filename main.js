onload = function() {

// to create element by js without using html file, we have 2 ways:
// 1- 
document.body.innerHTML= `
<div class= "container1">
    <h1>hello anas</h1>
</div>
`
let x = document.getElementsByClassName('container1')[0];
console.log(x.children[0]);

//----------------
let container3 = document.createElement('div');
let ele = document.createElement('p');
let nod2 = document.createTextNode('this is textNode');

ele.appendChild(nod2);
container3.appendChild(ele);
document.body.appendChild(container3);

console.log(container3.children[0]);


// 2- we want a div with content h1, img :
//1- create all elements we need 
let container2 = document.createElement('div');
let head = document.createElement('h1');
let img = document.createElement('img');

//2- create the contents of these elements:
// let content = document.createTextNode('saad');
head.innerText = 'saad';     // or like this 
img.src = 'postBox.png';      // add photo to the img

//3- add the content to the specific element:
// head.appendChild(content);
container2.appendChild(head);
container2.appendChild(img);
document.body.appendChild(container2);

// now we can add any property :
container2.style.backgroundColor='blue';
container2.style.textAlign= 'center';
container2.style.margin='20px';
head.style.color='red';
img.style.backgroundColor='green';


}