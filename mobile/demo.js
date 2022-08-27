
function mySent(){
   
    let mess = document.getElementById("mySent").value;
    dtcuatoi.writeMessager(mess);
    dtcuatoi.sentMessager(dtcuaban);
    document.getElementById("yourInbox").innerHTML = dtcuaban.inbox;
}
function yourSent(){

    let mess = document.getElementById("yourSent").value;
    dtcuaban.writeMessager(mess);
    dtcuaban.sentMessager(dtcuatoi);
    document.getElementById("myInbox").innerHTML = dtcuatoi.inbox;
}
function showInbox(){
    let content= "";
    for (const iterator of dtcuatoi.inbox) {
        content += iterator + ",";
    }
    document.getElementById("myInbox").innerText = content;

    let content1= "";
    for (const iterator of dtcuaban.inbox) {
        content1 += iterator + ",";
    }
    document.getElementById("yourInbox").innerText = content1;
}