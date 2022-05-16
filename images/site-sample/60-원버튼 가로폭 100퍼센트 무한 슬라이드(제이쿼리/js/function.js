$(function() {
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

	const $btnAuto = $('.btn_auto');

	let intervalKey = null;

	let nowIdx = 0; //인디케이터를 기준으로 0~4

	//인디케이터에 대한 클릭이벤트 구문
	$indicator.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 값 추출
		nowIdx = $indicator.index(this); //0~4

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너이동
		$container.stop().animate({
			left: -(100 * (nowIdx + 5)) + '%'
		});
	});

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt) {
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
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 4;
		}

		//인디케이터 활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: '-400%'
		}, 400, function() {
			//맨 뒤의 한장을 컨테이너의 맨앞으로 이동
			$('.slides > .slides-container > p').last().prependTo($container);
			$container.css({ left: '-500%' });
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click', function(evt) {
		evt.preventDefault();

		/*
         현재 -> 이전버튼 누르면
          0   -> 1
          1   -> 2
          2   -> 3
          3   -> 4
          4   -> 0
      */

		if (nowIdx < 4) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: '-600%'
		}, 400, function() {
			//맨 앞의 한장을 컨테이너의 맨뒤로 appendTo()
			$('.slides > .slides-container > p').first().appendTo($container);
			$container.css({ left: '-500%' });
		});
	});

	//원버튼 자동재생
	$btnAuto.on('click', function() {
		if ($(this).hasClass('pause')) {
			//play중이면.... => pause 클래스가 붙어 있으면...

			//1. pause 클래스 제거
			$(this).removeClass('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면.... => pause 클래스가 붙어 있지 않으면...
			//1. pause 클래스 추가
			$(this).addClass('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.trigger('click'); //이벤트 강제발생
			}, 2000);
		}
	});
});