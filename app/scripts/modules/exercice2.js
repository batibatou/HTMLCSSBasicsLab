var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

$(function() {
	for (var i = 0; i < diametres.length; i++) {
		$("#diag").append("<div id="+names[i]+"><span id=span"+names[i]+"><b>"+names[i]+"</b></span></div>");
		$("#"+names[i]).css("color","grey").css("background-color", "black").css("height","80px").css("width", diametres[i]/250).css("margin", "5px");
		//28 taille des lettres, 80 hauteur à décaler et 5 la taille des margin
		var top = 30 + 80 * i + 5 * i;
		$("#span"+names[i]).css("top", top + "px");
		//alert(80 - $("#span"+names[i]).height())
	}

});
