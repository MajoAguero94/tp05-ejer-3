let totalTareas = [];

document.getElementById("produc-form").addEventListener("submit", function (e) {
  let tareas = document.getElementById("input").value;

  totalTareas.push(tareas);
  console.log(totalTareas)

  


  e.preventDefault();
});



function borrado(){
    totalTareas.pop()
    document.getElementById("listado").innerHTML = totalTareas + "<br>"
}


function listado(){
    document.getElementById("listado").innerHTML = totalTareas + "<br>"
    

}