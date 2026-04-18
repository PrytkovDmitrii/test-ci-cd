import { useState } from "react"

export const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div style={{ marginTop: "20px" }}>
      бебебе орешки
      <br />
      Счетчик гусей: {counter}
      <br />
      <button onClick={() => setCounter(prev => prev+1)} style={{ width: "200px" }}>
        добавить гусьностей +
      </button>
    </div>
  )
}