// wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {

    // get all correct buttons
    let corrects = document.querySelectorAll('.correct');

    // add event listener to corrects
    for (let i = 0; i < corrects.length; i++)
    {
        corrects[i].addEventListener('click', function() {
            corrects[i].style.backgroundColor = '#90EE90';
            
            // go to parent node
            corrects[i].parentElement.querySelector('.feedback').innerHTML = 'Correct!';
            corrects[i].parentElement.querySelector('.feedback').style.color = 'green';
        });
    }

    // get all incorrect buttons
    let incorrects = document.querySelectorAll('.incorrect');

    // add event listener to incorrects
    for (let i = 0; i < incorrects.length; i++)
    {
        incorrects[i].addEventListener('click', function() {
            incorrects[i].style.backgroundColor = 'red';
            incorrects[i].style.color = 'white';

            // go to parent node
            incorrects[i].parentElement.querySelector('.feedback').innerHTML = 'Incorrect, stupid fucking idiot!';
            incorrects[i].parentElement.querySelector('.feedback').style.color = 'red';
        });
    }

    // when check answer button is clicked
    document.querySelector('.check').addEventListener('click', function() {
        // store answer
        var input = document.querySelector('input');
        // if answer is correct
        if (input.value === 'Aman.' || input.value === 'Aman')
        {
            input.parentElement.querySelector('.feedback').innerHTML = 'Correct!';
            input.parentElement.querySelector('.feedback').style.color = 'green';
        } else {
            input.parentElement.querySelector('.feedback').innerHTML = 'Incorrect, stupid nigga!';
            input.parentElement.querySelector('.feedback').style.color = 'red';
        }
    });
});