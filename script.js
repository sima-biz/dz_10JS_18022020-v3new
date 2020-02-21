
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
///////////////////  1. Манипуляции с таблицей  //////////////////////////
//////////////////////////////////////////////////////////////////////////

"use strict";

var objData = {
  "Array method": "Mutatable",
  "push": "true",
  "pop": "true",
  "unshift": "true",
  "shift": "true",
  "join": "false",
  "slice": "false",
  "splice": "true",
  "reverse": "true",
  "map": "false",
  "filter": "false"
};
let dataArrI = [];
let dataArrIi = [];
dataArrI = Object.keys(objData);//возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке
dataArrIi = Object.values(objData);//возвращает массив значений перечисляемых свойств объекта
console.log(dataArrI);
console.log(dataArrIi);
// let dataArrI = [];
// dataArrI.push("Array method", "push", "pop", "unshift", "shift", "join", "slice", "splice", "reverse", "map", "filter");
// let dataArrIi = [];
// dataArrIi.push("Mutatable", "true", "true", "true", "true", "false", "false", "true", "true", "false", "false");

const main = document.createElement("main");//создает элемент, имя тега которого было указано
main.classList.add("my-main")//add() добавляет новый элемент classList позволяет работать с классами элемент возвращает живую коллекцию
document.body.appendChild(main)// добавляет узел в качестве последнего дочернего узла в указанный родительский элемент.
const table = document.createElement("table");
table.classList.add("my-table")
main.appendChild(table)

const thead = document.createElement("thead");
thead.classList.add("my-thead")
table.appendChild(thead)

const tbody = document.createElement("tbody");
tbody.classList.add("my-tbody")
table.appendChild(tbody)

const tr = document.createElement("tr");
tr.classList.add("my-trthead0")
thead.appendChild(tr)
const th_a = document.createElement("th");
th_a.classList.add("my-trtheadth0")
tr.appendChild(th_a)
th_a.innerText = dataArrI[0]
const th_b = document.createElement("th");
th_b.classList.add("my-trtheadth0")
tr.appendChild(th_b)
th_b.innerText = dataArrIi[0]


for (let i = 1; i <= dataArrIi.length; i++) {
  const tr = document.createElement("tr");
  tr.classList.add("my-trtbody")
  tbody.appendChild(tr)
  
  let th = document.createElement("th");
  th.classList.add("my-trtbodyth" + dataArrIi[i])
  th.classList.toggle(dataArrIi[i])//позволяет отобразить или скрыть выбранные элементы
  // th.classList.remove(dataArrIi[i])// remove() удаляет узел из дерева DOM.
  tr.appendChild(th)
  th.innerText = dataArrI[i]//  позволяющее задавать или получать текстовое содержимое элемента и его потомков

  let tn = document.createElement("th");
  tn.classList.add("my-trtbodyth" + dataArrIi[i])
  tn.classList.toggle(dataArrIi[i])
  // tn.classList.remove(dataArrIi[i])
  tr.appendChild(tn)
  tn.innerText = dataArrIi[i] 
}

let stpTimer = setInterval(() => {
  for (let i = 0; i <= dataArrIi.length; i++) {
    document.getElementsByClassName('true')[i].classList.toggle("my-trtbodythtrue");//метод возвращает объект HTMLCollection, содержащий в себе все дочерние элементы, которые имеют заданные имена классов содержащиеся в документе.
  }
}, 3000);

setTimeout(() => {
  for (let i = 0; i <= dataArrIi.length; i++) {
    document.getElementsByClassName('true')[i].style= "font-style:italic;";
  }
}, 5000);

setTimeout(() => {
  for (let i = 0; i <= dataArrIi.length; i++) {
    document.getElementsByClassName('true')[i].style= "font-style:normal;";
  }
}, 10000);

setTimeout(() => {
  main.parentNode.removeChild(main);
  clearInterval(stpTimer)
}, 90000);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
