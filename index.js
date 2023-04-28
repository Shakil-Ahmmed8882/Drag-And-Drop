
// ================= Draggable element =================


const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const para = document.querySelector('#para')

console.log(box1,box2,box3,box4,para)
para.setAttribute('draggable', 'true')

//taking function that will be called in 3 steps 
// dragstart, dragover, and finally dropped
para.addEventListener('dragstart', dragstartHandler)
box1.addEventListener('dragover', dragOverHandler)
box1.addEventListener("drop",dropHandler)
box2.addEventListener('dragover', dragOverHandler)
box2.addEventListener("drop",dropHandler)
box3.addEventListener('dragover', dragOverHandler)
box3.addEventListener("drop",dropHandler)
box4.addEventListener('dragover', dragOverHandler)
box4.addEventListener("drop",dropHandler)



//transfer the data to receive
function dragstartHandler(event){
      event.dataTransfer.setData("text", event.target.id)
}
// prevent default when moveable data is over
function dragOverHandler(event){
      event.preventDefault()
      event.dataTransfer.dropEffect = "move"
}
//recieve the transfered data 
function dropHandler(event){
      let id = event.dataTransfer.getData("text")
      let paraid = document.getElementById(id)
      // get the box element where the paragraph text is being dropped
      const dropBox = event.target
      // if poaragraph is being dropped in box1 then bind it
      // same code for rest of them you see below...
      if(dropBox === box1){
            box1.appendChild(paraid)
      }
      else if(dropBox === box2){
            box2.appendChild(paraid)
      }
      else if(dropBox === box3){
            box3.appendChild(paraid)
      }
      else if(dropBox === box4){
            box4.appendChild(paraid)
      }
}








