import React from "react"
import Message from "./Message"

const data = [
  { name: "Sashank", role: "developer", exp: 2 },
  { name: "joe", role: "developer", exp: 1 },
]

const App = () => {
  return (
    <>
      <h1>Hello World!!!!</h1>
      <Message />
      <h3>Experienced developer</h3>
      {data.map((el) => {
        return el.exp > 1 ? (
          <div>
            <h2>{el.name} is available</h2>
          </div>
        ) : (
          <div>No experienced dev available</div>
        )
      })}
    </>
  )
}

export default App
