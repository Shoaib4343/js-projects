const h1 = document.querySelector("h1");

const appnedValue = (str)=>{
    if(h1.innerText === '0' || h1.innerText === "Error" || h1.innerText === "Infinity"){
        h1.innerText = str;
        return;
    }
    h1.innerHTML = h1.innerHTML + str
}

const clearDispaly = ()=>{
    h1.innerHTML = '0';
}

const calculatEqual = ()=>{
    try {
        h1.innerHTML = eval(h1.innerHTML);
        
    } catch (error) {
        h1.innerText = "Error";
    }
}