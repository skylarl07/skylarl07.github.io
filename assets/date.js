const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

n =  new Date();
y = n.getFullYear();
m = monthNames[n.getMonth()];
d = n.getDate();
date = m + " " + d + ", " + y;
if (document.getElementById("date-working") != null){
  document.getElementById("date-working").innerHTML = "As for right now, " + date + ", I'm working on the following projects.";
}
else if (document.getElementById("date-school") != null){
  document.getElementById("date-school").innerHTML = "As for right now, " + date + ", I have worked on the following projects at Virgina Tech.";
}
else if (document.getElementById("date-hobby") != null){
  document.getElementById("date-hobby").innerHTML = "As for right now, " + date + ", I have been trying to study the following subjects in my free time.";
}