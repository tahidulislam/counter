// counter initialize
let count = 0;

// selectors
const value = document.querySelector('.value');
const btns   = document.querySelectorAll('.btn');

// btn
btns.forEach( function(btn) {
	btn.addEventListener('click', (e)=>{
		const styles= e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if(styles.contains('increase')){
			count++;
		}else{
			count = 0;
		}
		value.textContent = count;
	});
});