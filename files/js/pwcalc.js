function calcTime (time) {
    moment.locale()
    return moment().seconds(Math.ceil(time)).fromNow() 
}

function hasNumber(s) {
    return /\d/.test(s)
}

function hasLowerCase(s) {
    return /(?=.*[a-z])/.test(s)
}

function hasUpperCase(s) {
    return /(?=.*[A-Z])/.test(s)
}

function hasSpecial(s) {
    return /(?=.*\W)/.test(s)
}

function calcPW() {
    let pw = $("#password-calc").val().toString()
    let sec = 0
    if (hasNumber(pw)) sec+=10
    if (hasLowerCase(pw)) sec+=26
    if (hasUpperCase(pw)) sec+=26
    if (hasSpecial(pw)) sec+=19
    let lang = Math.pow(sec, pw.length)
    lang /= 1000
    document.getElementById("pw-length").innerHTML = calcTime(lang)
}

