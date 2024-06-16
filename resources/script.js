//Radiobox elements
let general = document.getElementById('general');
let support = document.getElementById('support');
let gen_enq = document.getElementById('gen-enq');
let sup_req = document.getElementById('sup-req');

let gencmpSt = getComputedStyle(gen_enq).backgroundColor;
let supcmpSt = getComputedStyle(sup_req).backgroundColor;

const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Form elements
let my_form = document.getElementById('myForm');
let first_name = document.getElementById('f-name');
let last_name = document.getElementById('l-name');
let email = document.getElementById('email-add');
let textarea = document.getElementById('extra');
let agreement = document.getElementById('agreement');
let button = document.getElementById('submit-button');

//Form error p-s
let first_name_error = document.getElementById('first_name_error');
let last_name_error = document.getElementById('last_name_error');
let email_error = document.getElementById('email_error');
let textarea_error = document.getElementById('textarea_error');
let agreement_error = document.getElementById('agreement_error');
let query_type_error = document.getElementById('query-type-error');

let checked_agreement = false;
let submit_div = document.getElementById('submit-div');

//Events for radioboxes
general.addEventListener('click', () => {
    if (gencmpSt === 'rgb(255, 255, 255)' || supcmpSt === 'rgb(255, 255, 255)') {
        gen_enq.style.backgroundColor = 'hsl(148, 38%, 91%)';
        sup_req.style.backgroundColor = 'hsl(0, 0%, 100%)';
    }    
});

support.addEventListener('click', () => {
    if (supcmpSt === 'rgb(255, 255, 255)' || gencmpSt === 'rgb(255, 255, 255)') {
        sup_req.style.backgroundColor = 'hsl(148, 38%, 91%)';
        gen_enq.style.backgroundColor = 'hsl(0, 0%, 100%)';
    } 
});

//Check checkbox agreement
agreement.addEventListener( "change", () => {
    if ( agreement.checked ) {
        checked_agreement = true;
    } else {
        checked_agreement = false;
    }
 });
  

//Validating form
button.addEventListener('click', (event) => {
    if (submit_div.style.display = 'block') {
        submit_div.style.display = 'none';
    }
    
    if (!re.test(email.value)) {
         //check input before submitting
         event.preventDefault();
        email.style.border = '1px solid red';
        email_error.style.display = 'block';        
    } else {
        email.style.border = '1px solid rgb(128, 128, 128)';
        email_error.style.display = 'none';
    }

    if (first_name.value === '') {
        event.preventDefault();
        first_name.style.border = '1px solid red';
        first_name_error.style.display = 'block';
    } else {
        first_name.style.border = '1px solid rgb(128, 128, 128)';
        first_name_error.style.display = 'none';
    }

    if (last_name.value === '') {
        event.preventDefault();
        last_name.style.border = '1px solid red';
        last_name_error.style.display = 'block';
    } else {
        last_name.style.border = '1px solid rgb(128, 128, 128)';
        last_name_error.style.display = 'none';
    }

    if (textarea.value === '') {
        event.preventDefault();
        textarea.style.border = '1px solid red';
        textarea_error.style.display = 'block';
    } else {
        textarea.style.border = '1px solid rgb(128, 128, 128)';
        textarea_error.style.display = 'none';
    }

    if (!checked_agreement) {
        event.preventDefault();
        agreement_error.style.display = 'block';
    } else {
        agreement_error.style.display = 'none';
    }

    if (!general.checked && !support.checked) {
        event.preventDefault();
        query_type_error.style.display = 'block';
    } else {
        query_type_error.style.display = 'none';
    }    

    
})

//Update form when submit and display div with information
my_form.addEventListener('submit', (e) => {
    e.preventDefault();
    email.value = '';
    first_name.value = '';
    last_name.value = '';
    textarea.value = '';
    general.checked = false;
    support.checked = false;
    agreement.checked = false;
    sup_req.style.backgroundColor = 'hsl(0, 0%, 100%)';
    gen_enq.style.backgroundColor = 'hsl(0, 0%, 100%)';
    submit_div.style.display = 'block';
    submit_div.style.color = 'black';
})