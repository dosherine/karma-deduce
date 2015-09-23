
$(document).ready(function(){
	$("#sub_button").click(function(){
	   //获取radio的值.
		var radio_value1 = 6-$('input[name="optionsRadios1"]:checked ').val();
		var radio_value2 = 6-$('input[name="optionsRadios2"]:checked ').val();
		var radio_value3 = 6-$('input[name="optionsRadios3"]:checked ').val();
		var radio_value4 = 6-$('input[name="optionsRadios4"]:checked ').val();
		var radio_value5 = 6-$('input[name="optionsRadios5"]:checked ').val();
		var radio_value6 = 6-$('input[name="optionsRadios6"]:checked ').val();
		var radio_value7 = 6-$('input[name="optionsRadios7"]:checked ').val();
		var radio_value8 = 6-$(' input[name="optionsRadios8"]:checked ').val();
		
		
		 
			
			var w = 300,
				h = 300;
			
			var colorscale = d3.scale.category10();
			
			//Legend titles
			var LegendOptions = ['果'];
			
			//Data
			var d = [
					  [
						{axis:"长寿", value:radio_value1, source:"不杀生，施食，施药"},
						{axis:"形体端严", value:radio_value2, source:"修忍辱，供养所依，供养神佛，施物"},
						{axis:"种族高贵", value:radio_value3, source:"戒心生骄慢，保持谦虚，敬老"},
						{axis:"受用丰富", value:radio_value4, source:"供养所依，施食，施物，上供下施"},
						{axis:"言辞威肃", value:radio_value5, source:"慎言"},
						{axis:"声誉卓著", value:radio_value6, source:"敬老，发愿"},
						{axis:"男性", value:radio_value7, source:"喜欢男身，不喜女事，慎言"},
						{axis:"身心健壮", value:radio_value8, source:"乐于助人，不伤人"},
					  ]
					];
			
			//Options for the Radar chart, other than default
			var mycfg = {
			  w: w,
			  h: h,
			  maxValue: 5,
			  levels: 5,
			  ExtraWidthX: 300
			}
			
			//Call function to draw the Radar chart
			//Will expect that data is in %'s
			RadarChart.draw("#summary-radar", d, mycfg);
			
			////////////////////////////////////////////
			/////////// Initiate legend ////////////////
			////////////////////////////////////////////
			
			var svg = d3.select('#summary-radar')
				.selectAll('svg')
				.append('svg')
				.attr("width", w+300)
				.attr("height", h)
			
			//Create the title for the legend
			var text = svg.append("text")
				.attr("class", "title")
				.attr('transform', 'translate(90,0)') 
				.attr("x", w - 70)
				.attr("y", 10)
				.attr("font-size", "12px")
				.attr("fill", "#404040");
					
			//Initiate title	
			var legend = svg.append("g")
				.attr("class", "legend")
				.attr("height", 100)
				.attr("width", 200)
				.attr('transform', 'translate(140,20)')    //title的相对偏移
				;
				//Create colour squares
				legend.selectAll('rect')
				  .data(LegendOptions)
				  .enter()
				  .append("rect")
				  .attr("x", w - 15)
				  .attr("y", function(d, i){ return i * 20;})
				  .attr("width", 18)
				  .attr("height", 18)
				  .style("fill", function(d, i){ return colorscale(i);})
				  ;
				//Create text next to squares
				legend.selectAll('text')
				  .data(LegendOptions)
				  .enter()
				  .append("text")
				  .attr("x", w + 6 )
				  .attr("y", function(d, i){ return i * 20 + 14;})
				  .attr("font-size", "19px")
				  .attr("fill", "#737373")
				  .text(function(d) { return d; })
				  ;	
	
	});
});
