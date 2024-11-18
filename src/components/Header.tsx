import { StackView, Input, Heading } from "@planningcenter/tapestry-react"
import { useDashboards } from "../utils/dashboards_context"

export function Header() {
  const { dashboards, selectedDashboardId, renameDashboard } = useDashboards()

  const selectedDashboard = dashboards.find(
    (dashboard) => dashboard.id === selectedDashboardId
  )

  if (!selectedDashboard) return null

  const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    renameDashboard(selectedDashboard.id, e.target.value)
  }

  return (
    <StackView
      width="100%"
      backgroundColor="#f2f2f2"
      padding={2}
      distribution="start"
      alignment="start"
      axis="horizontal"
      spacing={0.5}
      css={{ border: "1px solid #dadada", borderRadius: 4 }}
    >
      {selectedDashboard.label === "My Dashboard" ? (
        <Heading size={3} level={1}>
          My Dashboard
        </Heading>
      ) : (
        <Input
          type="text"
          value={selectedDashboard.label}
          onChange={handleRename}
        />
      )}
    </StackView>
  )
}
