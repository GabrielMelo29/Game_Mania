function scrolll() {
    var left = document.querySelector(".produtos-promocao");
    left.scrollBy(350, 0);
}
function scrollr() {
    var right = document.querySelector(".produtos-promocao");
    right.scrollBy(-350, 0);
}



// --------- monile menu--------
const btnAbrirMenuMobile = document.querySelectorAll('[data-mobile-abrir-menu]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const btnFecharMenu = document.querySelectorAll('[data-mobile-fechar-menu]');

for (let i = 0; i < btnAbrirMenuMobile.length; i++) {
    const funcaoFecharMenu = function() {
        mobileMenu[i].classList.remove('active');
    }

    btnAbrirMenuMobile[i].addEventListener('click', function() {
        mobileMenu[i].classList.add('active');
    });

    btnFecharMenu[i].addEventListener('click', funcaoFecharMenu);

}

// --------- informações footer --------
const btnAttendance = document.querySelector(".attendance");
const attendancelInfo = document.querySelector(".attendance-info");
const btnInstitutional = document.querySelector(".institutional");
const institutionalInfo = document.querySelector(".institutional-info");


function openAttendance() {
    attendancelInfo.classList.toggle('active')
}
function openInstitutional() {
    institutionalInfo.classList.toggle('active')
}

btnAttendance.addEventListener('click', openAttendance)
btnInstitutional.addEventListener('click', openInstitutional)
