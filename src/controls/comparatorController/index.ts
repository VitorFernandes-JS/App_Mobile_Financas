interface IComparatorParams {
	timeInput: number;
	ipcaRate: number;
	selicRate: number;
	valueMonth: string;
	yearsOrMounthTime: string;
	setValueTotalIpca: (arg: any) => any;
	setValueTotalSelic: (arg: any) => any;
	setValueTotalSavings: (arg: any) => any;
	setValueTotalCdi: (arg: any) => any;
}

function calculateInterest(total: number, rate: number) {
	var interest = rate/100+1;
	return parseFloat((total * interest).toFixed(4));
}

export function calcComparator({ 
	timeInput,
	ipcaRate,
	selicRate,
	valueMonth,
	yearsOrMounthTime,
	setValueTotalIpca,
	setValueTotalSelic,
	setValueTotalSavings,
	setValueTotalCdi
 }: IComparatorParams) {
	let i = 1;
	let feesIpca = ipcaRate / 12; // transformando juros IPCA p/mês
	let feesSelic = selicRate * 22; // transformando juros SELIC p/mês
	let feesSavings = 0.5; // a poupança rende 0.5 ao mês quando a selic está acima de 8.5%
	let feesCdi = (selicRate - (selicRate * 0.01)) * 22; // CDI = -1/10 da SELIC

	let totalIpca = +valueMonth
	let totalSelic = +valueMonth 
	let totalSavings = +valueMonth
	let totalCdi = +valueMonth

	let time = timeInput;

	if (yearsOrMounthTime === "Anos") {
		time *= 12
	}

	while (i < time) {
		// console.log(`--------------------------------- ${i + 1} MÊS ---------------------------------`)
		totalIpca = calculateInterest(totalIpca, feesIpca) + Number(valueMonth)
		totalSelic = calculateInterest(totalSelic, feesSelic) + Number(valueMonth)
		totalSavings = calculateInterest(totalSavings, feesSavings) + Number(valueMonth)
		totalCdi = calculateInterest(totalCdi, feesCdi) + Number(valueMonth)

		// console.log
		// (`
		// 	SELIC: ${totalSelic}
		// 	IPCA: ${totalIpca}
		// 	CDI: ${totalCdi}
		// 	POUPANÇA: ${totalSavings}
		// `)
		i++;
	}

	setValueTotalIpca(totalIpca)
	setValueTotalSelic(totalSelic)
	setValueTotalSavings(totalSavings)
	setValueTotalCdi(totalCdi)
}
	
