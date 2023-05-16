document.getElementById('menu').onmouseover = function (event) {
    var target = event.target;
    if (target.className == 'menu-link') {
        var s = target.getElementByClassName('menu-item');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-link' && target.className != 'menu-item')
    {
        closeMenu();
    }

}


function closeMenu() {
    var menu = document.getElementById('menu');
    var subm = document.getElementByClassName('menu-item');
    for (var i = 0; i < subm.lenght; i++) {
        subm[i].style.display = "none";
    }
}

window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale() {
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if (width > 1280) {
        ChangeScale("big");
    }
    else if (width <= 1280 && width > 720) {
        ChangeScale("normal");
    }
    else if (width < 720) {
        ChangeScale("small");
    }
}