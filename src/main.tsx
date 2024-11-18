import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@planningcenter/tapestry-react"
import theme from "./theme"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)