const $form = $('form');
const $name = $('#name');
const $email = $('#mail');
const $jobRole = $('#title');
const $jobRoles = $('#title').children();
const $otherJob = $('#other');
const $tshirtSizes = $('#size');
const $tshirtDesigns = $('#design');
const $tshirtColors = $('#color');
const $activities = $('fieldset.activities').children('label');
const $paymentMethods = $('#payment').children();
const $creditCard = $('#credit-card');
const $ccFields = $creditCard.children();
const $ccNumber = $('#cc-num');
const $zipCode = $('#zip');
const $cvvNumber = $('#cvv');
const $paypal = $creditCard.next();
const $bitcoin = $paypal.next();
const $submit = $('button[type="submit"]');

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
        $otherJob.show();
    } else {
        $otherJob.hide();
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
    const regex = /([a-zA-Z]+) (\d\d?[a-z][a-z]-\d\d?[a-z][a-z])/g;
    if ($activityName !== 'all') {
        const $activityTime = $(activity).parent('label').text().match(regex)[0];
        console.log($activityName);
        console.log($activityTime);
        $activities.each(function(index) {
            const $conflict = $(this);
            const $conflictName = $conflict.children().first().attr('name');
            if ($conflictName !== 'all' && $conflictName !== $activityName) {
                const $conflictTime = $conflict.text().match(regex)[0];
                if ($activityTime === $conflictTime) {
                    console.log(`${$conflictName} conflicts with ${$activityName}!!`)
                } else {
                    console.log(`${$conflictName} is available.`)
                }
            }
        });
    } else {
        console.log('Main Conference');
    }
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

$name.trigger('focus');
$otherJob.hide();
$creditCard.hide();
$paypal.hide();
$bitcoin.hide();

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
    console.log(e.target);
    // console.log(e.target.checked);
    // console.log(e.target.parentElement.textContent);
    console.log(checkActivityDates(e.target));
});

$paymentMethods.on('click', (e)=>{
    console.log(checkPaymentMethod(e.target.value));
});

$ccNumber.focusout((e)=>{
    console.log(isValidCCNumber(e.target.value));
});

$submit.on('click', (e)=>{
    e.preventDefault();
    console.log(checkSubmissionComplete());
});


