// write js code here corresponding to favourites.html
var favData=JSON.parse(localStorage.getItem("favourites"))||[];
addData(favData);
function addData(data){
    // document.querySelector("tbody").innerHTML="";
    data.forEach(function (elem,index){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=elem.MatchNumber;
        var td2=document.createElement("td");
        td2.innerText=elem.Ateam;
        var td3=document.createElement("td");
        td3.innerText=elem.Bteam;
        var td4=document.createElement("td");
        td4.innerText=elem.Mdate;
        var td5=document.createElement("td");
        td5.innerText=elem.Venue;
        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            delFun(elem,index);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);

    })
}
function delFun(elem,index){
favData.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favData));
    window.location.reload();

}