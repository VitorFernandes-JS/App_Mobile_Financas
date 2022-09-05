interface ICalcularParams {
  initialValue: number;
  valueMonth: number;
  timeInput: number;
  feesInput: number;
  yearsOrMounthTime: string;
  yearsOrMounthFees: string;
  setTotalValue: (arg: any) => any;
  setTotalFees: (arg: any) => any;
  setTotalValueInvested: (arg: any) => any;
  setModal: (arg: any) => any;
}

function calculateInterest(total: number, rate: number) {
  var interest = rate / 100 + 1;
  return parseFloat((total * interest).toFixed(4));
}

export function Calcular({
  yearsOrMounthTime,
  yearsOrMounthFees,
  initialValue,
  valueMonth,
  timeInput,
  feesInput,
  setTotalValue,
  setTotalFees,
  setTotalValueInvested,
  setModal,
}: ICalcularParams) {
  let i = 1;
  let fees = feesInput;
  let time = timeInput;
  let juros =
    calculateInterest(Number(initialValue), fees) - Number(initialValue);
  let total = calculateInterest(Number(initialValue), fees);

  if (yearsOrMounthTime === "Anos") {
    time *= 12;
  }

  if (yearsOrMounthFees === "Anual") {
    fees /= 12.6;
  }

  while (i < time) {
    juros = calculateInterest(Number(valueMonth), fees) - Number(valueMonth);
    total = calculateInterest(total + Number(valueMonth), fees);
    i++;
  }

  setTotalValue(total + valueMonth);
  setTotalFees(total + valueMonth - (valueMonth * time + initialValue));
  setTotalValueInvested(valueMonth * time + initialValue);
  setModal(true);
}
