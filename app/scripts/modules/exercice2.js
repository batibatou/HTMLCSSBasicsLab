var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

$(document).ready(function()
{
  var height = $(".blocks").height();
  var width = $(".blocks").width();
  var diametreMax = diametres[0];
  for(var cpt = 1; cpt < names.length; cpt++)
    diametreMax = Math.max(diametreMax, diametres[cpt]);

  for(var cpt = 0; cpt < diametres.length; cpt++)
  {
    $(".blocks").append("<div class=\"planet\" style='background:url(\"img/" + names[cpt] + ".png\");width:" + (diametres[cpt] * width / diametreMax) + "px;'><span>" + names[cpt] + "</span></div>");
  }

  $(".blocks > div").css("height", ((height - 40) / names.length ) + "px").css("line-height", ((height - 40) / names.length ) + "px");
});
