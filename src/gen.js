import { useState, useEffect } from 'react'

export const gen = genComponent => props => {
  const [elements, setElements] = useState()

  useEffect(() => async () => {
    for await (const elements of genComponent(props)) {
      setElements(elements)
    }
  }, [setElements, props])
  console.log(elements)
  return elements
}
