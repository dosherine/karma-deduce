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
		//dataset[i] = 100*(dataset[i]/total).toFixed(2);
		dataset[i] = Math.round((dataset[i]/total)*100)/100
	}
	

	var pie = new d3pie("summary-pie", {
		"header": {
			"title": {
				"text": " 因",
				"fontSize": 20,
				"font": "open sans"
			},
			"subtitle": {
				"color": "#999999",
				"fontSize": 10,
				"font": "verdana"
			},
			"location": "top-left",
			"titleSubtitlePadding": 12
		},
		"footer": {
			"color": "#999999",
			"fontSize": 11,
			"font": "open sans",
			"location": "bottom-center"
		},
		"size": {
			"canvasHeight": 400,
			"canvasWidth": 590,
			"pieInnerRadius": "14%",
			"pieOuterRadius": "100%"
		},
		"data": {
			"content": [
				{
					"label": "不伤人",
					"value": dataset[17],
					"color": "#7e3838"
				},
				{
					"label": "乐于助人",
					"value": dataset[16],
					"color": "#7e5038"
				},
				{
					"label": "不喜女事",
					"value": dataset[15],
					"color": "#7e6838"
				},
				{
					"label": "喜欢男身",
					"value": dataset[14],
					"color": "#787e38"
				},
				{
					"label": "发愿",
					"value": dataset[13],
					"color": "#607e38"
				},
				{
					"label": "慎言",
					"value": dataset[12],
					"color": "#4b7e38"
				},
				{
					"label": "上供下施",
					"value": dataset[11],
					"color": "#387e42"
				},
				{
					"label": "敬老",
					"value": dataset[10],
					"color": "#387e5d"
				},
				{
					"label": "保持谦虚",
					"value": dataset[9],
					"color": "#387e73"
				},
				{
					"label": "戒心生傲慢",
					"value": dataset[8],
					"color": "#386d7e"
				},
				{
					"label": "供养神佛",
					"value": dataset[7],
					"color": "#385d7e"
				},
				{
					"label": "供养所依",
					"value": dataset[6],
					"color": "#384a7e"
				},
				{
					"label": "修忍辱",
					"value": dataset[5],
					"color": "#384a7e"
				},
				{
					"label": "施物",
					"value": dataset[4],
					"color": "#45387e"
				},
				{
					"label": "施药",
					"value": dataset[3],
					"color": "#54387e"
				},
				{
					"label": "施食",
					"value": dataset[2],
					"color": "#63387e"
				},
				{
					"label": "赎命救生",
					"value": dataset[4],
					"color": "#77387e"
				},
				{
					"label": "不杀生",
					"value": dataset[0],
					"color": "#7e3872"
				}
			]
		},
		"labels": {
			"outer": {
				"pieDistance": 32
			},
			"inner": {
				"format": "value"
			},
			"mainLabel": {
				"color": "#1f5484",
				"font": "verdana"
			},
			"percentage": {
				"color": "#e1e1e1",
				"font": "verdana",
				"decimalPlaces": 0
			},
			"value": {
				"color": "#e1e1e1",
				"font": "verdana"
			},
			"lines": {
				"enabled": true,
				"color": "#cccccc"
			},
			"truncation": {
				"enabled": true
			}
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"callbacks": {}
	});
	});


});