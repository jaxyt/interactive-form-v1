const $form = $('form');
const $name = $('#name');
const $email = $('#mail');
const $jobRole = $('#title');
const $jobRoles = $('#title').children();
const $otherJob = $('#other');
const $otherJobField = $('#other-title');
const $tshirtSizes = $('#size');
const $tshirtDesigns = $('#design');
const $tshirtColors = $('#color');
const $activities = $('fieldset.activities').children('label');
let total = 0;
const $payment = $('#payment');
const $paymentMethods = $('#payment').children();
const $creditCard = $('#credit-card');
const $ccFields = $creditCard.children();
const $ccNumber = $('#cc-num');
const $zipCode = $('#zip');
const $cvvNumber = $('#cvv');
const $paypal = $creditCard.next();
const $bitcoin = $paypal.next();
const $submit = $('button[type="submit"]');
let $total = $(`<span>${total}</span>`);

$('fieldset.activities').append($total);




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
        $otherJobField.show();
    } else {
        $otherJobField.hide();
    }
    return true;
};


function checkShirtDesign(theme) {
    if (theme === 'js puns') {
        $tshirtColors.children().each(function (index) {
            if (/\(JS Puns shirt only\)/g.test($(this).text())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    } else if (theme === 'heart js') {
        $tshirtColors.children().each(function (index) {
            if (/\(JS Puns shirt only\)/g.test($(this).text())) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    }
    return true;
}

function checkActivityDates(activity) {
    const $activityName = $(activity).attr('name');
    const isChecked = activity.checked;
    const priceRegex = /\d\d\d/;
    const $activityPrice = $(activity).parent('label').text().match(priceRegex)[0];
    if (isChecked) {
        total += parseInt($activityPrice);
        $total.text(`$${total}`);
        if ($activityName !== 'all') {
            const regex = /([a-zA-Z]+) (\d\d?[a-z][a-z]-\d\d?[a-z][a-z])/g;
            const $activityTime = $(activity).parent('label').text().match(regex)[0];
            $activities.each(function(index) {
                const $conflict = $(this);
                const $conflictName = $conflict.children().first().attr('name');
                const $conflictPrice = $conflict.text().match(priceRegex)[0];
                if ($conflictName !== 'all' && $conflictName !== $activityName) {
                    const $conflictTime = $conflict.text().match(regex)[0];
                    if ($activityTime === $conflictTime) {
                        $conflict.children().first().attr('disabled', true);
                        $conflict.css('color', 'grey');
                    }
                }
            });
        }
    } else {
        total -= parseInt($activityPrice);
        $total.text(`$${total}`);
        if ($activityName !== 'all') {
            const regex = /([a-zA-Z]+) (\d\d?[a-z][a-z]-\d\d?[a-z][a-z])/g;
            const $activityTime = $(activity).parent('label').text().match(regex)[0];
            $activities.each(function(index) {
                const $conflict = $(this);
                const $conflictName = $conflict.children().first().attr('name');
                const $conflictPrice = $conflict.text().match(priceRegex)[0];
                if ($conflictName !== 'all' && $conflictName !== $activityName) {
                    const $conflictTime = $conflict.text().match(regex)[0];
                    if ($activityTime === $conflictTime) {
                        $conflict.children().first().attr('disabled', false);
                        $conflict.css('color', 'black');
                    }
                }
            });
        }
    }
    return true;
};

function checkPaymentMethod(paymentMethod) {
    if (paymentMethod === 'credit card') {
        $creditCard.show();
        $paypal.hide();
        $bitcoin.hide();
        $submit.show();
    } else if (paymentMethod === 'paypal') {
        $creditCard.hide();
        $paypal.show();
        $bitcoin.hide();
        $submit.show();
    } else if (paymentMethod === 'bitcoin') {
        $creditCard.hide();
        $paypal.hide();
        $bitcoin.show();
        $submit.show();
    } else {
        $creditCard.hide();
        $paypal.hide();
        $bitcoin.hide();
        $submit.hide();
    }
    return true;
};

function isValidCCNumber(ccNum) {
    const regex = /^\d{13,16}$/;
    return regex.test(ccNum);
};

function isValidZip(ccZip) {
    const regex = /^\d{5}$/;
    return regex.test(ccZip);
};

function isValidCVV(cvvNum) {
    const regex = /^\d\d\d$/;
    return regex.test(cvvNum);
};

function checkSubmissionComplete() {
    return true;
}

$name.trigger('focus');
$otherJobField.hide();
$creditCard.hide();
$paypal.hide();
$bitcoin.hide();
$submit.hide();

$name.focusout((e)=>{
    console.log(isValidName(e.target.value));
});

$email.focusout((e)=>{
    console.log(isValidEmail(e.target.value));
});

$jobRole.change((e)=>{
    console.log(checkJob(e.target.value));
});


$tshirtDesigns.change((e)=>{
    console.log(checkShirtDesign(e.target.value)); 
});


$activities.on('click', (e)=>{
    console.log(checkActivityDates(e.target));
});

$payment.change((e)=>{
    console.log(checkPaymentMethod(e.target.value));
});

$ccNumber.focusout((e)=>{
    console.log(isValidCCNumber(e.target.value));
});

$zipCode.focusout((e)=>{
    console.log(isValidZip(e.target.value));
});

$cvvNumber.focusout((e)=>{
    console.log(isValidCVV(e.target.value));
});

$submit.on('click', (e)=>{
    if (!isValidName($name.val())) {
        e.preventDefault();
        console.log(`invalid name`);
    };
    if (!isValidEmail($email.val())) {
        e.preventDefault();
        console.log(`invalid email`);
    };
    if (total < 100) {
        e.preventDefault();
        console.log(`invalid activities`);
    };
    if ($creditCard.attr('style') !== "none") {
        if (isValidCCNumber($ccNumber.val()) === false) {
            e.preventDefault();
            console.log(`invalid ccNumber`);
        };
        if (isValidZip($zipCode.val()) === false) {
            e.preventDefault();
            console.log(`invalid zipcode`);
        };
        if (isValidCVV($cvvNumber.val()) === false) {
            e.preventDefault();
            console.log(`invalid cvv number`);
        };
    }
});


