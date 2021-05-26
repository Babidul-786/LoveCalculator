
function checkloveper() {

    var yName = document.getElementById('Required').value;

    var lName = document.getElementById('nRequired').value;

    if (yName == "") {
        alert('please enter your name');
    }
    else if (yName.length <= 2) {

        alert('write atlest three letter')
    }
    else if (!isNaN(yName)) {
        alert('Number is not allowed and letter are required');
    }


    else if (lName == "") {
        alert('please enter love name');
    }
    else if (lName.length <= 2) {

        alert('write atlest three letter')
    }
    else if (!isNaN(lName)) {
        alert('Number is not allowed and letter are required');
    }
    else {

        var percentance = Math.random() * 100;

        percentance = Math.floor(percentance);

        document.getElementById('loveper').value = percentance;


    }


}
