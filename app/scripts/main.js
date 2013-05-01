
window.tictactoe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    new tictactoe.Views.ApplicationView({model: new tictactoe.Models.ApplicationModel});
  }
};

$(document).ready(function(){
  tictactoe.init();
});
