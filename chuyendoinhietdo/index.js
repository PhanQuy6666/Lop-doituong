class Temperature{
    temC;
    
    constructor(temC){
        this.temC = temC;
        
    }
    getConvertF(){
        let result = this.temC*1.8 + 32;
        return result;
    }
    getConvertKevin(){
        let resultKevin = this.temC*1 + 273;
        return resultKevin;
    }
}
function convertF(){
    let temC = document.getElementById("temC").value;
    let one = new Temperature(temC);
    let resultF = one.getConvertF();
    document.getElementById("resultF").innerHTML = temC + " do C = " + resultF + " do F";
}
function convertKevin(){
    let temC = document.getElementById("temC").value;
    let one = new Temperature(temC);
    let resultKevin = one.getConvertKevin();
    document.getElementById("resultKevin").innerHTML = temC + " do C = " + resultKevin + " do Kevin";
}