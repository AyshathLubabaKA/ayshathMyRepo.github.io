function changedata(parameter){
    if(parameter==0){
        document.getElementById('buyers').style.display='block';
        document.getElementById('sellers').style.display='none';
    }
    else if(parameter==1){
        document.getElementById('sellers').style.display='block';
        document.getElementById('buyers').style.display='none';
    }
}