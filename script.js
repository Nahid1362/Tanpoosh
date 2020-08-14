/* Add any JavaScript you need to this file. */
var clothesDiv;
window.addEventListener('load', makeItems);
var menuButton;
var menuItems;
var main;
function makeItems() {
  main = document.getElementById('main');
  clothesDiv = document.getElementById('clothes');
  var mansButton = document.getElementById('mans');
  var womansButton = document.getElementById('womans');
  var allButton = document.getElementById('all');

  mansButton.addEventListener('click', showMans);
  womansButton.addEventListener('click', showWomans);
  allButton.addEventListener('click', showAll);

  for (var i = 0; i < clothes.length; i++) {
    makeCard(clothes[i]);
  }
  console.log(clothesDiv);
  menuItems = document.getElementById('menuItems');
  menuButton = document.getElementById('menu');
  menuButton.addEventListener('click', showMenu);
}

function showMans() {
  var mydiv = document.getElementById('clothes');
  while (mydiv.firstChild) {
    mydiv.removeChild(mydiv.firstChild);
    console.log('1 card delete');
  }
  clothesDiv.id = 'clothes';
  for (var i = 0; i < clothes.length; i++) {
    if (clothes[i].category == 'Man') makeCard(clothes[i]);
  }
}
function showMans() {
  var mydiv = document.getElementById('clothes');
  while (mydiv.firstChild) {
    mydiv.removeChild(mydiv.firstChild);
  }
  for (var i = 0; i < clothes.length; i++) {
    if (clothes[i].category == 'Man') makeCard(clothes[i]);
  }
}
function showWomans() {
  var mydiv = document.getElementById('clothes');
  while (mydiv.firstChild) {
    mydiv.removeChild(mydiv.firstChild);
  }
  for (var i = 0; i < clothes.length; i++) {
    if (clothes[i].category == 'Woman') makeCard(clothes[i]);
  }
}

function showAll() {
  var mydiv = document.getElementById('clothes');
  while (mydiv.firstChild) {
    mydiv.removeChild(mydiv.firstChild);
  }
  for (var i = 0; i < clothes.length; i++) {
    makeCard(clothes[i]);
  }
}

function showMenu() {
  if (menuItems.style.display == 'none') {
    menuItems.style.display = 'block';
  } else menuItems.style.display = 'none';
}
function makeCard(cloth) {
  var card = document.createElement('div');
  card.className = 'card';
  var img = document.createElement('img');
  img.src = 'images/' + cloth.number + '.jpg';
  img.id = 'suit';
  card.appendChild(img);
  var h2 = document.createElement('h2');
  h2.className = 'clothTitle';
  h2.innerHTML = cloth.name;
  card.appendChild(h2);
  var p3 = document.createElement('p');
  p3.className = 'category';
  var p3text = document.createTextNode(cloth.category + '');
  p3.appendChild(p3text);
  card.appendChild(p3);
  var p1 = document.createElement('p');
  p1.className = 'cad';
  var p1text = document.createTextNode('CAD $');
  p1.appendChild(p1text);
  card.appendChild(p1);
  var p2 = document.createElement('p');
  p2.className = 'price';
  var p2text = document.createTextNode(cloth.price + '');
  p2.appendChild(p2text);
  card.appendChild(p2);

  var button = document.createElement('button');
  button.className = 'button';
  var buttonText = document.createTextNode('Buy it');
  button.appendChild(buttonText);
  card.appendChild(button);
  console.log(card);
  clothesDiv.appendChild(card);
}

/* <div class="card">
<img src="images/benjamin-rascoe-xI-Ok6EJMzU-unsplash.jpg"  alt="men cloth" id="suit">
<h2 class="clothTitle">Title</h2>
<p class="cad">CAD $</p>
<p class="price">199.90</p>
<button class="button">Buy it</button>
</div> */
