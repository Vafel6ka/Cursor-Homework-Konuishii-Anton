		let bonePrise = 15.678;
		let scullPrise = 123.965;
		let kneePrise = 90.2345;

		//1
		let max = Math.max(bonePrise, scullPrise, kneePrise);
		document.writeln(`Максимальне число: ${max} /`);

		//2
		let min = Math.min(bonePrise, scullPrise, kneePrise);
		document.writeln(`Мінімальне число: ${min} /`);

		//3
		let sum = bonePrise + scullPrise + kneePrise;
		document.writeln(`Сума: ${sum} /`);

		//4
		let bonePriseFloor = Math.floor(bonePrise);
		let scullPriseFloor = Math.floor(scullPrise);
		let kneePriseFloor = Math.floor(kneePrise);
		let sumFoor = (bonePriseFloor + scullPriseFloor + kneePriseFloor);
		document.writeln(`Сума цілих значень цін товарів: ${sumFoor} /`);

		//5
		let sumFloor100 = Math.ceil (sumFoor/100) * 100;
		document.writeln(`Заокруглена сума цілих значень цін товарів до сотень: ${sumFloor100} /`);

		//6
		let bool = (Math.floor(sum) % 2)==0;
		document.writeln(`Заокруглена сума всіх значень цін товарів парна чи ні: ${bool} /`);

		//7
		let rest = 500 - sum;
		document.writeln(`Сума решти: ${rest}`);

		//8
		let midPrise = (Math.floor(sum / 3 * 100) / 100 );
		document.writeln(`Заокруглене середнє значеня цін товарів: ${midPrise} /`);

		//9
		let randDiscount = Math.random();
		let cina = 500;
		let restWithDisc = cina - (Math.floor(sum * randDiscount*100)/100);
		document.writeln (`Залишок зі знижкою: ${restWithDisc.toFixed(2)} /`);

		let profit = restWithDisc - cina / 2;
		document.writeln(`Чистий прибуток: ${profit.toFixed(2)} /`);