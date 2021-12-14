const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('.list-items');

//add event listener
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (name.value === '' || email.value === '') {
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error-msg');

    setTimeout(() => msg.remove(), 2000);
  }

  //add list items
  else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    li.className = 'item';
    users.appendChild(li);

    //create a delete button
    const button = document.createElement('button');
    button.appendChild(document.createTextNode('Delete'));
    button.className = 'button';
    li.append(button);

    //add event listener to button
    button.addEventListener('click', (e) => {
      li.remove();
    });

    //clear field
    name.value = '';
    email.value = '';
  }
}
