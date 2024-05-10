import axios from "axios";
import React, {useState, useEffect} from "react";



function ExchangeRate({onResult}) {
    const [result, setResult] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("");
    const [currencyTo, setCurrencyTo] = useState("");
    const [amount, setAmount] = useState("");

    const handleGetResult = async (e) => {
        const _currencyFrom = document.getElementById('currencyFrom').value;
        setCurrencyFrom(_currencyFrom)

        const _currencyTo = document.getElementById('currencyTo').value;
        setCurrencyTo(_currencyTo)

        const _amount = document.getElementById('Amount').value;
        setAmount(_amount)

        const result = await axios.get(`${process.env.REACT_APP_API_URL}/utils/?currencyTo=${currencyTo}&currencyFrom=${currencyFrom}&amount=${amount}`);
        console.log("Result", result.data);
        setResult(result.data);
        onResult(result.data)
}

    return (
        <div id="ExchangeRate">
            <h2 className="text-2xl font-bold mb-4 font-serif">Insert Exchange Rate Details:</h2>
            <form>
            <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-serif" htmlFor="senderName">
                            Base Currency
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-serif" id="currencyFrom" type="text" placeholder="BaseCurrency" />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-serif" htmlFor="receiverMail">
                            Exchange Currency
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-serif" id="currencyTo" type="text" placeholder="TranslateCurrency" />
                    </div>

                    <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-serif" htmlFor="receiverMail">
                            Amount
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-serif" id="Amount" type="text" placeholder="999" />
                    </div>
                </div>
            </form>
            <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 capitalize font-serif" onClick={handleGetResult}>Calculate</button>
            <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-10 font-serif">
                {result} 
            </span>
        </div>
    )
}

export default ExchangeRate