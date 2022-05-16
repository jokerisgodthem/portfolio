$(function(){

    const $gnb = $('#wrap > header > .container > nav > .gnb');
    const $lnb = $gnb.find('.lnb');
    const $bg_lnb = $('.bg_lnb');

    const $container = $('#slides > .screen > .slides-container');
    const $container2 = $('#slides2> .screen > .slides-container');
    const $slides = $container.children('li');
    const $slides2 = $container2.children('li');
 
    const $btnNext = $('#slides > a.next');
    const $btnPrev = $('#slides > a.prev');

    const $btnNext2 = $('#slides2 > a.next');
    const $btnPrev2 = $('#slides2 > a.prev');

    const $indicator = $('.topicslides > .slides-topic-pagination > li > a');
	const $topiccontainer = $('.topicslides > .slides-topic-container');
    const $topicslides = $('.topicslides > .slides-topic-container > p')

    const $topicPrev = $('.topicslides>.prev');
	const $topicNext = $('.topicslides>.next');
 
    $gnb.on('mouseenter', function(){

        $bg_lnb.stop().slideDown(500);//배경판 노출
        $lnb.stop().slideDown(500);//서브메뉴 노출
        // $bg_lnb.stop().fadeIn(50);//배경판 노출
        // $lnb.stop().fadeIn(50);//서브메뉴 노출
    });

    $gnb.on('mouseleave', function(){
        $lnb.stop().slideUp(500);
        $bg_lnb.stop().slideUp(500);
        // $lnb.stop().fadeOut(50);
        // $bg_lnb.stop().fadeOut(50);
    });

    $bg_lnb.on('mouseover', function(){
        $gnb.trigger('mouseover');
    });
    
    $bg_lnb.on('mouseout', function(){
        $gnb.trigger('mouseout');        
    });

     
    let nowIdx = 2; 
let lock = false;
    //다음버튼
    $btnNext.on('click', function(evt) {
       evt.preventDefault();
        if(lock===false){
            lock = true;
            //인덱스추출
            if (nowIdx < 5) {
                nowIdx++;
            } else {
                nowIdx = 0;
            }
            
            //활성카드 처리
            $slides.removeClass('on').eq(nowIdx).addClass('on');
            
            $container.stop().animate({ left: -480 }, function() {
                //매번 카드의 현재 배열정보를 새로 가져와야 함
          $('#slides > .screen > .slides-container > li').first().appendTo($container);
          
          $container.css({
              left: -276
            });
         lock =false;
        });
    }
    });
 
    //이전버튼
    $btnPrev.on('click',function(evt){
        evt.preventDefault();
        if(lock===false){
            lock = true;
            // 인덱스추출
            if(nowIdx>0){nowIdx--;}
            else{
                nowIdx=5;
            }
            //활성카드 처리
            $slides.removeClass('on').eq(nowIdx).addClass('on');
            $container.stop().animate({ left: 0 }, function() {
                //매번 카드의 현재 배열정보를 새로 가져와야 함
                $('#slides > .screen > .slides-container > li').last().prependTo($container);
                
                $container.css({
                    left: -276
                });
                lock = false;
            });
        }// lock
        });

// -------------------------------------------------


let nowIdx2 = 2; 
let lock2 = false;
    //다음버튼
    $btnNext2.on('click', function(evt) {
       evt.preventDefault();
        if(lock2===false){
            lock2 = true;
            //인덱스추출
            if (nowIdx2 < 5) {
                nowIdx2++;
            } else {
                nowIdx2 = 0;
            }
            
            //활성카드 처리
            $slides2.removeClass('on').eq(nowIdx2).addClass('on');
            
            $container2.stop().animate({ left: -480 }, function() {
                //매번 카드의 현재 배열정보를 새로 가져와야 함
          $('#slides2 > .screen > .slides-container > li').first().appendTo($container2);
          
          $container2.css({
              left: -276
            });
         lock2 =false;
        });
    }
    });
 
    //이전버튼
    $btnPrev2.on('click',function(evt){
        evt.preventDefault();
        if(lock2===false){
            lock2 = true;
            // 인덱스추출
            if(nowIdx2>0){nowIdx2--;}
            else{
                nowIdx2=5;
            }
            //활성카드 처리
            $slides2.removeClass('on').eq(nowIdx2).addClass('on');
            $container2.stop().animate({ left: 0 }, function() {
                //매번 카드의 현재 배열정보를 새로 가져와야 함
                $('#slides2 > .screen > .slides-container > li').last().prependTo($container2);
                
                $container2.css({
                    left: -276
                });
                lock2 = false;
            });
        }// lock
        });

        // ----------------------------------

        let intervalKey = null;
 
        let topicIdx = Math.floor(Math.random()*3); //인디케이터를 기준으로 0~4 랜덤추출

        // 초기화작업
	$topicslides.eq(nowIdx).show();
	$indicator.eq(nowIdx).parent().addClass('on');
 
	// 반복작업 함수
	const fadeFn = function(){
 
	   // 인디케이터 활성화
	   $indicator.eq(topicIdx).parent().addClass('on').siblings().removeClass('on');
	   
	   
	   // 슬라이드 처리
	   $topicslides.eq(topicIdx).fadeIn(1000).siblings().fadeOut(1000);
	};
	
	// 인디케이터에 대한 클릭 이벤트
	$indicator.on('click', function(evt){
	   evt.preventDefault();
 
	   // nowIdx 추출
	   topicIdx = $indicator.index(this);
 
	   fadeFn(); //인디케이터 활성화, 슬라이드 처리 함수호출
 
	});

	// 다음버튼에 대한 클릭이벤트
	$topicNext.on('click',function(evt){
		evt.preventDefault();

		$indicator.length-1

		if(topicIdx<$indicator.length-1){
			topicIdx++;
		}else{
			topicIdx=0;
		}
		fadeFn();
	});
	

	// 이전버튼
	$topicPrev.on('click',function(evt){
		evt.preventDefault();
		$indicator.length-1

		if(topicIdx>0){
			topicIdx--;
		}else{
			topicIdx=$indicator.length-1
		}
		fadeFn();
	});


});