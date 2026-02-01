import Header from "./components/Header/Header"


function App() {

  return (
    <main>
      <img className="absolute top-0 right-0 opacity-60 -z-1" src="/gradient.png" alt="gradient-img" />
      <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-30 -z-10"></div>

      <Header />
    </main>
  )
}

export default App
