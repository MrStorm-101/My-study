$(function () {
    $(window).on('resize', () => {
        //1.窗口的宽度
        let clientW = $(window).width();
        //2.设置临界点
        let isShowBigImage = clientW >= 900;
        //3.获取所有item
        let $allItems = $('#lk_carousel .carousel-item');
        //4.遍历
        $allItems.each((index, item) => {
            //4.1取出图片路径
            let src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
            let imgUrl = `url(${src})`;
            //4.2设置背景
            $(item).css({
                backgroundImage: imgUrl
            });
            //4.3创建img标签
            if (!isShowBigImage) {
                let imgEle = `<img src="${src}">`;
                $(item).empty().append(imgEle);
            }
            else {
                $(item).empty();
            }
        })
    })
})

$(window).trigger('resize');

$('[data-toggle="tooltip"]').tooltip()