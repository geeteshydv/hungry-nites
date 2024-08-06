import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}. Your message has been received.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto m-5 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded-lg text-black"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
