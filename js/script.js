const form = $('form');
const name = $('#name');
const email = $('#mail');
const jobRoles = $('#title').children();
const otherJob = $('#other');
const tshirtSizes = $('#size').children();
const tshirtDesigns = $('#design').children();
const tshirtColors = $('#color').children();
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
    const regex = /[a-zA-Z]+ [a-zA-Z]+/;
    return regex.test(name);
};

function isValidEmail(email) {
    const regex = /[^@]+@[^@.]+\.[^@.]{2,3})/;
    return regex.test(email);
};

function checkJob(job) {
    console.log(job);
    if (job.textContent === 'Other') {
        otherJob.show();
    }
    else {
        otherJob.hide();
    }
    return true;
};

function shirtSize(size) {
    return true;
};

function checkShirtDesign(theme) {
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
    //console.log(isValidName(e));
});

email.focusout((e)=>{
    console.log(isValidEmail(e));
});

jobRoles.change((e)=>{
    console.log(checkJob(e));
});

tshirtSizes.click((e)=>{
    console.log(shirtSize(e));
});

tshirtDesigns.click((e)=>{
    console.log(checkShirtDesign(e)); 
});

tshirtColors.click((e)=>{
    console.log(checkShirtColor(e));
});

activities.on('click', (e)=>{
    console.log(checkActivityDates(e));
});

paymentMethods.on('click', (e)=>{
    console.log(checkPaymentMethod(e));
});

ccNumber.focusout((e)=>{
    console.log(isValidCCNumber(e));
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