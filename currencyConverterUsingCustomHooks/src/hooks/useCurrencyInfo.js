import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .console.log(data);
    // here currency is a dependency array, bcoz i would like the fetch method inside the useEffect to get called only when the value of currency changes
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
