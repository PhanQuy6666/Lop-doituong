class Rat{
    name;
    mass;
    speed;
    status;
    constructor(name, mass, speed, status){
        this.name = name;
        this.mass = mass;
        this.speed = speed;
        this.status = status;
    }
    getSound(){
        if (this.status == "live"){
        alert("chit chit");
        }
        else{
            alert("Co song dau ma keu");
        }
        return;
    }
}

class Cat{
    name;
    mass;
    maxSpeed;
    constructor(name, mass, maxSpeed){
        this.name = name;
        this.mass = mass;
        this.maxSpeed = maxSpeed;
    }
    getSound(){
        
        alert("meo meo");
       
        return;

    }
    getKill(rat){
        let speedRat = rat.speed;
        let speedCat = this.maxSpeed;
        let statusRat = rat.status;
        let cout = "";
        if (statusRat == "live"){
            
            
            if (speedCat > speedRat){
                cout++;
                alert("Da bat duoc " + cout + " con chuot")
                
            }
            else{
                alert("Khong bat duoc roi")
            }
            return;
        }
        else{
            alert("Chuot chet roi khong can phai bat");
        }
      
    }
    getEat(rat){
        let speedRat = rat.speed;
        let speedCat = this.maxSpeed;
        let statusRat = rat.status;
     
            if (statusRat == "live"){
                if (speedCat > speedRat){
                this.mass++;
                document.getElementById("massEat").innerHTML = "Khoi luong sau khi an : " + this.mass;
                alert("Thit chuot ngon qua");
                }
                else{
                    alert("Co bat duoc dau ma doi an")
                }
            }
            else{
                alert("Khong them an");
            }
            
        
       
        
       
        return;

    }
}
let myCat;
let yourRat;

function InitInfo(){
    let nameCat = document.getElementById("nameCat").value;
    let massCat = document.getElementById("massCat").value;
    let speedCat = document.getElementById("speedCat").value;

    let nameRat = document.getElementById("nameRat").value;
    let massRat = document.getElementById("massRat").value;
    let speedRat = document.getElementById("speedRat").value;
    let statusRat = document.getElementById("statusRat").value;

     myCat = new Cat(nameCat, massCat, speedCat);
    
     yourRat = new Rat(nameRat, massRat, speedRat, statusRat);
//     return [myCat,yourRat]
}
InitInfo();
function confirm(){
//    const [myCat,yourRat]=InitInfo()
    
    
   myCat.getSound();
   yourRat.getSound();
    
   
    
    
}


function killRat(){
    // let nameCat = document.getElementById("nameCat").value;
    // let massCat = document.getElementById("massCat").value;
    // let speedCat = document.getElementById("speedCat").value;

    // let nameRat = document.getElementById("nameRat").value;
    // let massRat = document.getElementById("massRat").value;
    // let speedRat = document.getElementById("speedRat").value;
    // let statusRat = document.getElementById("statusRat").value;

    // let myCat = new Cat(nameCat, massCat, speedCat);
    
    // let yourRat = new Rat(nameRat, massRat, speedRat, statusRat);
    // const [myCat,yourRat]=InitInfo()
    
    myCat.getKill(yourRat);
}
function eatRat(){
    // let nameCat = document.getElementById("nameCat").value;
    // let massCat = document.getElementById("massCat").value;
    // let speedCat = document.getElementById("speedCat").value;

    // let nameRat = document.getElementById("nameRat").value;
    // let massRat = document.getElementById("massRat").value;
    // let speedRat = document.getElementById("speedRat").value;
    // let statusRat = document.getElementById("statusRat").value;

    // let myCat = new Cat(nameCat, massCat, speedCat);
    
    // let yourRat = new Rat(nameRat, massRat, speedRat, statusRat);
    massCat++;
    
    
    myCat.getEat(yourRat);
}