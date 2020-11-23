function checkForm(form)
{
...
if(!form.pizza.checked) {
alert("Please select pizza base");
form.pizza.focus();
return false;
}
return true;
}
