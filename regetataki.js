	var IntervarID,timerID1=0,tensuc=0,timeLeft=200;
	timeLimit =10;
	url = "regetataki.html";
	var tm5=0,tm4=0,gazousu=0;
	ba=new Array(0,1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1);/*穴の場所を指定。配列0は未使用、配列1～15までを指定。値の1～4はレゲ画像に使用済み。*/
	bb=new Array("a",0,0);/*点数表示用*/
	ga=new Array();/*レゲ画像用*/
	gb=new Array();/*点数画像用*/
	/**/
	for(i=1;i<5;i++){/*レゲ画像用*/
		ga[i]=new Image();/**/
		ga[i].src="rege"+i+".gif";/**/
	};
	for(i=0;i<10;i++){/*点数画像用*/
		gb[i]=new Image();/**/
		gb[i].src="n"+i+".gif";/**/
	};
	/*初期画面の表示 a i j*/
	function syokihyouji(){/**/
		for(i=0;i<3;i++){/*縦*/
			for(j=1;j<6;j++){/*横*/
				a=i*5+j;/*aの値=レゲ画像一列目が1～5、二列目が6～10、三列目が11～15*/
				document.write("<a href='#gamehead' onClick='meityuu("+a+")'><img src='rege" +ba[a]+ ".gif' border=0></A>"); /*レゲ画像の表示*/
			};
			document.write("<br>");/*改行*/
		};
		
document.write("<br>");/*改行*/
for(i=0;i<3;i++){/**/
document.write("<img src='n"+bb[i]+".gif' border=0>");/*点数の画像表示*/
};

	};
	/*ゲームスタート*/
	function kaisi(){
		tensuc=0; /*点数のクリア*/
		tensuhyuji(tensuc,0);/*点数の表示*/
		main();/*メインプログラム*/

	};

        function jumpPage() {
		alert("あなたとレゲパンの親愛度:" +tensuc);
		location.href = url;
		};
	/*メイン*/
	function main(){
		
		setTimeout("jumpPage()",timeLimit*1000);
		console.log("残り時間：" + timeLimit);
		if(timeLeft=0){ 
			syuryou();  /*ゲーム終了*/
			return;  /**/
		};
		switch(timeLeft){
			case 0:hayasa(1500);tm5=1000;tm4=400;;break;  /*速さの調整　*/
			case 5:hayasa(1200);tm5=700;tm4=400;;break;  /*hayasa(X)次の表示までの時間 tm4頭の表示時間 tm5顔の表示時間*/
			case 15:hayasa(1000);tm5=500;tm4=400;break;  /*hayasa(X)>tm5+tm4になるようにすること。*/
			case 30:hayasa(700);tm5=300;tm4=300;break;  /*単位はミリ秒。1秒は1000ミリ秒*/
		};
		henkobasyo();  /*レゲの出る場所を決める*/
	};
	/*速さの設定a6*/
	function hayasa(a6){
		syuryou();/*ゲームタイマーの終了*/
		IntervarID = setInterval('main()',a6);/*ゲームタイマーの開始(一定時間毎にmain()を呼び出す)*/
	};
	/*レゲの出る場所を決めるa1 */
	function henkobasyo(){
		a1=Math.ceil(Math.random()*15);/*1～15までの乱数を発生*/
		if(ba[a1]==1){			/*穴の状態ならば*/
			dousah(a1,2);		/*頭の画像を表示*/
			if(Math.ceil(Math.random()*6)==4){	/*1～6までの乱数発生(フェイント用)。4に意味はなし*/
				setTimeout('dousah(a1,1)',tm4);/*頭の画像の表示時間。穴の画像にする。*/
			}else{		/*通常のレゲが穴から出る動き*/
				setTimeout('dousa2(a1)',tm4);/*頭画像の表示時間。顔の画像にする。*/
			};
		};
	};
	/*顔画像の表示a2 b2*/
	function dousa2(a2){
		b2=a2;/*エラー回避のため*/
		dousah(b2,3);/*顔画像の表示*/
		timerID1=setTimeout('dousah(b2,1)',tm5)/*顔画像の表示時間。穴画像の表示*/
		timeLeft++;/*レゲの出た回数*/
		tensuhyuji(tensuc,0);/*叩いた回数の表示*/


	};
	/*当った時の処理c3 d3*/
	function meityuu(c3){
		d3=c3;/*エラー回避のため*/
		if(ba[d3]==3){/*顔の画像ならば*/
			clearTimeout(timerID1);/*穴画像の表示をキャンセル*/
			dousah(d3,4);/*叩かれた画像の表示*/
			setTimeout('dousah(d3,1)',300);/*叩かれた画像の表示時間。穴画像の表示*/
			tensuc++;/*叩いた回数(点数)*/
		tensuhyuji(tensuc,0);叩いた回数の表示
		};
	};
	/*レゲ画像を画面に表示a4 b4*/
	function dousah(a4,b4){
		ba[a4]=b4;/*レゲ画像の状態を配列に代入*/
		document.images[a4-1+gazousu].src=ga[b4].src;/*レゲ画像の表示*/
	};
	/*点数を画面に表示a5 b5 c5 d5 e5 i*/
	function tensuhyuji(a5,d5){
		e5="0"+a5;/*1桁の場合には十の位を0で埋める用*/
		b5=parseInt(e5.substr(e5.length-2,1));/*十の位*/
		c5=parseInt(e5.substr(e5.length-1,1));/*一の位*/
		i=16+gazousu+d5;/*表示場所の計算*/
		document.images[i].src=gb[b5].src;/*十の位の表示*/
		document.images[i+1].src=gb[c5].src;/*一の位の表示*/ 


	};
	/*ゲームの途中終了*/
	function syuryou(){
		clearInterval(IntervarID);/*ゲームタイマーの終了*/
	};


