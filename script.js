
const calGrowth = (pastValue , currentValue) =>(currentValue - pastValue) / pastValue * 100;
function myfun(){
	document.querySelector('.investment__btn').addEventListener('click', function(){

		 const btsUsdBougth =  document.getElementById("bought").value;

		 const btsUseNow =  document.getElementById("today").value;

		 const btn =  document.getElementById("buy").value;

		 const invest = btn * btsUsdBougth;
		 const current = btn * btsUseNow;
		 const profit = current - invest;

		const growth = calGrowth(invest , current);

		let message = " ";

		if(profit > 0){
				message = `Oh  you are at in profit of $${profit} and growth (${growth}%)`;
				document.querySelector('.result').style.color = 'green';
		}
		else if(profit < 0){
			message = `Oh no you are at a loss $${profit} (${growth}%) `;
			document.querySelector('.result').style.color = 'red';
		}
		else{
			message = 'You are breaking even';
		}
		document.getElementById("res").textContent = message;

	});
}

// const calGrowth = (pastValue , currentValue) =>(currentValue - pastValue) / pastValue * 100;

// document.querySelector(".investment__btn").addEventListener('click', function(){

//  const btsUsdBougth =  document.querySelector('.price__input price__input--bought').value;

//  const btsUseNow = document.querySelector('.price__input price__input--now').value;

//  const btn = document.querySelector('.investment__btc').value;

//  const invest = btn * btsUsdBougth;
//  const current = btn * btsUseNow;
//  const profit = current - invest;

// 	const growth = calGrowth(invest , current);

// 	let message = " ";

// 	if(profit > 0){
// 		message = `Oh  you are at in profit of ${profit} and growth ${growth}`;
// 		document.querySelector('.result').style.color = 'green';
// 	}
// 	else if(profit < 0){

// 		message = `Oh no you are at a loss ${profit} ${growth}`;
// 		document.querySelector('.result').style.color = 'red';
// 	}
// 	else{
// 		message = 'You are breaking even';
// 	}
// 	document.querySelector('.result').textContent = message;
// 	});
