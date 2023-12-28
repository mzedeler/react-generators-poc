import { useState, useEffect } from 'react'

export const gen = genComponent => props => {
  const [elements, setElements] = useState()

  useEffect(() => {
    const worker = async () => {
      for await (const elements of genComponent(props)) {
        setElements(elements)
      }
    }
    worker()
  }, [setElements, props])

  console.log('render')
  return elements
}
