import logo from "/images/logo.svg"
import Card from "./components/Card"

function App() {
  

  return (

     <main className="border border-red-600 font-ff-space-mono min-h-screen bg-Light-grayish-cyan flex flex-col items-center gap-6">
    <img className="text-center h-14 mt-12 md:mt-16 max-w-fit" src={logo} alt="logo" />
    <Card />
   </main>
   
  
  )
}

export default App
