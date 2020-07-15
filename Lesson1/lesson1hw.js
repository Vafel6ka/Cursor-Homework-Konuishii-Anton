		let bonePrise = 15.678;
		let scullPrise = 123.965;
		let kneePrise = 90.2345;

		//1
		let max = Math.max(bonePrise, scullPrise, kneePrise);
		

		//2
		let min = Math.min(bonePrise, scullPrise, kneePrise);
		

		//3
		let sum = bonePrise + scullPrise + kneePrise;
		

		//4
		let bonePriseFloor = Math.floor(bonePrise);
		let scullPriseFloor = Math.floor(scullPrise);
		let kneePriseFloor = Math.floor(kneePrise);
		let sumFoor = (bonePriseFloor + scullPriseFloor + kneePriseFloor);
		

		//5
		let sumFloor100 = Math.ceil (sumFoor/100) * 100;
		

		//6
		let bool = (Math.floor(sum) % 2)==0;
		

		//7
		let rest = 500 - sum;
		

		//8
		let midPrise = (Math.floor(sum / 3 * 100) / 100 );
		

		//9
		let randDiscount = Math.random();
		let cina = 500;
		let restWithDisc = cina - (Math.floor(sum * randDiscount*100)/100);
		

		let profit = restWithDisc - cina / 2;
		
		const results = `<p>Максимальне число: ${max}</p>
                 <p>Мінімальне число: ${min}</p>
                 <p>Сума: ${sum}</p>
                 <p>Сума цілих значень цін товарів: ${sumFoor}</p>                                       
                 <p>Заокруглена сума цілих значень цін товарів до сотень: ${sumFloor100}</p>
                 <p>Заокруглена сума всіх значень цін товарів парна чи ні: ${bool}</p>
                 <p>Сума решти: ${rest}</p>
                 <p>Заокруглене середнє значеня цін товарів: ${midPrise} </p>
                 <p>Залишок зі знижкою: ${restWithDisc.toFixed(2)}</p>
                 <p>Чистий прибуток: ${profit.toFixed(2)}</p>
                 <p>Максимальне число: ${max}</p>`;

		document.getElementById("res").innerHTML = results;