import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#F5EAE3] text-black flex justify-center items-center ">
      <header className="bg-gradient-to-r from-[#C08C5D] to-[#DA988E] text-white fixed left-0 right-0 top-0 p-6 text-center rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-bold tracking-wide">
          Social Media Interface
        </h1>
        <p className="text-xl mt-2">Built with the MERN Stack + Tailwind CSS</p>
      </header>

      <main className="container mx-auto p-6 ">
        <section className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <h2 className="text-3xl font-semibold mb-6 text-[#C08C5D]">
            Coming Soon!
          </h2>
          <p className="text-lg text-black">
            We're working on the development of this feature. Stay tuned for
            exciting updates!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
