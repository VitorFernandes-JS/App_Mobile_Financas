interface ICalcularProps {
  initialValue: number;
  valueMonth: number;
  timeInput: number;
  feesInput: number;
  setTotalValue: (arg0: any) => any;
}
export function Calcular({
  initialValue,
  valueMonth,
  timeInput,
  feesInput,
  setTotalValue,
}: ICalcularProps) {
  let i = 1;
  let juros = 0;
  let total = 0;
  while (i <= Number(timeInput)) {
    if (i === 1) {
      juros = (total + Number(initialValue)) * (Number(feesInput) / 100);
      i++;
      total = total + Number(initialValue) + juros;
    } else {
      juros = (total + Number(valueMonth)) * (Number(feesInput) / 100);
      total = total + Number(valueMonth) + juros;
      i++;
    }
  }
  setTotalValue((total + valueMonth));
}
