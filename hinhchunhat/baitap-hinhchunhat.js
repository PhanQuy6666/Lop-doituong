

class Rectangle{
    width;
    height;
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getPerimeter(){
        let perimeter = (this.width + this.height)*2;
        return perimeter;
    }
    getArea(){
        let area = this.width*this.height;
        return area;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}

let hcn1 = new Rectangle(80, 60);
let perimeter = hcn1.getPerimeter();
let area = hcn1.getArea();


let xPosition = 20;
let yPosition = 20;
let width = hcn1.getWidth();
let height = hcn1.getHeight();
let gameContext = document.getElementById("game").getContext("2d");
gameContext.beginPath();
gameContext.fillStyle="#fa4b2a";
gameContext.fillRect(xPosition, yPosition, width, height);
function change(){
    let newWidth = +prompt("Nhap vao chieu dai :");
    let newHeight = +prompt("Nhap vao chieu rong");
    let hcn2 = new Rectangle(newWidth, newHeight);
    let hcn1 = new Rectangle(80, 60);
    let perimeter = hcn2.getPerimeter();
    let area = hcn2.getArea();

    
    let xPosition = 100;
    let yPosition = 100;
    let width = hcn2.getWidth();
    let height = hcn2.getHeight();
    let gameContext = document.getElementById("game").getContext("2d");
    gameContext.beginPath();
    gameContext.fillStyle="#fa4b2a";
    gameContext.fillRect(xPosition, yPosition, width, height);
    alert ("Chu vi : " + perimeter + ", " + "Dien tich : " + area);
}
