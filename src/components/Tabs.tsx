import { useRef } from "react"
import {
  Button,
  StackView,
  TabNav,
  Dropdown,
  Box,
  Icon,
  Text,
} from "@planningcenter/tapestry-react"
import { useTabsOverflow } from "../hooks/use_tabs_overflow"
import { useDashboards } from "../utils/dashboards_context"

export function Tabs() {
  const overflowContainer = useRef<HTMLDivElement>(null)
  const { dashboards, addDashboard, selectedDashboardId, selectDashboard } =
    useDashboards()

  const { overflowTabsCount } = useTabsOverflow({
    containerRef: overflowContainer,
    tabs: dashboards,
  })

  const visibleTabs = dashboards.slice(0, dashboards.length - overflowTabsCount)
  const hiddenTabs = dashboards.slice(dashboards.length - overflowTabsCount)

  return (
    <StackView>
      <StackView
        height="0"
        overflow="hidden"
        visibility="hidden"
        userSelect="none"
        tabIndex={-1}
      >
        <div
          ref={overflowContainer}
          style={{
            overflow: "hidden",
            maxWidth: "82%",
          }}
        >
          <TabNav tabs={dashboards} />
        </div>
      </StackView>

      <StackView paddingTop={4} backgroundColor="hsl(221, 91%, 62%)">
        <StackView axis="horizontal" spacing={1}>
          <TabNav
            tabs={visibleTabs.map((tab) => ({
              ...tab,
              isSelected: tab.id === selectedDashboardId,
              onClick: () => selectDashboard(tab.id),
            }))}
          />
          {hiddenTabs.length !== 0 && (
            <Dropdown
              triggerElement={
                <Box
                  paddingHorizontal={2}
                  paddingVertical={1.25}
                  css={{
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  }}
                >
                  <StackView axis="horizontal" spacing={0.5} alignment="center">
                    <Text size={4}>+{hiddenTabs.length} more</Text>
                    <Icon name="general.downCaret" marginTop={0.25} />
                  </StackView>
                </Box>
              }
              placement="bottom-end"
            >
              {hiddenTabs.map((tab) => (
                <Dropdown.Item
                  key={tab.id}
                  onClick={() => selectDashboard(tab.id)}
                >
                  {tab.label}
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={addDashboard}>
                Add dashboard
              </Dropdown.Item>
            </Dropdown>
          )}
          <Button
            icon={{ name: "general.plus", color: "#fff", size: "sm" }}
            onClick={addDashboard}
            tooltip={{ title: "Add a dashboard", placement: "top" }}
            paddingHorizontal={2}
            paddingVertical={1.75}
            css={{
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "hsl(221, 90%, 45%)",
              "&:hover": {
                backgroundColor: "hsl(221, 90%, 50%)",
              },
            }}
          />
        </StackView>
      </StackView>
    </StackView>
  )
}
