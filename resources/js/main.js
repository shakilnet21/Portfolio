function openNav(){
	document.getElementById("mynav").style.width = "100%";
}
function closeNav(){
	document.getElementById("mynav").style.width = "0%";
}
$('.collapse').collapse()
$('#myCollapsible').collapse({
	toggle: false
  })
  $('#myCollapsible').on('hidden.bs.collapse', function () {
	// do something…
  })