import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@planningcenter/tapestry-react"
import theme from "./theme"
import { Wrapper } from "./components/Wrapper"
import { Tabs } from "./components/Tabs"
import { Header } from "./components/Header"
import { DashboardsProvider } from "./utils/dashboards_context"
import "./index.css"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardsProvider>
        <Wrapper>
          <Tabs />
          <Header />
        </Wrapper>
      </DashboardsProvider>
    </ThemeProvider>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
