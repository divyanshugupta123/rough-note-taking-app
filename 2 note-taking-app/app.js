let a = document.querySelector('#title');

let b = document.querySelector('#listofTask');

let c = document.querySelector('#addbutton');

c.addEventListener('click', function (e) {
    let li = document.createElement('li')
    li.innerHTML = a.value;
    b.appendChild(li);

    a.value = '';

    li.addEventListener('click', function () {
        li.remove();
    })



})


