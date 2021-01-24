import React, { useState } from "react"

function UseState() {
  const [counter, setCounter] = useState(0)

  const counterHandle = () => {
    setCounter(counter + 1)
    if (counter === 10) {
      setCounter(0)
    }
  }

  return (
    <div>
      <section className="useState">
        <h2>useState Hook</h2>
        <p>It preserves the value of a variable between function calls</p>
        <h4>Counter App</h4>
        <button onClick={counterHandle}>Increase Count</button>
        <span
          style={{
            backgroundColor: "teal",
            marginLeft: "20px",
            padding: "10px 20px",
            color: "#fff",
          }}
        >
          {counter}
        </span>
      </section>
    </div>
  )
}

export default UseState
