const form = $('form');
const name = $('#name');
const email = $('#mail');
const jobRole = $('#title');
const jobRoles = $('#title').children();
const otherJob = $('#other');
const tshirtSizes = $('#size');
const tshirtDesigns = $('#design');
const tshirtColors = $('#color');
const activities = $('fieldset.activities').children('label');
const paymentMethods = $('#payment').children();
const creditCard = $('#credit-card');
const ccFields = creditCard.children();
const ccNumber = $('#cc-num');
const zipCode = $('#zip');
const cvvNumber = $('#cvv');
const paypal = creditCard.next();
const bitcoin = paypal.next();
const submit = $('button[type="submit"]');

function isValidName(name) {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(name);
};

function isValidEmail(email) {
    const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    return regex.test(email);
};

function checkJob(job) {
    if(job === 'other'){
        otherJob.show();
    } else {
        otherJob.hide();
    }
    return true;
};

function shirtSize(size) {
    return true;
};

function checkShirtDesign(theme) {
    if (theme === 'js puns') {
        $('option[value="cornflowerblue"]').show();
        $('option[value="darkslategrey"]').show();
        $('option[value="gold"]').show();
        $('option[value="tomato"]').hide();
        $('option[value="steelblue"]').hide();
        $('option[value="dimgrey"]').hide();
    } else if (theme === 'heart js') {
        $('option[value="cornflowerblue"]').hide();
        $('option[value="darkslategrey"]').hide();
        $('option[value="gold"]').hide();
        $('option[value="tomato"]').show();
        $('option[value="steelblue"]').show();
        $('option[value="dimgrey"]').show();
    }
    return true;
}

function changeShirtColors(design, colors) {
    return true;
}

function checkShirtColor(color) {
    return true;
};

// function disableActivities(conflictingActivity) {
    
// };

function checkActivityDates(activity) {
    return true;
};

function checkPaymentMethod(paymentMethod) {
    return true;
};

function isValidCCNumber(ccNum) {
    return true;
};

function isValidZip(ccZip) {
    return true;
};

function isValidCVV(cvvNum) {
    return true;
};

function checkSubmissionComplete() {
    return true;
}

name.trigger('focus');
otherJob.hide();
creditCard.hide();
paypal.hide();
bitcoin.hide();

name.focusout((e)=>{
    console.log(isValidName(e.target.value));
});

email.focusout((e)=>{
    console.log(isValidEmail(e.target.value));
});

jobRole.change((e)=>{
    console.log(checkJob(e.target.value));
});

tshirtSizes.change((e)=>{
    console.log(shirtSize(e.target.value));
});

tshirtDesigns.change((e)=>{
    console.log(e.target.value);
    console.log(e.target.parentElement.lastElementChild.lastElementChild.value);
    console.log(checkShirtDesign(e.target.value)); 
});

tshirtColors.change((e)=>{
    console.log(e.target.firstElementChild.textContent);
    console.log(checkShirtColor(e.target.value));
});

activities.on('click', (e)=>{
    console.log(checkActivityDates(e.target.value));
});

paymentMethods.on('click', (e)=>{
    console.log(checkPaymentMethod(e.target.value));
});

ccNumber.focusout((e)=>{
    console.log(isValidCCNumber(e.target.value));
});

submit.on('click', (e)=>{
    e.preventDefault();
    console.log(checkSubmissionComplete());
});


// console.log(form);
// console.log(name);
// console.log(email);
// console.log(jobRoles);
// console.log(otherJob);
// console.log(tshirtSizes);
// console.log(tshirtDesigns);
// console.log(tshirtColors);
// console.log(activities);
// console.log(paymentMethods);
// console.log(creditCard);
// console.log(ccFields);
// console.log(ccNumber);
// console.log(zipCode);
// console.log(cvvNumber);
// console.log(paypal);
// console.log(bitcoin);
// console.log(submit);