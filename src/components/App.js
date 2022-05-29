import { useEffect, useState } from 'react';


import './App.css';
import Root from './Root';

function App() {

  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>
				res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
			)
    .then(res => setJsonData(res))

  },[])

  useEffect(() => {
    console.log(jsonData)
  }, [jsonData])

  return (
    <div className="App">
      <Root data={jsonData}/>
    </div>
  );
}

export default App;
