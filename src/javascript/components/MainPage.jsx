import React, {useState} from "react";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessagesSubmit from "./MessagesSubmit";
import ExchangeRate from "./ExchangeRate";

function MainPage(props) {
    const [result, setResult] = useState("");
    const handleResult = (data) => {
        setResult(data);
        console.log("Result",result);
    }
    return (
        <div id="MainPage">
            <Header title={'Exchange Rate App'} />
            <div className="flex max-w-7xl m-auto px-14 py-24">
                <div className="w-1/2 pl-10">
                    <MessagesList/>
                </div>
                <div className="w-1/2 pr-10">
                    <ExchangeRate onResult={handleResult}/>
                    <MessagesSubmit result={result}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;