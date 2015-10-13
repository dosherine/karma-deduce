$(document).ready(function(){
	$("#sub_button").click(function(){
		var radio_value = new Array(8);
	    //获取radio的值.
		radio_value[1-1] = 6-$('input[name="optionsRadios1"]:checked ').val();
		radio_value[2-1] = 6-$('input[name="optionsRadios2"]:checked ').val();
		radio_value[3-1] = 6-$('input[name="optionsRadios3"]:checked ').val();
		radio_value[4-1] = 6-$('input[name="optionsRadios4"]:checked ').val();
		radio_value[5-1] = 6-$('input[name="optionsRadios5"]:checked ').val();
		radio_value[6-1] = 6-$('input[name="optionsRadios6"]:checked ').val();
		radio_value[7-1] = 6-$('input[name="optionsRadios7"]:checked ').val();
		radio_value[8-1] = 6-$(' input[name="optionsRadios8"]:checked ').val();
		
		var final_good = "";
		var final_bad = "";
		var source_good;
		var source_bad;
		var res =["长寿","形体端严","种族高贵","受用丰富","言辞威肃","声誉卓著","男性化","身心健壮"];
		var resource = ["不杀生", "赎命救生", "施食", "施药", "施物", "修忍辱", "供养所依", "供养神佛","戒心生骄慢","保持谦虚","敬老","上供下施","慎言","发愿","喜欢男身","不喜女事","乐于助人","不伤人"];
		var dataset = new Array(18);
		dataset[17] = radio_value[1-1];
		dataset[16] = radio_value[1-1];
		dataset[15] = radio_value[1-1] + radio_value[8-1] + radio_value[4-1];
		dataset[14] = radio_value[1-1];
		dataset[13] = radio_value[2-1] + radio_value[4-1] ;  //施物
		dataset[12] = radio_value[2-1];
		dataset[11] = radio_value[2-1] + radio_value[4-1];  //供养所依
		dataset[10] = radio_value[2-1];
		dataset[9] = radio_value[3-1];  //戒心生骄慢
		dataset[8] = radio_value[3-1];
		dataset[7] = radio_value[3-1] + radio_value[6-1]; //敬老
		dataset[6] = radio_value[4-1];
		dataset[5] = radio_value[5-1] + radio_value[7-1]; //慎言
		dataset[4] = radio_value[6-1];
		dataset[3] = radio_value[7-1];
		dataset[2] = radio_value[7-1];
		dataset[1] = radio_value[8-1];
		dataset[0] = radio_value[8-1];
		
		var max_temp,min_temp;
		max_temp = 0, min_temp =100;
		var index1,index2;
		for(var i=0;i<res.length;i++){
			if(radio_value[i]<3){
				final_bad = final_bad + res[i] +"   ";
			}
			else if(radio_value[i]>3){
				final_good = final_good + res[i]+"   ";
			}
		}
		
		for(var i=0;i<dataset.length;i++){
			if(dataset[i]>max_temp){
				max_temp = dataset[i];
			}
			if(dataset[i]<min_temp){
				min_temp = dataset[i];
			}
		}
		
		var source_good = "";
		var source_bad = "";
		for(var i=0;i<dataset.length;i++){
			if(dataset[i] >= max_temp -4){
				source_good = source_good + resource[17-i] +"   "
			}
			if(dataset[i] <= min_temp){
				source_bad = source_bad + resource[17-i] +"   "
			}
		}
		
		if($("#summary-text").css("display")=='none'){
			$("#summary-text").show();
		}
		
		$("#result")
		.append("你比大部分人更加的" + " <font color='#2E59EF'><u> " + final_good + "</u></font>" + ",你在" +  "<font color='#1583E6'><u>" + source_good + "</u></font>" + "等方面做得较好。但你在" + "<font color='#F43D1C'><u>" + source_bad + "</u></font>" + "等方面做得不尽如人意，甚至有与之违背的行为，还需继续改进。");
		
		
		
	});
});