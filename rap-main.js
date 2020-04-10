$(document).ready(function() {
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
