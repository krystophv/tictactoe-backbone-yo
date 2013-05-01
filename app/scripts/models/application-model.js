tictactoe.Models.ApplicationModel = Backbone.Model.extend({
	defaults: {
		"board": [
			["","",""],
			["","",""],
			["","",""]
		],
		"activePlayer": 1,
		"winner": 0
	},

	mark: function (coords, char){
		var curBoard = this.get("board");
		curBoard[coords.y][coords.x] = char;
		this.set("board", curBoard);
		this.checkWin();
	},

	checkWin: function(){
	  	var board = this.get("board"),
	  		activePlayer = this.get("activePlayer"),
	  		mark = activePlayer == 1 ? "X" : "O";

	  	for(var i = 0; i < board.length; i++){
	  		if(
	  			(board[i][0] == mark && board[i][1] == mark && board[i][2] == mark) ||
	  			(board[0][i] == mark && board[1][i] == mark && board[2][i] == mark) ||
	  			(board[1][1] == mark &&
	  				((board[0][0] == mark && board[2][2] == mark) ||
	  				(board[0][2] == mark && board[2][0] == mark))
	  			)
	  		) {
	  			this.set("winner", activePlayer);
	  		}
		}
	}
});
