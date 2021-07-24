function Hero({ handleLogout }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-24">
      <header className="bg-green-500 h-12 w-screen flex items-center justify-between">
        <h2 className="ml-3 text-green-900 text-3xl font-sans lowercase tracking-wider 
          font-semibold">
          Location Unknown ◐
        </h2>
        <button 
          className="mr-2 py-2 px-5 bg-green-700 hover:bg-green-900 text-white 
          font-bold rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}> Logout </button>
      </header>
      <section>
        <iframe 
          width="660" 
          height="415" 
          src="https://www.youtube.com/embed/CoOWQDQ-lEw" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </section>
    </div>
  )
}

export default Hero
