//Add new item to the list
function newElement() {

    var li = document.createElement('li');
    var inputValue = document.getElementById('itemDescription').value;
    var t = document.createTextNode(inputValue);
    
    li.appendChild(t);
    
    if (inputValue === '') {
        alert('Sorry! Please enter a description.');
        } else { 
            document.getElementById('myUL').appendChild(li);
        }
        document.getElementById('itemDescription').value = '';

    // Create a "close" button and append it to each list item
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
 
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName('close');
    var i;
  
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
  }
}


var add = document.getElementById('add');
add.addEventListener('click', newElement, false);

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);