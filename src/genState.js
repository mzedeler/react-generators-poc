export const genState = (initialValue) => {
  let nextResolve
  const setValue = value => nextResolve(value)
  const iterator = (async function* gen() {
    yield initialValue
    while (true) {
      const promise = new Promise(r => { nextResolve = r })
      yield await promise
    }
  })()

  return [iterator, setValue]
}
