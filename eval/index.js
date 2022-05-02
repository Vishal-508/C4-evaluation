// write js code here corresponding to index.html
// You should add submit event on the form
document.getElementById("masaiForm").addEventListener("submit",function(){
    event.preventDefault();
    var mplarr=JSON.parse(localStorage.getItem("schedule"))||[];
    var obj={
        MatchNumber:masaiForm.matchNum.value,
        Ateam:masaiForm.teamA.value,
        Bteam:masaiForm.teamB.value,
        Mdate:masaiForm.date.value,
        Venue:masaiForm.venue.value
    }
    mplarr.push(obj);
  localStorage.setItem("schedule",JSON.stringify(mplarr));
  masaiForm.matchNum.value="";
  masaiForm.teamA.value="none";
  masaiForm.teamB.value="none";
  masaiForm.date.value="";
  masaiForm.venue.value="none";
})