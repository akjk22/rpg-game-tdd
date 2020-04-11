$(document).ready(function() {
  $('#rapper-selection').on('change', function(){
		var rappervalue = $(this).val(); 
			$("div.selection-results").hide();
			$("#show"+rappervalue).show();
			event.preventDefault();
	});
	$('#rap').click(() => {
		const rapPoints = stateChanger(battle);
		console.log(rapPoints);
		$('#rapResults').text(rapPoints.experience);
	});
	$('#studio').click(function() {
		const studioPoints = stateChanger(studio);
		console.log(studio);
		$('#rapResults').text(studioPoints.experience);
	});
	$('#promote').click(function() {
		const promotePoints = stateChanger(promote);
		console.log(promotePoints);
		$('#rapResults').text(promotePoints.experience);
	});
});
