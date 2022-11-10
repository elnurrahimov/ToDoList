let input = document.querySelector('#inputMain');
let toDoListText = document.querySelector('.toDoListText')
let form = document.querySelector('form');
let listMain = document.querySelector('#listMain');
let form_main = document.querySelector('.form_main');
let toDoList = document.querySelector('.toDoList')
let btn = document.querySelector('.buttonMain');
let sortIcon1 = document.querySelector('.sortIcon1');
let sortIcon2 = document.querySelector('.sortIcon2');
let iconContainer = document.querySelector('.iconContainer');
let list_item = document.querySelector('.list_item');
let sortArray = [];

eventListeners();

function eventListeners() {
  toDoList.addEventListener('keyup', addNewItem);
  btn.addEventListener('click', addNewInput);
  sortIcon1.addEventListener('click', sortArrayFunc);
  sortIcon2.addEventListener('click',sortArrayReverseFunc);
}

document.getElementById("inputMain").focus();

function addNewItem(e) {

  if (e.keyCode == 13 && form_main.style.display != 'none' && input.value !="" && input.value !=" ") {

    //create li
    let li = document.createElement('li');
    li.className = 'list_item item';
    li.setAttribute('draggable',true);
    li.innerHTML = `${input.value}<ion-icon name="close-outline" class="close"></ion-icon>`;

    //add li to ul
    listMain.appendChild(li);

    //clear input 
    input.value = "";

    //first style
    form_main.style.display = 'none';
    toDoList.style.paddingBottom = " 0.536vw";

    //delete item function
    deleteItem();

    //scroll
      toDoList.scrollTop=toDoList.scrollHeight;
  }
}

function addNewInput(e) {
  form_main.style.display = 'flex';
  sortIcon1.style.opacity = '.3';

  //focus method
  document.getElementById("inputMain").focus();

  toDoListText.scrollTop = toDoListText.scrollHeight;
}

function deleteItem() {
  const close = document.querySelectorAll('.close');

  close.forEach(item => {
    item.addEventListener('click', (e) => {
      
      if (e.target.className.includes('close')){
        
        e.target.parentElement.remove();
        form_main.appendChild(iconContainer);
        input.value = "";

        if(listMain.childElementCount == 0){
          form_main.style.display = 'flex';
        }
      }
    });
  });

}

function sortArrayFunc(){
    sortIcon1.style.opacity = '1';
    let li = document.querySelectorAll('li');
    sortArray = [];
    li.forEach(item => {
        sortArray.push(item.innerHTML);
    })

    //sort array
    sortArray.sort();

    //sort in html
    for(let i = 0; i < (li.length); i++){
        li[i].innerHTML = sortArray[i];
    }
    
    //delete item
    deleteItem();

    sortIcon1.style.display = 'none';
    sortIcon2.style.display = 'flex';
    
}

function sortArrayReverseFunc(){
  sortIcon2.style.display = 'none';
  sortIcon1.style.display = 'block';
  sortIcon1.style.opacity = '233232';
  
  li = document.querySelectorAll('li');
    sortArray = [];
    li.forEach(item => {
        sortArray.push(item.innerHTML);
    })

    //sort array
    sortArray.sort().reverse();

    //sort in html
    for(let i = 0; i < (li.length); i++){
        li[i].innerHTML = sortArray[i];
    }
 
  //delete item
  deleteItem();
}

//drag item
const dragArea = document.querySelector('.wrapper');
    new Sortable(dragArea , {
     animation: 350
})
    

