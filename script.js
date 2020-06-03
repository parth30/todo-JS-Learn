// alert("Connected !!");
var ul = document.getElementById('list');

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItems);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItems);



// var addItems112 = function(){
//     console.log("Tested1112")
// }
// addItems112();
// var first = new Array(2);
// first=['test','help'];
// console.log(first);

function removeItems(){
    //console.log("Testedremove")

    let UILIST = ul.children;
    
 //   let child=ul.children;
  //  console.log(UILIST);
    console.log(UILIST.length);
    for(let i=0;i<UILIST.length;i++){
        console.log(UILIST[i].children[0].checked);
        while(UILIST[i]&&UILIST[i].children[0].checked ){
            ul.removeChild(UILIST[i]);
            console.log(i);
            
        }
       
    }
   // console.log(UILIST);
  //  console.log(child);
}



function addItems(){
    //console.log("Tested")
let Text= document.getElementById('input').value;
let li=document.createElement('li');
let priority=document.getElementsByName('Priority');
console.log(priority);
for(let j=0;j<priority.length;j++){
 if(priority[j].checked){
 var checkedPriority=priority[j].nextSibling.nextSibling.textContent;
 console.log(checkedPriority);
 }
}
let input=document.createElement('input');
let label = document.createElement('label')
input.type='checkbox';
input.className='check';
label.textContent=Text;
li.className='mycheck';

if(Text !=''){
    if(checkedPriority=='High'){
      li.className='mycheckHigh';  
      var chH= document.getElementsByClassName('mycheckHigh');
    }
    if(checkedPriority=='Low'){
        li.className='mycheckLow';  
        var chH= document.getElementsByClassName('mycheckLow');
      }
    if(checkedPriority=='Medium'){
        li.className='mycheckMedium';  
        var chH= document.getElementsByClassName('mycheckMedium');
      }
console.log(chH); 
if(chH.length==0){
ul.appendChild(li);
li.appendChild(input);
li.appendChild(label);
}
else{
   ul.insertBefore(li,chH[0])
    li.appendChild(input);
    li.appendChild(label);   
}
}
else{
  alert('Please enter a Todo!')  
}
}


