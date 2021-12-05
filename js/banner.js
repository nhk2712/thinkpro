var banner = document.querySelectorAll('.banner'),
    bannerImg = document.querySelector('#banner-img')

banner[0].onmousedown = function(){setImg(1)}
banner[1].onmousedown = function(){setImg(2)}
banner[2].onmousedown = function(){setImg(3)}

function setImg(k) {
    bannerImg.src = "img/banner/" + k.toString() + ".jpg";

    for (var i = 0; i < banner.length; i++) {
        banner[i].style.fontWeight = 'unset'
    }
    banner[k-1].style.fontWeight = '500'
}