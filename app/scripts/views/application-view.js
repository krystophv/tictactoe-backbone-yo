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
  		if(this.checkWin()){
  			this.undelegateEvents();
  		} else {
  			this.model.set("activePlayer",  player == 1 ? 2 : 1);
  		}

  		this.render();
  	}

  },

  checkWin: function(){
  	var board = this.model.get("board"),
  		activePlayer = this.model.get("activePlayer"),
  		mark = activePlayer == 1 ? "X" : "O";

  	for(var i = 0; i < board.length; i++){
  		if(
  			(board[i][0] == mark && board[i][1] == mark && board[i][2] == mark) ||
  			(board[0][i] == mark && board[1][i] == mark && board[2][i] == mark) ||
  			(board[1][1] == mark &&
  				(board[0][0] == mark && board[2][2] == mark) ||
  				(board[0][2] == mark && board[2][0] == mark)
  			)
  		) {
  			this.model.set("winner", activePlayer);
  			return true;
  		}
  	}
  	return false;
  }

});
