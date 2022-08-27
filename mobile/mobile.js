class Mobile{
    battery;
    draft;
    inbox;
    sent;
    constructor(){
        this.battery = 100;
        this.draft = "";
        this.sent = [];
        this.inbox = [];
    }
    checkStatus(){
        return this.battery>0;
    }
    charge(){
        this.battery = 100;
    }

    writeMessager(mess){
        this.draft = mess ;
        this.battery--;

    }
    sentMessager(mobile){
        let draft = this.draft;
        mobile.inbox.push(draft);
        this.sent.push(draft);
        this.draft="";
        this.battery--;
    }
}
let dtcuaban = new Mobile();
let dtcuatoi = new Mobile();
