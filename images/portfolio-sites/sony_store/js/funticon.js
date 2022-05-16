$(function(){
  
    const $gnb = $('#wrap > header > .container > nav > .gnb');
    const $lnb = $gnb.find('.lnb');
    const $bg_lnb = $('.bg_lnb');
    const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');
    const $item = $('.item>.item-slides')
    const $expandslides = $('.expand>.expand-slides')
    const $itemNext = $('.itemNext')
    const $earphone = $('.slides-container>.earphone-slides')
	const $earphonePrev = $('.slides-container>.earphonePrev');
	const $earphoneNext = $('.slides-container>.earphoneNext');
    let nowIdx = 0;
    let itemIdx =0;


    $gnb.on('mouseover', function(){
        $bg_lnb.stop().slideDown(300);//배경판 노출
        $lnb.stop().slideDown(300);//서브메뉴 노출
        // $bg_lnb.stop().fadeIn(50);//배경판 노출
        // $lnb.stop().fadeIn(50);//서브메뉴 노출

    });

    $gnb.on('mouseout', function(){
        $lnb.stop().slideUp(300);
        $bg_lnb.stop().slideUp(300);
      
        // $lnb.stop().fadeOut(50);
        // $bg_lnb.stop().fadeOut(50);
    });

    $bg_lnb.on('mouseover', function(){
        $gnb.trigger('mouseover');
    });
    
    $bg_lnb.on('mouseout', function(){
        $gnb.trigger('mouseout');        
    });
  

//다음버튼에 대한 클릭이벤트 구문
$btnNext.on('click', function(evt) {
    evt.preventDefault();

    if (nowIdx < 4) {
        nowIdx++;
    } else {
        nowIdx = 0;
    }

    console.log('nowIdx =', nowIdx);
    //컨테이너 이동
		$container.stop().animate({
			left: -(100 * 6) + "%"
		}, 400, function() {
			//맨 앞의 한장을 맨뒤로 이동
			$('.slides > .slides-container > p:first-child').appendTo($container);
			$container.css({ left: -100*5+"%" });
		});
	});
//이전버튼에 대한 클릭이벤트 구문
$btnPrev.on('click', function(evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
        nowIdx--;
    } else {
        nowIdx = 4;
    }

    console.log('nowIdx =', nowIdx);

    

    //컨테이너 이동
    $container.stop().animate({
        left: -(100 * 4) + "%"
    }, 400, function() {
        //맨 뒤의 한장을 맨앞으로 이동
        $('.slides > .slides-container > p:last-child').prependTo($container);
        $container.css({ left: -100*5+"%"});
    });
});

$itemNext.on('click',function(evt){
evt.preventDefault();
if (itemIdx < 4) {
    itemIdx++;
} else {
    itemIdx = 0;
}
// item 슬라이드 컨테이너이동
$item.stop().animate({
    right: -(50 * 5) + "%"
},400,function(){
//맨 앞의 한장을 맨뒤로 이동
$('.item-slides>p:first-child').appendTo($item);
$item.css({ right: -100*4+"%" });
    
})

})
$itemNext.on('click',function(evt){
    evt.preventDefault();
    if (itemIdx < 4) {
        itemIdx++;
    } else {
        itemIdx = 0;
    }
    // item 슬라이드 컨테이너이동
    $expandslides.stop().animate({
        right: -(50 * 5) + "%"},800,function(){
    //맨 앞의 한장을 맨뒤로 이동
    $('.expand-slides>p:first-child').appendTo($item);
    $expandslides.css({ right: -50*4+"%" });
        
    })
    
    })

//다음버튼에 대한 클릭이벤트 구문
$earphoneNext.on('click', function(evt) {
    evt.preventDefault();

    if (nowIdx < 4) {
        nowIdx++;
    } else {
        nowIdx = 0;
    }

    console.log('nowIdx =', nowIdx);
    //컨테이너 이동
		$earphone.stop().animate({
			left: -400 *3
		}, 400, function() {
			//맨 앞의 한장을 맨뒤로 이동
			$('.slides-container> .earphone-slides > p:first-child').first().appendTo($earphone);
			$earphone.css({ left: -400*2 });
		});
	});
//이전버튼에 대한 클릭이벤트 구문
 $earphonePrev.on('click', function(evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
        nowIdx--;
    } else {
        nowIdx = 4;
    }

    console.log('nowIdx =', nowIdx);

    

    //컨테이너 이동
    $earphone.stop().animate({
        left: -400  *1
    }, 400, function() {
        //맨 뒤의 한장을 맨앞으로 이동
        $('.slides-container > .earphone-slides > p:last-child').last().prependTo($earphone);
        $earphone.css({ left: -400*2});
    });
});
});