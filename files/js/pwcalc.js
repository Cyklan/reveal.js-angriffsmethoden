function calcTime (time) {
    // seconds to days
    let days = time / 86400
    if (days < 2) {
        let hours = Math.floor(time / 60 / 60)
        let minutes = Math.floor(time / 60) % 60
        let seconds = Math.floor(time - (minutes * 60) - (hours * 60 * 60))
        return `${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden`
    }
    days = Math.floor(days)
    let date = new Date();
    let last = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000))
    let day = last.getDate()
    let month = last.getMonth() + 1
    let year = last.getFullYear()
    return `${day}.${month}.${year}`
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

