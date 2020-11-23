function runTotal() {
    var total = 0;
    var veg = 10.0;
    var meat = 11.0;
    var cheese = 9.0;
    var addTop = 0.25;
    if(document.forms[0].pizza[0].checked == true) {
        total += small;
    }
    else if(document.forms[0].pizza[1].checked == true){
        total += medium;
    }
    else if(document.forms[0].pizza[2].checked == true){
        total += large;
    }
    for(var i = 0; i < 4; i++){
        if(document.forms[0].toppings[i].checked == true){
            total += addTop;
		}
    }
    document.f1.Total.value = total;
} 
</script>

<script>
function validateForm() {
    var x = document.forms["pizza"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}