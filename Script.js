function showalert(){
    alert('Hello! the button is clicked, this js class')
}
function changetext(){
    Document.getElementById('Text').innerHTML= "text changed";
}
function handleclick(){
document.getElementById('clickMessage').innerHTML ='button clicked!';

}
function validateform(){
    let name = document.getElementById('name').Value;
    if(name == ''){
        alert('please enter your name.');
        return false;
    }
    return true;
}
function checkNumber() {
    let num = parseInt(document.getElementById('numberInput').value);
    let result = num > 10 ? 'greater than 10' : '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18) {
        document.getElementById('ageResult').innerHTML = 'you are an adult';
    } else {
        document.getElementById('ageResult').innerHTML = 'you are a minor';
    }
}
function displayArrayItem() {
    let items = ['apple', 'banana', 'cherry', 'date', 'grapes'];
    let index =parseInt(document.getElementById('arrayIdex').value);
    let result = items[index] || 'Invalid index';
    document.getElementById('arrayResult').innerHTML = result; 

}