// main.js

$(function(){
    // gnb 열기
    $('.btn-toggle').on('click', function(){
        $('#gnb').addClass('show');
    });

    // gnb 닫기
    $('.btn-close').on('click', function(){
        $('#gnb').removeClass('show');
    });
});