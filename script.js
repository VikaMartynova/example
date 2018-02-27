
var btnPrev = document.querySelector('#gallery .buttons .prev');
var btnNext = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;
console.log(-9%10);

btnNext.onclick = function(){
	images[i++].className = '';
	i = i%images.length;
	images[i].className = 'showed';
}
btnPrev.onclick = function(){
	images[i--].className = '';
	var it =i%images.length;
	i = it < 0 ? it+images.length : it;
	images[i].className = 'showed';
}


