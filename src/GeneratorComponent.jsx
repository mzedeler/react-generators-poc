import { gen } from './gen'

export const GeneratorComponent = gen(async function *inner(props) {

  yield <h1>Does this work?</h1>

  await new Promise(r => setTimeout(r, 1000))

  yield <h1>It seems so</h1>

})
