class Product{
    name;
    number;
    price;

    constructor(name, number, price){
        this.name = name;
        this.number = number;
        this.price = price;
    }
    getAmount(){
        let amount = this.number*this.price;
        return amount;
    }
};


