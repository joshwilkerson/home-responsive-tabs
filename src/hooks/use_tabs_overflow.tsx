import { useState, useLayoutEffect, RefObject, useCallback } from "react"
import type { Tab } from "../utils/types"

interface UseTabsOverflowArgs {
  containerRef: RefObject<HTMLDivElement>
  tabs: Tab[]
}

export function useTabsOverflow({ containerRef, tabs }: UseTabsOverflowArgs): {
  overflowTabsCount: number
} {
  const [overflowTabsCount, setOverflowTabsCount] = useState<number>(0)

  const calculateOverflowCount = useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const tabElements = Array.from(
      container.querySelectorAll('[role="tab"]')
    ) as HTMLElement[]

    if (tabElements.length === 0) {
      setOverflowTabsCount(0)
      return
    }

    let overflowCount = 0

    for (let i = 0; i < tabElements.length; i++) {
      const tabRect = tabElements[i].getBoundingClientRect()

      if (
        tabRect.left < containerRect.left ||
        tabRect.right > containerRect.right
      ) {
        overflowCount = tabElements.length - i
        break
      }
    }

    setOverflowTabsCount(overflowCount)
  }, [containerRef, tabs])

  useLayoutEffect(() => {
    calculateOverflowCount()

    const resizeObserver = new ResizeObserver(calculateOverflowCount)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    const tabElements = Array.from(
      containerRef.current?.querySelectorAll('[role="tab"]') || []
    )
    tabElements.forEach((tab) => resizeObserver.observe(tab))

    return () => {
      resizeObserver.disconnect()
    }
  }, [calculateOverflowCount])

  return { overflowTabsCount }
}
