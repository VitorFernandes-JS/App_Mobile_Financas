interface ICalcularProps {
  initialValue: number;
  valueMonth: number;
  timeInput: number;
  feesInput: number;
  yearsOrMounthTime: string;
  yearsOrMounthFees: string;
  setTotalValue: (arg0: any) => any;
}

export function Calcular({
  yearsOrMounthTime,
  yearsOrMounthFees,
  initialValue,
  valueMonth,
  timeInput,
  feesInput,
  setTotalValue,
}: ICalcularProps) {
  let i = 1;
  let juros = 0;
  let total = 0;
  let fees = 0;
  let time = 0;
  if (yearsOrMounthTime === "Anos") {
    time = timeInput * 12
  }
  if (yearsOrMounthFees === "Anual") {
    fees = feesInput / 12
  }
  while (i <= time) {
    if (i === 1) {
      juros = (total + Number(initialValue)) * (fees / 100);
      i++;
      total = total + Number(initialValue) + juros;
    } else {
      juros = (total + Number(valueMonth)) * (fees / 100);
      total = total + Number(valueMonth) + juros;
      i++;
    }
  }
  setTotalValue((total + valueMonth));
}
