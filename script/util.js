function hide(elements){
    var ALength = elements.length;
    for(var i=0;i<ALength;i++){
        _hide(elements[i]);
    }
}

function showBlock(elements){
    var ALength = elements.length;
    for(var i=0;i<ALength;i++){
        show(elements[i],false);
    }
}

function showInline(elements){
    var ALength = elements.length;
    for(var i=0;i<ALength;i++){
        show(elements[i],true);
    }
}

function _hide(element){
    document.getElementById(element).style.visibility = 'hidden';
    document.getElementById(element).style.display = 'none';
}

function show(element,boolean){
    document.getElementById(element).style.visibility = 'visible';
    if(boolean==true){
        document.getElementById(element).style.display = 'inline';
    }else{
        document.getElementById(element).style.display = 'block';
    }    
}

function popup(Message){
    document.getElementById('pop').innerHTML=Message;
    document.getElementById("myModal").style.display = "block";
}