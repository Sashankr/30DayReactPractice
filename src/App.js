import React from "react"
import Message from "./Message"
import UseState from "./UseState"
import SimpleForm from "./SimpleForm"
import Greeting from "./Greeting"
import List from "./List"
import "./index.css"

const data = [
  { name: "Sashank", role: "developer", exp: 2 },
  { name: "joe", role: "developer", exp: 1 },
]

const App = () => {
  const handleClick = () => {
    alert("Hello there")
  }

  return (
    <>
      <h1>Basics</h1>
      <Message />
      <h3>Developers</h3>
      {data.map((el) => {
        return el.exp > 1 ? (
          <div>
            <h1>Expirienced</h1>
            <p>
              {el.name} is available with {el.exp} years of exp
            </p>
          </div>
        ) : (
          <div>
            <h1>Inexperienced</h1>
            <p>{el.name} has a year of experience</p>
          </div>
        )
      })}

      <div className="separator"></div>
      <h2>Onclick Events</h2>
      <button onClick={handleClick}>Show alert</button>

      <div className="separator"></div>

      <UseState />
      <div className="separator"></div>
      <SimpleForm />
      <div className="separator"></div>
      <Greeting name="Sashank">
        <p>This is the children props</p>
      </Greeting>
      <Greeting name="Joe" />
      <div className="separator"></div>
      <List />
    </>
  )
}

export default App
