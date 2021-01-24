import React, { useState } from "react"

function SimpleForm() {
  const [name, setName] = useState("User")
  const [password, setPassword] = useState("default")

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const submitForm = () => {
    console.log(name, password)
  }

  return (
    <div>
      <input type="text" value={name} onChange={changeName} />
      <input type="password" value={password} onChange={changePassword} />
      <button type="submit" onClick={submitForm}>
        Submit
      </button>
      {name === "admin" && password === "admin" && (
        <div>
          <h2>Hello Admin</h2>
        </div>
      )}

      {name !== "admin" && password !== "admin" && (
        <div>
          <h2>Hello {name}</h2>
        </div>
      )}

      {name === "" && password === "" && (
        <div>
          <h2>Who are you?</h2>
        </div>
      )}
    </div>
  )
}

export default SimpleForm
