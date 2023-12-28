import { gen } from './gen'

const getSetter = () => {
  let resolve
  const promise = new Promise(r => {
    resolve = r
  })

  const callback = e => resolve(e.target.value)

  return [callback, promise]
}

export const GeneratorInput = gen(async function *inner(props) {
  let value = ''
  while (value !== 'hello') {
    const [cb, promise] = getSetter()
    yield <input onChange={cb} value={value} />
    value = await promise
  }
})
