// get all correct buttons
let corrects = document.querySelectorAll('#btn-correct');

// add event listener to the correct buttons
for (let i = 0; i < corrects.length; i++)
{
    corrects[i].addEventListener('click', function() {
        corrects[i].style.backgroundColor = 'green';
        corrects[i].style.color = 'white';
        corrects[i].parentElement.querySelector('.questions').textContent += '\nCorrect!';
    });
}

// get all wrong buttons
let wrongs = document.querySelectorAll('#btn-wrong');

// add event listener to the wrong 
for (let i = 0; i < wrongs.length; i++)
{
    wrongs[i].addEventListener('click', function() {
        wrongs[i].style.backgroundColor = 'red';
        wrongs[i].style.color = 'white';
        wrongs[i].parentElement.querySelector('.questions').textContent += '\nWrong, idiot!';
    });
}