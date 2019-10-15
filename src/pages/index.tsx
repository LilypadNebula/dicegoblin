import React, { useState } from "react"
import roller from "../helpers/random"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [sides, setSides] = useState(20)
  const [count, setCount] = useState(1)
  const [res, setRes] = useState<number[]>([])

  const rollIt = () => {
    const dieArray = roller(sides, count)
    setRes(dieArray)
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
      {res.length > 0 ? (
        <div>
          <h1>Results</h1>
          <h2>{res.join(", ")}</h2>
        </div>
      ) : null}
    </Layout>
  )
}

export default IndexPage
