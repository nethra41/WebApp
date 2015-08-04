// load initial data
$("#mqPage").live("pagebeforecreate", function(e) {
	loadDirections("Boston, MA", "New York, NY");
});
// on page initialization
$("#mqPage").live("pageinit", function() {
	$("#to").bind("change", function(event) {
		var from = $('#from').val();
		var to = $('#to').val();
		console.log("From: " + from);
		console.log("To: " + to);
		
			loadDirections(from, to);
		
	});
	$("#from").bind("change", function(event) {
		var from = $('#from').val();
		var to = $('#to').val();
		console.log("From: " + from);
		console.log("To: " + to);
		
			loadDirections(from, to);
		
	});
})	

function loadDirections(from, to) {
	$("#directionList").html('');
	$("#directionList").append('<li data-role="list-divider">Turn-by-Turn directions</li>');
	
var enFrom = encodeFun(from);
var enTo = encodeFun(to);
	$.getJSON("http://www.mapquestapi.com/directions/v1/route?key=mjtd%7Clu61200ynl%2Cas%3Do5-50ylq&from="+ from +"&to="+ to +"", function(data) {
		var html = "";
		console.log(data.route.distance);
		console.log(data.route.time);
		var time = data.route.time/3600;
		var sum = "<span>Total Distance = "+data.route.distance+" Miles; Total Time = "+time.toFixed(2)+" Hours.</span>";
		$("#summary").html('');
		$("#summary").append(sum);
		$.each(data.route.legs[0].maneuvers, function(index, current){
				var item = $('<li><a  href="'+current.mapUrl+'" target=_x><img src="'+current.iconUrl+'"><span class="tweet">'+current.narrative+'['+current.distance+']</span></a></li>');
			
			$("#directionList").append(item);
			$("#directionList").listview("refresh");			
			
		});
		
	});
}