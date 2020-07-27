const inputtask = document.getElementById("inputtask");
const badd = document.getElementById("badd");
const addtask = document.getElementById("addtask")
const divTask = document.getElementById("tasks");
const process = document.getElementById("process");
const divfinal = document.getElementById("final");


function Tasks(){
  let count = 0
 
  badd.addEventListener('click', e => {
    if(inputtask.value.length > 20){
      const p = document.getElementById("ptask")
      p.innerHTML = "Por Favor, simplifique o nome da sua Tarefa!<br> Nome deve conter no máximo 20 caracters"
    
      addtask.appendChild(p)
      return;  
    }
    count++
    const buton = document.createElement('button')
    const div = document.createElement('div')
          
    div.id = `${count}`
    div.className = "divtask"
    div.draggable = "true"
    div.setAttribute("ondragstart", "drag(event)")
    div.innerHTML = `TASK-${count}: ${inputtask.value}&nbsp&nbsp `
    

    buton.id = `btn${count}`
    buton.className = "btns"
    buton.innerHTML = "Remover"
    buton.type = "submit"

    divTask.appendChild(div)
    div.appendChild(buton)

    buton.addEventListener('click', (e) => {
      if(e.path[2].id === 'tasks'){
        divTask.removeChild(div);

      }else if(e.path[2].id === 'process'){
        process.removeChild(div);

      }else if(e.path[2].id === 'final'){
        divfinal.removeChild(div);

      }else{
        return;
      }
     
    })
        
})

}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dropDivProcess(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  process.appendChild(document.getElementById(data));  
}

function dropDivFinalized(ev){
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  divfinal.appendChild(document.getElementById(data));
    
}

Tasks();
