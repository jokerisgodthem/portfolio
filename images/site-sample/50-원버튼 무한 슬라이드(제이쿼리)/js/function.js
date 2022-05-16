//약식 준비핸들러
$(function(){
   
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

	let intervalKey = null;

	let nowIdx = 1;
	let oldIdx = nowIdx;


	$indicator.on('click', function(evt){
	   evt.preventDefault();
	
	   //nowIdx 값 추출
	   nowIdx = $indicator.index(this+1);
	
	   //활성화표시
	   $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	   
	   //컨테이너이동
	   $container.stop().animate({
		  left : -1120*nowIdx
	   });
	});
 
 
	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt){
	   evt.preventDefault();
 
	   //nowIdx 값 추출 1~4 정수
	   /*
		  현재 -> 이전버튼 누르면
		   4   -> 3
		   3   -> 2
		   2   -> 1
		   1   -> 0
		   0   -> 4
	   */
	  if(nowIdx>0){
		 nowIdx--;
	  } else {
		 nowIdx = 4;
	  }
 
	  //인디케이터 활성화표시
	  $indicator.eq(nowIdx).parent().addClass('on')
						   .siblings().removeClass('on');
 
 
	  //컨테이너 이동
	  $container.stop().animate({
		 left : -1120*nowIdx
	  })
	});
 
 
	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click',function(evt){
	   evt.preventDefault();
 
	   
		nowIdx++;
		// 활상화
		$indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
		
		if(nowIdx===6){
			nowIdx=1;
		}
		// 컨테이너
		$container.stop().animate({
			left : -1120*2
		},400,function(){
			$('.slides > .slides-pagination > p:first-child').appendTo($container);
		});
		
		
	
	});



 });