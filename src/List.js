import React from "react"

function List() {
  const data = [
    {
      name: "Joe",
      role: "Developer",
    },
    {
      name: "Ann",
      role: "Designer",
    },
  ]
  return (
    <div>
      <h1>Roles and Responsibilities</h1>
      {data.map((el, index) => {
        return (
          <div key={index}>
            <h1>{el.name}</h1>
            <p>{el.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List
