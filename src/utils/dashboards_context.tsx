import { createContext, useContext, useState, ReactNode } from "react"
import type { Dashboard } from "./types"

interface DashboardsContextValue {
  dashboards: Dashboard[]
  addDashboard: () => void
  renameDashboard: (id: string, newLabel: string) => void
  selectedDashboardId: string
  selectDashboard: (id: string) => void
}

const DashboardsContext = createContext<DashboardsContextValue | undefined>(
  undefined
)

const initialDashboards = [
  { label: "My Dashboard", id: "1" },
  { label: "Another Dashboard", id: "2" },
  { label: "Some Cool Stuff", id: "3" },
  { label: "Josh's Widgets", id: "4" },
  { label: "Groups", id: "5" },
  { label: "Church Attendance", id: "6" },
]

export const DashboardsProvider = ({ children }: { children: ReactNode }) => {
  const [dashboards, setDashboards] = useState<Dashboard[]>(initialDashboards)

  const [selectedDashboardId, setSelectedDashboardId] = useState<string>("1")

  const addDashboard = () => {
    const newId = (dashboards.length + 1).toString()
    const newDashboard = { id: newId, label: `New Dashboard ${newId}` }
    setDashboards((prev) => [...prev, newDashboard])
    setSelectedDashboardId(newId)
  }

  const renameDashboard = (id: string, newLabel: string) => {
    setDashboards((prev) =>
      prev.map((dashboard) =>
        dashboard.id === id ? { ...dashboard, label: newLabel } : dashboard
      )
    )
  }

  const selectDashboard = (id: string) => {
    setSelectedDashboardId(id)
  }

  return (
    <DashboardsContext.Provider
      value={{
        dashboards,
        addDashboard,
        renameDashboard,
        selectedDashboardId,
        selectDashboard,
      }}
    >
      {children}
    </DashboardsContext.Provider>
  )
}

export const useDashboards = () => {
  const context = useContext(DashboardsContext)
  if (!context) {
    throw new Error("useDashboards must be used within a DashboardsProvider")
  }
  return context
}
