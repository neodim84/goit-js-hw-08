import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelectorAll('.feedback-form label');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  console.log(`Email: ${email.value}, Message: ${message.value}`);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', throttle(handleInput, 500));

function handleInput(evt) {
  const {
    elems: { email, message },
  } = evt.target.value;
  localStorage.setItem('feedback-form-state', { email, message });
  console.log({ email, message });
}

// function handleText() {
//   const {
//     elements: { email, message },
//   } = localStorage.getItem('feedback-form-state');
//   if (elements) {
//     input.value = savedMessages;
//   }
// }

// handleText();
