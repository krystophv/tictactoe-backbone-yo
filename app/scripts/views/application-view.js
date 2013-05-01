tictactoe.Views.ApplicationView = Backbone.View.extend({

  template: JST['app/scripts/templates/application.ejs'],

  el: ".container",

  model: tictactoe.Models.ApplicationModel,

  events: {
  	"click td": "handleTurn"
  },

  initialize: function () {
  	this.render();
  },

  render: function() {
  	this.$el.html(this.template(this.model.toJSON()));
  },

  handleTurn: function(e){
  	var player = this.model.get("activePlayer"),
  		$space = $(e.currentTarget),
  		coords = {x: $space.data("coord-x"), y: $space.data("coord-y")};

  	if(this.model.get("board")[coords.y][coords.x] === ""){
  		this.model.mark(coords,  player == 1 ? "X" : "O");
  		if(this.model.get("winner")){
  			this.undelegateEvents();
  		} else {
  			this.model.set("activePlayer",  player == 1 ? 2 : 1);
  		}

  		this.render();
  	}

  }
});
