import React, { useState } from "react";


function Input({onPromptSubmit}) {
    const [prompt, setPrompt] = useState('');

    const handleChange = (event) => {
        setPrompt(event.target.value);
    }

    const handleSubmit = () => {
        onPromptSubmit(prompt)
        setPrompt("")
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl flex">
                <input 
                className="flex-grow h-10 rounded-l-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                type="text"
                id="prompt"
                value={prompt}
                onChange={handleChange}
                placeholder=">Enter your text here..." />
                <button className="h-10 px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleSubmit}>
        Send</button>
            </div>

        </div>
    );

};

export default Input;