const LIMIT_CHANNEL=9
class Television{
    status;
    channel;
    volume;
    constructor(status, channel,volume){
        this.status = status;
        this.channel =channel;
        this.volume =volume;

    }
    getStatus(){
        let status = this.status;
        if (status == true){
            document.getElementById("television").style.backgroundColor = "blue";
        }
        else{
            document.getElementById("television").style.backgroundColor = "black";
        }
    }
    getChannel(){
        let channel = this.channel;
        document.getElementById("channel").innerHTML = "Kenh " + channel;
    }
    getVolume(){
        let volume = this.volume;
        document.getElementById("volume").innerHTML = "Am luong " + volume;
    
    }

    setChannel(new_channel){
        this.channel=new_channel
        this.showScreen()
    }
    toogleStatus(){
        this.status=!this.status
        this.showScreen()
    }
    changeVolume(new_volume){
        this.volume+=new_volume
        this.showScreen()
    }

    showScreen(){
        this.getStatus();
        this.getChannel();
        this.getVolume();
    }
    
}
// setTimeout(()=>myTivi.setStatus(false),3000)


class Remote{
    remote_div;
    constructor(id){
        this.remote_div=document.getElementById(id)
    }

    Init(){
        this.createPowerButton()
        this.createVolumeControlButton()
        this.createChannelsButton()
    }
    
    createPowerButton(){
        this.remote_div.innerHTML+=`<button onclick="power()" id="on">Bật/ Tắt</button>`
    }
    createVolumeControlButton(){
        this.remote_div.innerHTML+=`  <button onclick="changeVolume(1)" id="agument">Tăng Volume</button>
        <button onclick="changeVolume(-1)" id="abatement">Giảm Volume</button>`
    }
    createChannelsButton(){
        for(let i=1;i<=LIMIT_CHANNEL;i++){
            this.remote_div.innerHTML+=  `<button  onclick="channel(${i})">${i}</button>`
        }
    }
}
let myTivi = new Television(true, 10, 6);

myTivi.showScreen();

function power(){
    myTivi.toogleStatus()
}

function channel(value){
    myTivi.setChannel(value)
}

function changeVolume(value){
    myTivi.changeVolume(value)
}

let remote= new Remote("remote")
remote.Init()