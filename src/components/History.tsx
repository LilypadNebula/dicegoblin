import React from "react"
import { HistoryItem } from "../types"

const History = ({ history }: { history: HistoryItem[] }) => {
  return (
    <>
      <h2>Roll History</h2>
      {history.map((roll: HistoryItem, index: number) => (
        <h4 key={index}>
          {roll.rolls.map((r, rollIndex) => {
            let color = "black"
            if (r === 1) color = "red"
            if (r === roll.sides) color = "green"
            return (
              <span
                key={`roll-result-${index}-${rollIndex}`}
                style={{ color, marginLeft: "5px", marginRight: "5px" }}
              >
                {`${r}`}
              </span>
            )
          })}
        </h4>
      ))}
    </>
  )
}

export default History
