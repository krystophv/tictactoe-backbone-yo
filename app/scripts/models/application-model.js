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
	}
});
