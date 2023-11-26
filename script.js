const icon = document.querySelector('.navbar-mobile i');
console.log(icon);
const modal = document.querySelector('.modal');

icon.addEventListener('click', function(){
    modal.classList.toggle("change-modal");
    icon.classList.toggle("fa-times");
});