import { gen } from './gen'
import { genState } from './genState'

export const GeneratorInput2 = gen(async function *inner(props) {
  let [value$, setValue] = genState('')

  const handleChange = e => setValue(e.target.value)

  for await (const value of value$) {
    yield <input onChange={handleChange} value={value} />
    if (value === 'hello') {
      break
    }
  }

  yield <input value="hello" disabled />
})
