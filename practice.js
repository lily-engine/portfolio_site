// トグルメニュー //

$(function(){
    $('.toggle').click (function() {
        $('.toggle-menu').slideToggle();
    });
});

// モーダル //

$(function() { 
    $('.course-item a').click(function() {
            var imgSrc = $(this).children().attr('src');
            $('.bigimg').children().attr('src', imgSrc);
            $('.modal').fadeIn();
            $('body,html').css('overflow-y', 'hidden');
            // overflow-yをhiddenすると、垂直方向に内容を切り取り、スクロールバーは表示されない //

            return false
            // JQにおいては、親要素へのイベント伝播を止める指令 //
            // ここではaタグの遷移を無効化する //

          });
    
    $('.close-btn').click(function() {
            $('.modal').fadeOut();
            $('body,html').css('overflow-y', 'visible');
            // 無効化していたスクロールを再度有効にする //

            return false
          });

    $('.body,html').click(function() {
            $('.modal').fadeOut();
            $('body,html').css('overflow-y', 'visible');
            // 無効化していたスクロールを再度有効にする //

            return false
          });
    
    });