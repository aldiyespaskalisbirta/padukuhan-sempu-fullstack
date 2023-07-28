import { useEffect, useState } from "react";

const Kontak = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    console.log(name);
    console.log(message);
  }, []);

  const handleFocus = () => {
    setFocus(!focus);
  };

  useEffect(() => {
    console.log(focus);
  }, [focus]);
  return (
    <main className="px-4 min-h-screen flex flex-col mt-16 gap-4">
      <form className="w-full flex flex-col gap-4">
        <h1 className="w-full text-center font-black text-xl">KONTAK</h1>
        <div className="w-full space-y-1">
          <label htmlFor="username" className="ml-4 text-base font-semibold">
            Username
          </label>
          <input
            className="w-full bg-gray-200 border-none rounded-full focus:ring-gray-500"
            type="text"
            name="username"
            id="username"
            placeholder="Nama Lengkap"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full space-y-1">
          <label htmlFor="email" className="ml-4 text-base font-semibold">
            Email
          </label>
          <input
            className="w-full bg-gray-200 border-none rounded-full focus:ring-gray-500"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full space-y-1">
          <label htmlFor="message" className="ml-4 text-base font-semibold">
            message
          </label>
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="8"
            placeholder="Message..."
            className="textarea scrollbar-hide text-wrap w-full h-full resize-none rounded-xl bg-gray-200 focus:ring-gray-500 focus:border-0
          "
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="action flex justify-end">
          <button
            type="submit"
            className="bg-green-400 py-2 px-8 rounded-full font-semibold text-base"
          >
            Kirim
          </button>
        </div>
      </form>
    </main>
  );
};

export default Kontak;
