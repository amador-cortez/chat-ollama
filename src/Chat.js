import React, {useState} from "react";
import Input from "./Input";
import Response from "./Response";
import axios from "axios";
import loadingGif from './loading.gif';

function Chat() {

    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const baseURL = "http://127.0.0.1:11434/api/generate"



    const handleSubmit = (prompt) => {
      // Append the user's message to the messages array
        const newMessage = { text: prompt, user: "Me"};
        setMessages([...messages, newMessage]);

        setLoading(true)
        // Send the prompt to the AI API
        axios
        .post(baseURL, {
            model:"llama3",
            prompt: prompt,
            stream:false
        })
        .then((response) => {
            const text = response.data.response;
            const aiResponse = { text: text, user: response.data.model };

            // Append the AI's response to the messages array
            setMessages(prevMessages => [...prevMessages, aiResponse]);

            setLoading(false)
        })

    }

    return (
        <>
            <div 
            className="flex items-center justify-center min-h-screen bg-gray-900"
            style={{boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)"}}
            >
                <div className="w-full max-w-3xl p-4 bg-gray-800 rounded-lg shadow-lg">
                   {/* Display the loading GIF if loading is true */}

                <Response messages={messages}/>

                {loading && (
                        <div className="flex justify-center my-4">
                            <img src={loadingGif} alt="Loading..." className="w-24 h-24" />
                        </div>
                    )}

                <Input onPromptSubmit={handleSubmit}/>
                </div>

   
            </div>
  
        </>

    );

}

export default Chat;