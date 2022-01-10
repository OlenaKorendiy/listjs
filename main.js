// Створити кнопку "закрити", та додати її до кожного елемента списку
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Кнопка закриття, щоб приховати поточний елемент списку
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Додасть символ "позначено" при натисканні на елемент списку
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Створити новий елемент списку, через фунцію, натиснувши кнопку "Додати", якщо нічого не введенно виводить повідомлення через "alert"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Потрібно ввести справу!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Створюємо ссилку для першого елемента
var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
firstItem.innerHTML = '' + itemContent + '';
firstItem.innerHTML='<a href=" ">'+itemContent+'</a>';

//Добавляємо в заголовок кількість справ у списку
var listItems = document.querySelectorAll('li');
var heading = document. querySelector('h2'); 
var headingText = heading.firstChild.nodeValue; 
var totalItems = listItems.length; 
var newHeading = headingText + '<span>' + ' ' + totalItems + '</span>'; 
heading.innerHTML = newHeading; 

// Редагуємо текст у спику li
var edit = document.querySelectorAll('.edit');
var text = document.querySelectorAll('li');

for( let i = 0; i < edit.length; i++ ){
  let editMode = false;
  
  edit[i].addEventListener('click', function(){
    if( editMode ) {
      this.textContent = "Редагувати";
      text[i].removeAttribute('contentEditable');
    } else {
      this.textContent = "Ok";      
      text[i].setAttribute('contentEditable', true);
      text[i].focus();
    }
    
    editMode = !editMode;
  });
}
// Змінюємо колір li, при натисканні кнопки
document.getElementById("button").addEventListener("click", function(){
  var hotItems = document.querySelectorAll('li'); 
if (hotItems.length > 0) {
for (var i=0; i<hotItems.length; i++) { 
hotItems[i].className = 'cool'; 
}
}
});
