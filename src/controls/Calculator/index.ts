const [initialValue, setInitialValue] = useState('')

  const [valueMonth, setValueMonth] = useState('')

  const [timeInput, setTimeInput] = useState(0)

  const [feesInput, setFeesInput] = useState(0)

  const [totalValue, setTotalValue] = useState(0)

export function Calcular () {
            let i = 1;
            let juros = 0;
            let total = 0;
            while (i <= Number(timeInput)) {
              if (i === 1) {
                juros =
                  (total + Number(initialValue)) *
                  (Number(feesInput) / 100);
                i++;
                total = total + Number(initialValue) + juros;
              } else {
                juros =
                  (total + Number(valueMonth)) * (Number(feesInput) / 100);
                total = total + Number(valueMonth) + juros;
                i++;
              }
            }
            setTotalValue(Number((total + Number(valueMonth))));
            }}
}