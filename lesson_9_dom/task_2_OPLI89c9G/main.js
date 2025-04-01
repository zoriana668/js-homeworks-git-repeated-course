// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let elements  = ['Main','Products','About us','Contacts'];


let list = document.createElement('ul');

for(let elem of elements) {
    let li = document.createElement('li');
    li.textContent = elem;

    list.appendChild(li);
}

document.body.appendChild(list);