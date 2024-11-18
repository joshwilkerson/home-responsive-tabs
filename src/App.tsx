import { useState } from "react"
import {
  StackView,
  Heading,
  Button,
  Text,
} from "@planningcenter/tapestry-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <StackView
      marginHorizontal="auto"
      marginVertical={4}
      padding={4}
      maxWidth="600px"
      alignment="center"
      spacing={2}
      backgroundColor="grey-1"
    >
      <Heading>Vite + React</Heading>

      <Button onClick={() => setCount((count) => count + 1)} theme="primary">
        count is {count}
      </Button>
      <Text>
        Edit <code>src/App.tsx</code> and save to test HMR
      </Text>
    </StackView>
  )
}

export default App
