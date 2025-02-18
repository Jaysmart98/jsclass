function showToast(text, bgColor = '#000', colour ='#fff', grav = 'top'){
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: grav, // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
      color: colour,
    },
    onClick: function(){} // Callback after click
  }).showToast();
}


   var allItems = []
   var editIndex;

function addItem() {
if(item.value ==''){
  showToast('input can not be empty', 'green', '#fff')
    // allItems.push(item.value)
}
else{
  allItems.push(item.value)
    showToast(`${item.value} added successfully!`,"linear-gradient(to right, #00b09b, #96c93d)", '#fff')
    document.getElementById('item').value = ''
    console.log(allItems);
    displayItems()
    }
 }

 function deleteItem(i){
  console.log(i);
  var sure = confirm("Confirm delete")
  console.log(sure);
  if(sure == true) {
    allItems.splice(i,1)
    displayItems()
    showToast(`Delete successfully!`, 'green', '#fff', "top")
  } else {
    displayItems()
  }
 }

 function editItem(i) {
   editIndex = i
 }

 function saveChanges() {
   allItems.splice(editIndex,1,newItem.value)
   displayItems()
 }

function displayItems() {
  showItems.innerHTML = ''

  allItems.map((data, index) => {
    showItems.innerHTML += `
    <p>${index + 1}. ${data}</p>
    <button onclick="deleteItem(${index})" class="btn btn-dark btn-sm">Delete</button>
    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-secondary btn-sm">Edit</button>
    `
   })
}


// var food = ['rice', 'beans', 'bole', 'fish', 'chicken']
// for(i=0; i<food.length; i++)
// showItems.innerHTML += `<p>${i+1}. ${food[i]}</p>`

//  food.map((data, index) => {
//   showItems.innerHTML += `<p>${index+1}. ${data}</p>`
//  })