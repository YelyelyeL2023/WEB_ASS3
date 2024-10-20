function returnSelectValue(id) {
    let smth = document.getElementById(id);
    return Number(smth.value);
}

function returnRadioVal(id) {
    let smth = document.getElementById(id);
    return Number(smth.value);
}

function returnCheckboxValue(id) {
    let smth = document.getElementById(id);
    return document.getElementById(id).checked ? Number(smth.value) : 0;
}

function calculate() {
    let edu_lvl = returnSelectValue("education");
    let net = returnSelectValue("networth");
    let caste = returnSelectValue("caste");
    let instrument = returnRadioVal("instrument");
    let canCook = returnRadioVal("cook");
    let easyGoing = returnRadioVal("ezgn");
    let canSing = returnRadioVal("sings");
    let age = returnRadioVal("g_par")
    let badParents = returnRadioVal("g_par");
    let badCharacter = returnRadioVal("g_char");
    let badPerson = returnRadioVal("g_per");

    let skills = ["instrument", "cook", "ezgn", "sings"];
    if (!validateCheckboxGroup(skills)) {
        alert("Please select at least one skill.");
        return;
    }

    let reputations = ["g_par", "g_char", "g_per"];
    if (!validateCheckboxGroup(reputations)) {
        alert("Please select at least one reputation checkbox.");
        return;
    }

    let bid = 100;
    bid = bid * edu_lvl * net * age * badParents * badCharacter + badPerson + caste + instrument + canCook + easyGoing + canSing;
    console.log(bid);

    let resultText = document.getElementById("resultText");
    resultText.innerHTML = `Calculated Bid: ${bid}`;
    document.getElementById("hiddenElement").style.display = "block";
    console.log(edu_lvl);
    console.log(net);
    console.log(age);
    console.log(badParents);
    console.log(badCharacter);
    console.log(badPerson);
    console.log(caste);
    console.log(instrument);
    console.log(canCook);
    console.log(easyGoing);
    console.log(canSing);
}

document.getElementById("submit").addEventListener("click", function(event) {
    document.getElementById("hiddenElement").style.display = "none";
    event.preventDefault();
    calculate();
    

});
