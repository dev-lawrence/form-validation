const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const users = document.querySelector('.list-items');

// create list on click
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();

  if (name.value === '' || email.value === '') {
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error-msg');

    setTimeout(() => msg.remove(), 3000);
  }

  //ELSE
  else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    li.className = 'item';
    users.appendChild(li);

    // create button
    const button = document.createElement('button');
    button.appendChild(document.createTextNode('Delete'));
    button.className = 'button';
    // append to list
    li.appendChild(button);

    //delete button
    button.addEventListener('click', (e) => {
      li.remove();
    });

    // clear form fiels
    name.value = '';
    email.value = '';
  }
}
