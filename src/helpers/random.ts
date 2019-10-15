import { MersenneTwister19937, dice } from "random-js"

const rand = MersenneTwister19937.autoSeed()

const roller = (sides: number, count: number) => {
  const result = dice(sides, count)(rand)
  return result
}

export default roller
