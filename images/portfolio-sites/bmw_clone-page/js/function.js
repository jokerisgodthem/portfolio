$(function(){

    const $gnb = $('#wrap > header > .container > nav > .gnb');
    const $lnb = $gnb.find('.lnb');
    const $bg_lnb = $('.bg_lnb');
    const $indicator = $('.slides > .slides-pagination > li > a');
	const $slides = $('.slides > .slides-container > p');

    let nowIdx = Math.floor(Math.random()*14); //인디케이터를 기준으로 0~4 랜덤 추출

	//초기화 작업 
	$slides.eq(nowIdx).show();
	$indicator.eq(nowIdx).parent().addClass('on');

    // $gnb.on('click', function(){
 
    //     $lnb.stop().slideDown(1000);//서브메뉴 노출
    //     // $bg_lnb.stop().fadeIn(50);//배경판 노출
    //     // $lnb.stop().fadeIn(50);//서브메뉴 노출
    //     $gnb.css({backgroundcolor: white})
    // });

    // $gnb.on('mouseleave', function(){
    //     $lnb.stop().slideUp(1000);
    

    //     // $bg_lnb.stop().fadeOut(50);
    // });

    // $bg_lnb.on('click', function(){
    //     $gnb.trigger('click');
    // });
    
    // $bg_lnb.on('click', function(){
    //     $gnb.trigger('click');        
    // });
    

    const fadeFn = function(){
		//인디케이터 활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//슬라이드 처리
		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000);
	};

	//인디케이터에 대한 클릭이벤트
	$indicator.on('click', function(evt){
		evt.preventDefault();
		
		//nowIdx 추출
		nowIdx = $indicator.index(this);

		fadeFn();//인디케이터 활성화, 슬라이드 처리 함수호출
	});
});