interface ICalcularProps {
  initialValue: number;
  valueMonth: number;
  timeInput: number;
  feesInput: number;
  yearsOrMounthTime: string;
  yearsOrMounthFees: string;
  setTotalValue: (arg: any) => any;
  setTotalFees: (arg: any) => any;
  setTotalValueInvested: (arg: any) => any;
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
  setTotalValueInvested
}: ICalcularProps) {
  let i = 1;
  let juros = 0;
  let total = 0;
  let fees = feesInput;
  let time = timeInput;
  let totalJuros = 0

  if (yearsOrMounthTime === "Anos") {
    time *= 12
  }
  if (yearsOrMounthFees === "Anual") {
    fees /= 12.6
  }
  while (i <= time) {
    if (i === 1) {
      juros = Math.round((total + Number(initialValue)) * (fees / 100));
      totalJuros += juros
      total = total + Number(initialValue) + juros;
      i++;
      // console.warn(juros, total)
    } else {
      juros = Math.round((total + Number(initialValue)) * (fees / 100));
      totalJuros += juros
      total = total + Number(valueMonth) + juros;
      i++;
      // console.warn(juros, total)
    }
  }

  setTotalValue((total + valueMonth));
  setTotalFees(totalJuros)
  setTotalValueInvested((total + valueMonth) - totalJuros)
}

// 100 + 3
// 103 + 6
// 1
//