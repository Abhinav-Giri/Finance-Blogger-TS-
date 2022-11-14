let forms = document.querySelector('.new-item-form');
const types = document.querySelector('#type');
const tofroms = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amounts = document.querySelector('#amount');
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(types.value, tofroms.value, detail.value, amounts.value);
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
