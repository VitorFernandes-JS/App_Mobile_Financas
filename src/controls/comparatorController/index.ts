
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

type IHandleWithWhat = 'fees' | 'sum'

function calculateInterest(total: number, rate: number) {
	var interest = rate/100+1;
	return parseFloat((total * interest).toFixed(4));
}

function handleWithWhat(
		word: IHandleWithWhat, 
		totalValue: number, 
		valueMonth: number, 
		feesOrTotalFees: number
	): number {
	if(word === 'fees') {
		return totalValue * (feesOrTotalFees / 100)
	}
	return valueMonth + feesOrTotalFees
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
	let feesIpca = ipcaRate / 12;
	let feesSelic = selicRate * 22;
	let feesSavings = 0.5;
	let feesCdi = (selicRate - (selicRate * 0.01)) * 22; 

	let totalFeesIpca = 0;
	let totalFeesSelic = 0;
	let totalFeesSavings = 0;
	let totalFeesCdi = 0;

	let totalIpca = +valueMonth
	let totalSelic = +valueMonth 
	let totalSavings = +valueMonth
	let totalCdi = +valueMonth 

	let time = timeInput;

	if (yearsOrMounthTime === "Anos") {
		time *= 12
	}

	while (i < time) {
		
		totalFeesIpca = handleWithWhat('fees', totalIpca, +valueMonth, feesIpca) 
		totalIpca += handleWithWhat('sum', totalIpca, +valueMonth, totalFeesIpca)
		// totalIpca = calculateInterest(totalIpca + Number(valueMonth), feesIpca)

		totalFeesSelic = handleWithWhat('fees', totalSelic, +valueMonth, feesSelic)
		totalSelic += handleWithWhat('sum', totalSelic, +valueMonth, totalFeesSelic) 
		// totalSelic = calculateInterest(totalSelic + Number(valueMonth), 1.0625)

		totalFeesSavings = handleWithWhat('fees', totalSavings, +valueMonth, feesSavings)
		totalSavings += handleWithWhat('sum', totalSavings, +valueMonth, totalFeesSavings)
		// totalSavings = calculateInterest(totalSavings + Number(valueMonth), feesSavings)

		totalFeesCdi = handleWithWhat('fees', totalCdi, +valueMonth, feesCdi)
		totalCdi += handleWithWhat('sum', totalCdi, +valueMonth, totalFeesCdi)
		// totalCdi = calculateInterest(totalCdi + Number(valueMonth), feesCdi)

		i++;
	}

	setValueTotalIpca(totalIpca)
	setValueTotalSelic(totalSelic)
	setValueTotalSavings(totalSavings)
	setValueTotalCdi(totalCdi)
}
	
