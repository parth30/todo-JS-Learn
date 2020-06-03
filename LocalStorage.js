function addLocalStorage(Priority,Text){
    for(a in localStorage){
        if(localStorage[a]!=Text){
           var value =1;
           
        }
        else{
            alert("Duplicate Item!!");
            var value =2;
            break;
        }
    }
    if(value==1){
        localStorage.setItem(Priority+Text,Text);
    }
return value;
}


function  removeLocalStorage(text,cname){
        if(cname=='mycheckHigh'){
            localStorage.removeItem('High'+text);        
        }
        if(cname=='mycheckMedium'){
            localStorage.removeItem('Medium'+text);        
        }
        if(cname=='mycheckLow'){
            localStorage.removeItem('Low'+text);        
        }
        
}