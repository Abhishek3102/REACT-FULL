import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountIdInputId  =useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountIdInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountIdInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    // This event handler is triggered when the value of the currency input field changes.
                    // It checks if the `onCurrencyChange` function is provided (i.e., not null or undefined),
                    // and if so, it calls `onCurrencyChange` with the new value from the input field (e.target.value).
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable} 
                >
                    {/* // Iterate over the `currencyOptions` array and generate an <option> element for each currency.
                        // Each <option> will have a `value` attribute set to the currency and display the currency text.
                        // The `key` prop is required by React to uniquely identify each element in the list.
                        // This helps React efficiently update the DOM when the list changes (e.g., when items are added/removed). */}
                        {currencyOptions.map((currency) => (
                          <option key={currency} value={currency}>{currency}</option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
