//약식 준비핸들러
$(function(){
   
   const $indicator = $('.slides > .slides-pagination > li > a');
   const $container = $('.slides > .slides-container');
   const $btnPrev = $('.prev');
   const $btnNext = $('.next');
   const $indicator2 = $('.slides > .slides-pagination > li > a');
   const $container2 = $('.slides > .slides-container');
   const $btnPrev2 = $('.prev2');
   const $btnNext2 = $('.next2');
   
   let nowIdx = 0;
   
   $indicator.on('mouseover', function(evt){
      evt.preventDefault();
   
      //nowIdx 값 추출
      nowIdx = $indicator.index(this);
   
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

      /*
         현재 -> 이전버튼 누르면
          0   -> 1
          1   -> 2
          2   -> 3
          3   -> 4
          4   -> 0
      */      

      if(nowIdx<4){
         nowIdx++;
      } else {
         nowIdx = 0;
      }

      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
      
      $container.stop().animate({
         left:-1120*nowIdx
      })
   })
})