// write js code here corresponding to matches.html
// getting data from local storage
var matchData=JSON.parse(localStorage.getItem("schedule"));
displayData(matchData);
function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function (elem){
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
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            favFun(elem);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);

    })
}

// favourites bookmark function starts here

function favFun(elem){
    var favArr=JSON.parse(localStorage.getItem("favourites"))||[];
    favArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favArr));
}

// sorting function starts here
document.getElementById("filterVenue").addEventListener("change",function(){
  matchData.filter(function (elem){
      
          return elem.Venue;
      
    })
    
})
