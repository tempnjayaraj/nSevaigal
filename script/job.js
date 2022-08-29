

const jobrole=["Plumbing", "electricalwork", "painting", "carpender", "mosquitonet","others"];

function job(){
    const role= document.getElementById("type").value;
    // debugger;
    if (role ==""){

        hide(['plumb', 'carpender', 'paint', 'electric','other','net','otherDomain',
                'plumbingoptionA','plumbingoptionB','electricoptionB',
                'electricoptionA','homepaint']);

    }else if(role==jobrole[0]){
        // debugger;
        showBlock(['plumb']);
        hide(['carpender', 'paint', 'electric', 'otherDomain','other','net']);

    }else if(role==jobrole[1]){

        showBlock(['electric']);   
        hide(['plumb', 'carpender', 'paint', 'otherDomain','other','net']);

    }else if(role==jobrole[2]){

        showBlock(['paint']);
        hide(['plumb', 'electric', 'carpender', 'otherDomain','other','net']);


    }else if(role==jobrole[3]){
        showBlock(['carpender']);
        hide(['plumb', 'electric', 'paint','otherDomain','other','net']);

    }else if(role ==jobrole[4]){

        showBlock(['net']);
        hide(['plumb', 'electric', 'paint','otherDomain','other']);


    }else if(role==jobrole[5]){
        showBlock(['otherDomain','other']);
        hide(['plumb','electric', 'paint', 'carpender','plumbingoptionA',
                'plumbingoptionB','electricoptionA','electricoptionB',
                'homepaint','net']);

    }


}
function installation(){
    
    hide(['plumbingoptionB','electricoptionB','electricoptionA','homepaint','nets','car','carpender']);
    showBlock(['plumbingoptionA']);
    
}
function repair(){

    hide(['plumbingoptionA','electricoptionB','electricoptionA','homepaint','nets','carpender']);
    showBlock(['plumbingoptionB']);

}

function newWork(){
    hide(['electricoptionB','plumbingoptionB','plumbingoptionA','homepaint','nets','carpender']);
    showBlock(['electricoptionA']);
}
function elecRepair(){
    hide(['electricoptionA','plumbingoptionB','plumbingoptionA','homepaint','nets','carpender']);
    showBlock(['electricoptionB']);
}
function home(){
    hide(['plumbingoptionB','electricoptionB','electricoptionA','plumbingoptionA','nets','carpender']);
    showBlock(['homepaint']);
    
}
function house(){
    hide(['plumbingoptionB','electricoptionB','electricoptionA','plumbingoptionA','homepaint','carpender']);
    showBlock(['nets']);
    
}








function number(){
    
    if(document.getElementById("phone").checked){
        showBlock(['phonetxt']);
    }else{
        hide(['phonetxt']);
    }
    
}
function reAddress(){
    if(document.getElementById("address").checked){
        showBlock(['readd']);
    }else{
        hide(['readd']);
    }
}