const form = $('form');
const name = $('#name');
const email = $('#mail');
const jobRoles = $('#title').children();
const tshirtSizes = $('#size').children();
const tshirtDesigns = $('#design').children();
const tshirtColors = $('#color').children();
const activities = $('fieldset.activities').children();
const paymentMethods = $('#payment').children();
const creditCard = $('#credit-card');
const ccFields = creditCard.children();
const ccNumber = $('#cc-num');
const zipCode = $('#zip');
const cvvNumber = $('#cvv');
const paypal = creditCard.next();
const bitcoin = paypal.next();
const submit = $('button[type="submit"]');

function isValidUsername(name) {
    
};

function isValidEmail(email) {
    
};

function checkJob(job) {
    
};

function shirtSize(size) {
    
};

function checkShirtDesign(design) {
    
}

function changeShirtColors(design, colors) {
    
}

function checkActivityDates(activity) {
    
}

function disableActivities(conflictingActivity) {
    
}

function checkPaymentMethod(paymentMethod) {
    
}

console.log(form);
console.log(name);
console.log(email);
console.log(jobRoles);
console.log(tshirtSizes);
console.log(tshirtDesigns);
console.log(tshirtColors);
console.log(activities);
console.log(paymentMethods);
console.log(creditCard);
console.log(ccFields);
console.log(ccNumber);
console.log(zipCode);
console.log(cvvNumber);
console.log(paypal);
console.log(bitcoin);
console.log(submit);