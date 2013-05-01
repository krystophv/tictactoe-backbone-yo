this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/application.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p>Active player: ' +
((__t = ( activePlayer )) == null ? '' : __t) +
'</p>\n<table style="1px solid black;">\n\t';
 for(var i=0; i<board.length; i++){ ;
__p += '\n\t\t<tr>\n\t\t\t';
 for(var j=0; j<board[i].length; j++) { ;
__p += '\n\t\t\t\t<td style="width:20px;height:20px;border:1px solid black;" data-coord-x=' +
((__t = ( j )) == null ? '' : __t) +
' data-coord-y=' +
((__t = ( i )) == null ? '' : __t) +
'> ' +
((__t = ( board[i][j] )) == null ? '' : __t) +
' </td>\n\t\t\t';
 } ;
__p += '\n\t\t</tr>\n\t';
 } ;
__p += '\n</table>\n';
 if(winner) { ;
__p += '\n\t<p>Player ' +
((__t = ( winner )) == null ? '' : __t) +
' wins!</p>\n';
 } ;
__p += '\n\n';

}
return __p
};