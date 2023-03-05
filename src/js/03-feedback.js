import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
console.log(feedbackForm);
const storageKey = "feedback-form-state";
const data = {};

updateForm();

feedbackForm.addEventListener("input", throttle((e) => {
    data[e.target.name] = e.target.value;
    localStorage.setItem(storageKey, JSON.stringify(data));
    console.log(data);
}), 500);


feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault;
    const {
        elements: { email, message },
    } = e.target;

    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log({ Email: email.value, Message: message.value });
    feedbackForm.reset;
    localStorage.removeItem(storageKey);
});


function updateForm() {
    if (localStorage.getItem(storageKey) === null) {
        return;
    }
    const savedForm = JSON.parse(localStorage.getItem(storageKey));
    Object.entries(savedForm).forEach(([name, value]) => {
        data[name] = value;
        feedbackForm.elements[name].value = value;
    });
}