import { useEffect, useState } from 'react'
import s from './App.module.css'
import { api } from "./api/api"
import { Card } from './components/card'


function App() {
  const [data, setData] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchPage, setSearchPage] = useState("")

  useEffect(()=>{
     api.get(`/character/?name=${searchName}&page=${searchPage}`).then((response) => {
          setData(response.data.data)
        }).catch((error) => {
          console.error("NÃO FOI POSSIVEL ACESSAR API", error)

        })
      }, [searchPage, searchName])
  
  return (
    <>
    <h1 className={s.title}>Disney</h1>
    <main>
      <div style={{display: "flex", flexWrap: "wrap", gap: "Spx", alignItems: "center", justifyContent: "center"}}>
        <input type="text" value={searchPage}  onChange={(e) => setSearchPage(e.target.value)} placeholder='1/149'/>
        <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder='Procure um personagem' />

      </div>

      <div className={s.wrapCards}>
        {data.map((item, index) =>{
        return(
          <div key={index}>
          <Card image={item.imageUrl} name={item.name} films={item.films}/>


      </div>

        )

      })}
        
    </div>

    </main>
    </>
  )
}

export default App
