import { useEffect , useState } from 'react'


function App(){

const[quote , setQuote] = useState([]);


useEffect(() => {
  fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => {
    setQuote(data.quotes.slice(0, 10));
  })
  .catch((error) => console.error("Error is Occured: ",error));
},[])
 
return(
  <div>
    <h2> Top 10 Quotes </h2>
    {quote.map((quotes) => (
      <h1 key={quotes.id}>{quotes.quote}</h1>
    ))}
  </div>
)
}

export default App