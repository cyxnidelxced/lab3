let item1 = document.getElementById('item1');
let myBtn1 = document.getElementById('myBtn1');


document.body.addEventListener('mousemove', displayInfo);

function displayInfo(e) {
    console.log(e);
    let info = document.getElementById('info');
    info.innerHTML = e.clientX + ', ' + e.clientY;
}

myBtn1.addEventListener('click', animateEl);

function animateEl(e) {
    let item1 = document.getElementById('item1');
    item1.style.backgroundColor = "red";
    item1.textContent = "AHHH! 😨";
    item1.classList.toggle('wake');
}

myBtn2.addEventListener('click', animateEl2);

function animateEl2(e) {
    let item2 = document.getElementById('item2');
    item2.classList.toggle('move');
}

