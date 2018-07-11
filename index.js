var app = new Vue({
  el: "#app",
  data: {
    message: 'Hello! Congrats this is your first vue app :)',
    time: ""
  }
});

app.message = "Data change test!";

setInterval(function(){ app.time = new Date().toLocaleString(); }, 1000);