

const jobrole=["Plumbing", "electricalwork", "painting", "carpender", "others"];

function job(){
    const role= document.getElementById("type").value;
    // debugger;
    if (role ==""){

        hide([ 'plumb', 'carpender', 'paint', 'electric' ]);

    }else if(role==jobrole[0]){
        // debugger;
        showBlock(['plumb']);
        hide([ 'carpender', 'paint', 'electric', 'others']);

    }else if(role==jobrole[1]){

        showBlock(['electric']);   
        hide([ 'plumb', 'carpender', 'paint', 'others']);

    }else if(role==jobrole[2]){

        showBlock(['paint']);
        hide(['plumb', 'electric', 'carpender', 'others']);


    }else if(role==jobrole[3]){
        showBlock(['carpender']);
        hide(['plumb', 'electric', 'paint','others']);


    }else if(role==jobrole[4]){
        showBlock(['others']);
        hide(['plumb','electric', 'paint', 'carpender']);

    }


}
function installation(){
    
    hide(['plumbingoptionB']);
    showBlock(['plumbingoptionA']);
    
}
function repair(){

    hide(['plumbingoptionA']);
    showBlock(['plumbingoptionB']);

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