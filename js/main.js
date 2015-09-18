$(document).ready(function(){
	$("#sub_button").click(function(){
		$("#summary-table").hide();
			
	//获取radio的值.
	var radio1 = 6-$('input[name="optionsRadios1"]:checked ').val();
	var radio2 = 6-$('input[name="optionsRadios2"]:checked ').val();
	var radio3 = 6-$('input[name="optionsRadios3"]:checked ').val();
	var radio4 = 6-$('input[name="optionsRadios4"]:checked ').val();
	var radio5 = 6-$('input[name="optionsRadios5"]:checked ').val();
	var radio6 = 6-$('input[name="optionsRadios6"]:checked ').val();
	var radio7 = 6-$('input[name="optionsRadios7"]:checked ').val();
	var radio8 = 6-$(' input[name="optionsRadios8"]:checked ').val();
	
	//定义一个数组
	var resource = ["不杀生", "赎命救生", "施食", "施药", "施物", "修忍辱", "供养所依", "供养神佛","戒心生骄慢","保持谦虚","敬老","上供下施","慎言","发愿","喜欢男身","不喜女事","乐于助人","不伤人"];
	var declaration = [  "对一切众生不加伤害和杀戮",
						 "如买鱼放入池中，放生，释放囚犯；",
						 "布施饮食",
						 "为病者施药及看护病人等",
						 "布施别人新衣和饰物等",
						 "在痛苦和挫折面前能够坦然地承受，没有怨恨，没有过激地行为，始终要以笑脸面对这个人生",
						 "为「所依」供养明灯，新造或修葺三种「所依」；",
						 "重新涂金和彩绘，供养新的佛装",
						 "无论是在家还是出家，不可因自己的功德、种族、戒律、智慧、眷属、地位等而生起骄慢心",
						 "克服所有的慢和过慢，保持谦虚",
						 "恭敬上师、亲教师、轨范师和僧伽等殊胜福田",
						 "纵然无人乞讨，我们也应尽力对饶益田、功德田与受苦的有情上供下施",
						 "说话谨慎，努力断除语不善业",
						 "发愿自身获得种种功德",
						 "喜欢男身",
						 "视女身为过患，对此心生厌恶，「但望自己永不得女人身」,消除欲得女身的想法；念诵大菩萨的名号，例如：“智无上、光顶，如是愿智慧，根寂、文殊前，我今恭敬礼。”",
						 "他人因生理或心理原因无法完成的事，代为完成；帮助他人；",
						 "不捶打他人"];	
	var dataset = new Array(18);
	dataset[17] = radio1;
	dataset[16] = radio1;
	dataset[15] = radio1 + radio8 + radio4;
	dataset[14] = radio1;
	dataset[13] = radio2 + radio4 ;  //施物
	dataset[12] = radio2;
	dataset[11] = radio2 + radio4;  //供养所依
	dataset[10] = radio2;
	dataset[9] = radio3;  //戒心生骄慢
	dataset[8] = radio3;
	dataset[7] = radio3 + radio6; //敬老
	dataset[6] = radio4;
	dataset[5] = radio5 + radio7; //慎言
	dataset[4] = radio6;
	dataset[3] = radio7;
	dataset[2] = radio7;
	dataset[1] = radio8;
	dataset[0] = radio8;
	
	
	var total = 0;
	
	for(var i=0;i<dataset.length;i++){
		total += dataset[i];
	}
	
	for(var i=0;i<dataset.length;i++){
		dataset[i] = dataset[i]/total;
	}
	
	var Format = d3.format('%');
	
	
	var width =  700;	//画布的宽度
	var height = 475;	//画布的高度

	var svg = d3.select("#summary-rect")				//选择文档中的body元素
				.append("svg")				//添加一个svg元素
				.attr("width", width)		//设定宽度
				.attr("height", height);	//设定高度
	
	//画布周边的空白
	var padding = {left:30, right:30, top:20, bottom:20};

	
	var rectHeight = 24;	//每个矩形所占的像素高度(包括空白)
	
	//定义序列比例尺
	var oridinal = d3.scale.ordinal()
				 .domain(resource)
				 .range(resource)
				 .rangeRoundBands([height - padding.bottom- padding.top,0]);
				 
	//定义线性比例尺
	var linear = d3.scale.linear()
				 .domain([0,d3.max(dataset)])
				 .range([0,300]);
			
	//y轴比例尺
	var yScale = d3.scale.ordinal()
		.domain(d3.range(resource.length))
		.rangeRoundBands([height - padding.bottom- padding.top,0]);

	 
				 
	//定义x轴
	var xAxis = d3.svg.axis()
		.scale(linear)
		.orient("bottom")
		.ticks(9);
		
	//定义y轴
	var yAxis = d3.svg.axis()
		.scale(oridinal)
		.orient("left")
		.ticks(19);


	
    //添加矩形元素
	svg.selectAll("rect")
		  .data(dataset)
		  .enter()
		  .append("rect")
		  .attr("x",67)
		  .attr("y",function(d,i){
				return i * rectHeight;
		  })
		  .attr("width",function(d){
		   		return linear(d);
		  })
		  .attr("height",rectHeight-2)
		  .attr("fill","steelblue")
		  
		  .on("mouseover", function(d,i) {
				d3.select(this)
				.attr("fill","yellow");

			})
			.on("mouseout", function(d,i) {
				d3.select(this)
				.attr("fill","yellow");

			})
		  ;
		  

	
	//添加文字元素
	var texts = svg.selectAll(".MyText")
		.data(dataset)
		.enter()
		.append("text")
		.attr("class","MyText")
		.attr("x",function(d){
			return linear(d);
		})
		.attr("y",function(d,i){
			return i * rectHeight;
		})
		.attr("dx",function(){
			return 55;
		})
		.attr("dy",function(d){
			return (yScale.rangeBand() - 1)/2;
		})

		.text(function(d){
			return d;
		});
		
	


	//添加x轴
	svg.append("g")
			.attr("class","axis")
			.attr("transform","translate( 65 ," + (height - padding.bottom - padding.top) + ")")
			.call(xAxis);

		
	//添加y轴
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate( 65 , 0)")
		.call(yAxis);

	});


});