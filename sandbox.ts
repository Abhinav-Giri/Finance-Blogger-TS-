let forms = document.querySelector('.new-item-form') as HTMLFormElement;

const types = document.querySelector('#type') as HTMLSelectElement;
const tofroms = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amounts = document.querySelector('#amount') as HTMLInputElement;

forms.addEventListener('submit', (e:Event) => {
    e.preventDefault()
    console.log(types.value,
        tofroms.value,
        detail.value,
        amounts.value)
})          
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children); 

