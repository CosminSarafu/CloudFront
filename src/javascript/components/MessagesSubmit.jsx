import axios from "axios";
import React from "react";

function MessagesSubmit({ result }) {
    const handleMessageSend = async (e) => {
        const senderName = document.getElementById('senderName').value;
        const receiverMail = document.getElementById('receiverMail').value;

        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages/sendMail`, {
                senderName,
                receiverMail,
                senderMail: 'predoanaadrian18@stud.ase.ro',
                messageContent: result
            })

            console.log(response)

            if(response){
                alert(`\nMessage sent`);
            }

        }
        catch(error){
            console.log(error.response)
        }
    }

    return (
        <div id="MessagesSubmit">
            <h2 className="text-2xl font-bold mb-4 font-serif">Send mail:</h2>
            <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-serif" htmlFor="senderName">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-serif" id="senderName" type="text" placeholder="Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 font-serif" htmlFor="receiverMail">
                            Receiver mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-serif" id="receiverMail" type="text" placeholder="name@mail.com" />
                    </div>
                </div>
            </form>
            <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 capitalize font-serif" onClick={handleMessageSend}>Send Mail</button>
        </div>
    )
    
}

export default MessagesSubmit