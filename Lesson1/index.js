		const bonePrise = 15.678;
		const scullPrise = 123.965;
		const kneePrise = 90.2345;

		//1
		const max = Math.max(bonePrise, scullPrise, kneePrise);

		//2
		const min = Math.min(bonePrise, scullPrise, kneePrise);
		
		//3
		const sum = bonePrise + scullPrise + kneePrise;
		
		//4
		const bonePriseFloor = Math.floor(bonePrise);
		const scullPriseFloor = Math.floor(scullPrise);
		const kneePriseFloor = Math.floor(kneePrise);
		const sumFoor = (bonePriseFloor + scullPriseFloor + kneePriseFloor);
		
		//5
		const sumFloor100 = Math.ceil (sumFoor/100) * 100;
		
		//6
		const bool = (Math.floor(sum) % 2)==0;
		
		//7
		const rest = 500 - sum;
		
		//8
		const midPrise = (Math.floor(sum / 3 * 100) / 100 );
		
		//9
		const randDiscount = Math.random();
		const constPrice = 500;
		const restWithDisc = constPrice - (Math.floor(sum * randDiscount*100)/100);
		const profit = restWithDisc - constPrice / 2;

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