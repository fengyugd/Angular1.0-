// Èë¿ÚÎÄ¼þ
angular.module("myapp",['routeJs','ngRoute'])
.controller("mainctrl",function($scope){
	$scope.userName="fy权世界";
	$scope.displaySrc="images/100.jpg";
	$scope.describe="GD忠粉";
	$scope.province="河北";
	$scope.city="张家口";

	$scope.userInfo = [{
	    'id': 1,
	    'admireid': 0,
	    'name': '小王',
	    'thumb': 'images/a1.jpg',
	    'describe': 'Lorem1 ipsum dolor sit amet',
	    'province': '河北',
	    'city': '石家庄',
	    'star': 14,
	    'fansnum': 20,
	    'job': "设计师，博客"
	}, {
	    'id': 2,
	    'admireid': 0,
	    'name': '张琳',
	    'thumb': 'images/a2.jpg',
	    'describe': 'Lorem2 ipsum dolor sit amet',
	    'province': '河北',
	    'city': '石家庄',
	    'star': 3,
	    'fansnum': 100,
	    'job': "作家，杂志编辑"
	}, {
	    'id': 3,
	    'admireid': 0,
	    'name': '李小明',
	    'thumb': 'images/a3.jpg',
	    'describe': 'Lorem3 ipsum dolor sit amet',
	    'province': '河北',
	    'city': '石家庄',
	    'star': 6,
	    'fansnum': 10,
	    'job': "艺术总监，电影剪辑"
	}, {
	    'id': 4,
	    'admireid': 0,
	    'name': '赵大城',
	    'thumb': 'images/a4.jpg',
	    'describe': 'Lorem4 ipsum dolor sit amet',
	    'province': '河北',
	    'city': '石家庄',
	    'star': 20,
	    'fansnum': 200,
	    'job': "音乐家，运动员"
	}];
	$scope.peoples = [{
		num:2,
		name:'小丑鱼',
		content:'今天是天气非常好，非常适合去旅游。我们去旅游吧！走起！'
	},
	{
		num:9,
		name:'告白气球',
		content:'《告白气球》是由方文山作词，周杰伦作曲并演唱的歌曲，收录于周杰伦2016年6月24日发行的专辑《周杰伦的床边故事》中。'
	},
	{
		num:8,
		name:'大敏子',
		content:'大敏子真可爱真美丽。'
	}];

	$scope.navArr=[
		{nav:'首页',href:'#/',navClass:'glyphicon glyphicon-home'},
		{nav:'简介',href:'#/jianjie',navClass:'glyphicon glyphicon-file'},
		{nav:'信息',href:'#/xinxi',navClass:'glyphicon glyphicon-envelope'},
		{nav:'操作',href:'#/caozuo',navClass:'glyphicon glyphicon-cog'}
	];
	$scope.caozuoArr=[
		{nav:'设置栏目',href:'#/lanmu'},
		{nav:'更多设置',href:'#/more'},
		{nav:'分割线',href:'#/fenge'}
	];
	$scope.listShow=false;

	$scope.fansNum=888;
	$scope.zanNum=860;
	
	$scope.list=['首页','简介','信息'];
	$scope.setFuc=function(){
		//用户名修改
		var username=document.getElementById("username").value;
		$scope.userName=username;
		//头像地址修改
		var displaysrc=document.getElementById("displaysrc").value;
		if(displaysrc=="")
		{
			$scope.displaySrc="images/100.jpg";
		}
		else
		{
			$scope.displaySrc="images/"+displaysrc.substr(12);
		}	
	}

	$scope.addFans=function(){
		$scope.fansNum=$scope.fansNum+1;
		document.getElementById("addFans").disabled=true;
		document.getElementById("addFans").value="已关注";
	}
	$scope.addZan=function(){
		$scope.zanNum=$scope.zanNum+1;
		document.getElementById("addZan").disabled=true;
		document.getElementById("addZan").value="已点赞";
	}

	$scope.sendMsg=function(){
		var username=$scope.userName;//用户名
		var src=$scope.displaySrc;//头像地址
		var msg=document.getElementById("commentMsg").value;
		document.getElementById("commentMsg").value="";
		$scope.commentMsg=msg;
		var newItem=document.createElement("div");
		newItem.innerHTML="<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+src+"'></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>1aaaa</span><a href=''>"+username+"：</a>"+msg+"</div></div></div>";
		document.getElementById("commentArea").insertBefore(newItem,document.getElementById("comment"));	
	}
	
	$scope.toggle=function(){
		$scope.listShow=!$scope.listShow;
	}
});
// app.controller("NewsController",function($scope){
// 	$scope.peoples = peoples;
// });
// 