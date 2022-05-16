$(function() {
    const $container = $('#slides > .screen > .slides-container');
    const $slides = $container.children('li');
 
    const $btnNext = $('#slides > a.next');
    const $btnPrev = $('#slides > a.prev');
 
    let nowIdx = 2; //최초 3번째 슬라이드에 on이 붙어있게 설계했으므로....
let lock = false;
    //다음버튼
    $btnNext.on('click', function(evt) {
       evt.preventDefault();
        if(lock===false){
            lock = true;
            //인덱스추출
            if (nowIdx < 4) {
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
              left: -240
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
                nowIdx=4;
            }
            //활성카드 처리
            $slides.removeClass('on').eq(nowIdx).addClass('on');
            $container.stop().animate({ left: 0 }, function() {
                //매번 카드의 현재 배열정보를 새로 가져와야 함
                $('#slides > .screen > .slides-container > li').last().prependTo($container);
                
                $container.css({
                    left: -240
                });
                lock = false;
            });
        }// lock
        });
 });