import React from "react";

function Response({messages = []}) {
    
    const style = {
        minWidth: '100%',
        display: 'table'
    }
    return (
        <div className="mt-4 p-4 bg-gray-700 rounded-md text-white">
        {Array.isArray(messages) && messages.length > 0 ? (
            messages.map((msg, index) => (
                <div
                    key={index}
                    className={`message mb-2 p-2 rounded-md ${
                        msg.user === "Me"
                            ? "bg-blue-600 text-right ml-auto"
                            : "bg-gray-600 text-left"
                    }`}
                    style={{ maxWidth: '75%' }} // Limit the width of messages
                >
                    <strong>{msg.user}: </strong>
                    <span>{msg.text}</span>
                </div>
            ))
        ) : (
            <p>No messages to display</p>
        )}
    </div>
    );


}


export default Response;