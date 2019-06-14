
const $name = $('#name');
const $nameError = $(`<span id="name-error"></span>`);
const $email = $('#mail');
const $emailError = $(`<span id="email-error"></span>`);
const $jobRole = $('#title');
const $otherJobField = $('#other-title');
const $tshirtDesigns = $('#design');
const $tshirtColors = $('#color');
const $activities = $('fieldset.activities').children('label');
const $activityError = $(`<span id="activity-error"></span>`);
let total = 0;
const $payment = $('#payment');
const $creditCard = $('#credit-card');
const $ccNumber = $('#cc-num');
const $ccNumError = $(`<span id="ccNum-error"></span>`);
const $zipCode = $('#zip');
const $zipError = $(`<span id="zip-error"></span>`);
const $cvvNumber = $('#cvv');
const $cvvError = $(`<span id="cvv-error"></span>`);
const $paypal = $creditCard.next();
const $bitcoin = $paypal.next();
const $submit = $('button[type="submit"]');
let $total = $(`<span>${total}</span>`);

//creates and appends unobtrusive elements to the page that will be used in functions
$('fieldset.activities').append($total);
$('label[for="name"]').append($nameError);
$('label[for="mail"]').append($emailError);
$('fieldset.activities').children('legend').first().append($activityError);
$('label[for="cc-num"]').append($ccNumError);
$('label[for="zip"]').append($zipError);
$('label[for="cvv"]').append($cvvError);



//compares the input name to a regular expression and returns a boolean value
function isValidName(name) {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regex.test(name)) {
        $nameError.text(` names must be comprised of two words separated by a space`)
        $nameError.css('color', 'red');
        $name.css('border-color', 'red');
    } else {
        $nameError.text(``);
        $name.css('border-color', 'grey');
    }
    return regex.test(name);
};

//same as isValidName but for email
function isValidEmail(email) {
    const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if (!regex.test(email)) {
        $emailError.text(` a valid email looks like "john@email.com"`)
        $emailError.css('color', 'red');
        $email.css('border-color', 'red');
    } else {
        $emailError.text(``);
        $email.css('border-color', 'grey');
    }
    return regex.test(email);
};


//displays the 'other' text input when 'other' is selected and hides it when its not
function checkJob(job) {
    if(job === 'other'){
        $otherJobField.show();
    } else {
        $otherJobField.hide();
    }
    return true;
};


//hides and displays the colors label and its color options depending on the users design selection
function checkShirtDesign(theme) {
    if (theme === 'js puns') {
        $tshirtColors.val('cornflowerblue');
        $tshirtColors.children().each(function (index) {
            if (/\(JS Puns shirt only\)/g.test($(this).text())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
        $tshirtColors.show();
    } else if (theme === 'heart js') {
        $tshirtColors.val('tomato');
        $tshirtColors.children().each(function (index) {
            if (/\(JS Puns shirt only\)/g.test($(this).text())) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
        $tshirtColors.show()
    } else {
        $tshirtColors.hide()
    }
    return true;
}


//compares all activites for conflicting dates, and disables the conflicts, while also updating the total purchase ammount
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

//hides and displays the various payment methods based on the users choice
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


//these check the credit card fields for valid information
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



//focuses on the name input box, and hides the dependent selections upon the page loading
$name.trigger('focus');
$otherJobField.hide();
$tshirtColors.hide();
$payment.val('credit card');
$creditCard.show();
$paypal.hide();
$bitcoin.hide();
$submit.show();


//these place all the necessary event listeners to trigger the previous functions
$name.keyup((e)=>{
    isValidName(e.target.value);
});


$email.keyup((e)=>{
    isValidEmail(e.target.value);
});

$jobRole.change((e)=>{
    checkJob(e.target.value);
});


$tshirtDesigns.change((e)=>{
    checkShirtDesign(e.target.value); 
});


$activities.on('click', (e)=>{
    checkActivityDates(e.target);
});

$payment.change((e)=>{
    checkPaymentMethod(e.target.value);
});

$ccNumber.keyup((e)=>{
    isValidCCNumber(e.target.value);
});

$zipCode.keyup((e)=>{
    isValidZip(e.target.value);
});

$cvvNumber.keyup((e)=>{
    isValidCVV(e.target.value);
});


//the final form validation that checks the most important fields and displays error messages if the user input is incorrect
$submit.on('click', (e)=>{
    if (!isValidName($name.val())) {
        console.log(`invalid name`);
        e.preventDefault();
    };
    if (!isValidEmail($email.val())) {
        console.log(`invalid email`);
        e.preventDefault();
    };
    if (total < 100) {
        $activityError.text(' You must select at least one activity');
        $activityError.css('color', 'red');
        e.preventDefault();
    } else {
        $activityError.text('');
    };
    if ($creditCard.attr('style') !== "none") {
        if (isValidCCNumber($ccNumber.val()) === false) {
            $ccNumError.text(` a valid credit card number is between 13 and 16 digits long`);
            $ccNumError.css('color', 'red');
            $ccNumber.css('border-color', 'red');
            e.preventDefault();
        } else {
            $ccNumError.text(``);
            $ccNumber.css('border-color', 'grey');
        };
        if (isValidZip($zipCode.val()) === false) {
            $zipError.text(` a valid zip code consists of 5 digits`);
            $zipError.css('color', 'red');
            $zipCode.css('border-color', 'red');
            e.preventDefault();
        } else {
            $zipError.text(``);
            $zipCode.css('border-color', 'grey');
        };
        if (isValidCVV($cvvNumber.val()) === false) {
            if ($cvvNumber.val().length === 0) {
                $cvvError.text(` the cvv number is the 3 digit code on the back of your card`);
                $cvvError.css('color', 'red');
                $cvvNumber.css('border-color', 'red');
            } else if ($cvvNumber.val().length === 1 || $cvvNumber.val().length === 2) {
                $cvvError.text(` this is not long enough to be a cvv number, it must be exactly 3 digits`);
                $cvvError.css('color', 'red');
                $cvvNumber.css('border-color', 'red');
            } else if ($cvvNumber.val().length > 3) {
                $cvvError.text(` this is more than 3 digits long, it is not a cvv number`);
                $cvvError.css('color', 'red');
                $cvvNumber.css('border-color', 'red');
            }
            e.preventDefault();
        } else {
            $cvvError.text(``);
            $cvvNumber.css('border-color', 'grey');
        };
    }
});


