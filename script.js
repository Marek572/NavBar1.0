// onclick color change 
//czy da sie jakos lety/vary/const wstawic w funkcje colorchange w miejsce document.element???

let colorChange = document.getElementById('adjust');

colorChange.addEventListener('click', () => {
    document.body.classList.toggle('orange');
    document.getElementById('nav').classList.toggle('red');
    document.getElementById('home').classList.toggle('white');
    document.getElementById('profile').classList.toggle('white');
    document.getElementById('contact').classList.toggle('white');
    document.getElementById('adjust').classList.toggle('white');
    document.getElementById('settings').classList.toggle('white');
})