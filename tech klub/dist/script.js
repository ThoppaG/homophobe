var cur = 0;
const images = [
	'https://wallpapersafari.com/download/0pj5rH/',
	'https://wallpapersafari.com/download/sb4FuU/',
	'https://wallpapersafari.com/download/4wOuBC/'
]; 

const hero = document.getElementById('hero'),
			btn = document.querySelector('button');

const n = function(){
	cur++;
	let next;
	if( images[cur] ){ next = images[cur]; }
	else { next = images[0]; cur = 0; }
	
	// 	disable cache
	// next += '&x=' + new Date().getTime();
	
		var img = new Image();
		img.onload = function(){
			 hero.style = 'background-image: url('+ next +')';
				btn.classList.remove('loading');
		};
	
		img.src = next;	
}

btn.onclick = function(){
	this.classList.add('loading');
	n();
}