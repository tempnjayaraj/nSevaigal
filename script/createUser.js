var i=2;
function changeImages(){
    document.getElementById("imageS").src = '../Images/'+i+'.jpg';
    i++;
    if(i==4){
        i=1;
    }
}

function changeOccu(num){
    const occupation = document.getElementById('occu'+num).value;
    if(occupation==""){
        hide(['occu-plumber-'+num,'occu-painter-'+num,'occu-electrician-'+num]);
    }
    else if(occupation=="plumber"){
        show('occu-plumber-'+num,false);
        hide(['occu-painter-'+num,'occu-electrician-'+num]);
    }
    else if(occupation=="painter"){
        hide(['occu-plumber-'+num,'occu-electrician-'+num]);
        show('occu-painter-'+num,false);
    }
    else if(occupation=="electrician"){
        hide(['occu-plumber-'+num,'occu-painter-'+num]);
        show('occu-electrician-'+num,false);
    }
} 
function showSecondary(){
    showBlock(['secondaryWork']);
    showInline(['remSec','addTer']);
    hide(['addSec']);
}   
function removeSecondary(){
    hide(['secondaryWork','addTer','remSec'])
    showBlock(['addSec']);
} 
function showTertiary(){
    showBlock(['tertiaryWork','secondaryWork','remTer']);
    hide(['remSec','addSec','addTer']);
}   
function removeTertiary(){
    hide(['tertiaryWork','remTer','addSec']);
    showBlock(['secondaryWork']);
    showInline(['remSec','addTer']);
} 

function validateForm(){
    var name= /^[A-Za-z][A-Za-z]{2,29}$/;
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('secondName').value;
    var isProperFname = name.test(fname);
    var isProperLname = name.test(lname);
    if(document.getElementById('firstName').value==""){
        document.getElementById('firstName').style.borderBlockColor = 'red';
        popup('You need to enter First Name');
        return false;
    } 
    if(!isProperFname){
        document.getElementById('firstName').style.borderBlockColor = 'red';
        popup('Please enter valid name');
        return false;
    }
    if(document.getElementById('secondName').value==""){
        document.getElementById('secondName').style.borderBlockColor = 'red';
        popup('You need to enter Last Name');
        return false;
    }
    if(!isProperLname){
        document.getElementById('secondName').style.borderBlockColor = 'red';
        popup('Please enter valid name');
        return false;
    }
    if(document.getElementById('dob').value==""){
        document.getElementById('dob').style.borderBlockColor = 'red';
        popup('You need to mention Date of Birth');
        return false;
    }
    var option = document.getElementsByName('gender');
    if (!(option[0].checked || option[1].checked)) {
        document.getElementById('sex').style.backgroundColor="red";
        popup('Please mention Gender');
        return false;
    }
    var phoneno = /^\d{10}$/;
    var entNum = document.getElementById('phoneNumber').value;
    if(document.getElementById('phoneNumber').value==""){
        document.getElementById('phoneNumber').style.borderBlockColor = 'red';
        popup('Please provide Phone number');
        return false;
    } 
    var isProperNum = phoneno.test(entNum);
    if(!isProperNum){
        document.getElementById('phoneNumber').style.borderBlockColor = 'red';
        popup('Please provide a valid 10-digit Mobile number');
        return false;
    }
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var entEmail = document.getElementById('emailID').value;
    if(document.getElementById('emailID').value==""){
        document.getElementById('emailID').style.borderBlockColor = 'red';
        popup('Please provide Email-ID');
        return false;
    }
    var isProperEmail = email.test(entEmail);
    if(!isProperEmail){
        document.getElementById('emailID').style.borderBlockColor = 'red';
        popup('Please provide a valid eMail-ID');
        return false;
    }
    if(document.getElementById('psw').value==""){
        document.getElementById('psw').style.borderBlockColor = 'red';
        popup('Please enter a password');
        return false;
    }
    var expectedPsw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var enteredPsw = document.getElementById('psw').value;
    var isProperPsw = expectedPsw.test(enteredPsw);
    if(!isProperPsw){
        document.getElementById('psw').style.borderBlockColor = 'red';
        popup('Password must be strong');
        return false;
    }
    if(document.getElementById('psw2').value==""){
        document.getElementById('psw2').style.borderBlockColor = 'red';
        popup('Please re-enter password');
        return false;
    }
    if(document.getElementById('psw2').value!=document.getElementById('psw').value){
        document.getElementById('psw').style.borderBlockColor = 'red';
        document.getElementById('psw2').style.borderBlockColor = 'red';
        popup("Passwords don't Match");
        return false;
    }
    if(document.getElementById('doorNumber').value==""){
        document.getElementById('doorNumber').style.borderBlockColor = 'red';
        popup("Please enter Door Number");
        return false;
    }
    if(document.getElementById('streetName').value==""){
        document.getElementById('streetName').style.borderBlockColor = 'red';
        popup("Please enter Street Name");
        return false;
    }
    if(document.getElementById('village').value==""){
        document.getElementById('village').style.borderBlockColor = 'red';
        popup("Please enter Village / Town Name");
        return false;
    }
    if(document.getElementById('state').value==""){
        popup("Please select state");
        document.getElementById('statel').style.color= 'red';
        return false;
    }
    if(document.getElementById('district').value==""){
        popup("Please select district");
        document.getElementById('districtl').style.color= 'red';
        return false;
    }
    if(document.getElementById('PINCode').value==""){
        popup("Please enter PIN Code");
        document.getElementById('PINCode').style.borderBlockColor= 'red';
        return false;
    }
    var pincode = /^\d{6}$/;
    var entCode = document.getElementById('PINCode').value;
    var isProperCode = pincode.test(entCode);
    if(!isProperCode){
        popup("Please enter a valid PIN Code");
        document.getElementById('PINCode').style.borderBlockColor= 'red';
        return false;
    }
    
    if(document.getElementById('isWorker').checked){
        if(document.getElementById('occu1').value==""){
            popup("Please select Primary Occupation");
            document.getElementById('occu1').style.borderBlockColor= 'red';
            return false;
        }
        if(!(document.getElementById('FPa1').checked||document.getElementById('CPa1').checked )){
            popup("Please enter work details");
            return false;
        }
        if(document.getElementById('FPa1').checked){
            if(document.getElementById('FPa1y').value=''){

            }
        }
    }
}
function showCompName(){
    var option = document.getElementsByName('workNature');
    if(option[1].checked){
        show('orgname',false);
    }
    else if(option[0].checked){
        hide(['orgname']);
    }
}
function closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none"
}
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
if (event.target == modal) {
    modal.style.display = "none";
}
}
function showAdditionalBox(ExpId){
    if(document.getElementById(ExpId).style.visibility=='visible'){
        hide([ExpId]);
    }
    else {
       show(ExpId,true);
    }
}