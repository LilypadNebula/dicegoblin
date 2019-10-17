import React, { useState } from "react"
import roller from "../helpers/random"
import Layout from "../components/layout"
import SEO from "../components/seo"
import History from "../components/History"
import { HistoryItem } from "../types"

const IndexPage = () => {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [sides, setSides] = useState(20)
  const [count, setCount] = useState(1)

  const rollIt = () => {
    const dieArray = roller(sides, count)
    setHistory(history.concat({ sides, rolls: dieArray }))
  }
  return (
    <Layout>
      <SEO title="Home" />
      <p>
        <span>
          Sides:{" "}
          <input
            type="number"
            value={sides}
            onChange={e => setSides(parseInt(e.target.value))}
          />
        </span>
      </p>
      <p>
        <span>
          Count:{" "}
          <input
            type="number"
            value={count}
            onChange={e => setCount(parseInt(e.target.value))}
          />
        </span>
      </p>
      <button onClick={rollIt}>Roll It!</button>
      <History history={history} />
    </Layout>
  )
}

export default IndexPage
