import { StackView } from "@planningcenter/tapestry-react"

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <StackView marginHorizontal="auto" maxWidth="1000px" spacing={2}>
      {children}
    </StackView>
  )
}
