import type { Theme } from "@planningcenter/tapestry-react"

const theme: Theme = {
  id: "home",
  fontSizes: [25, 21, 18, 16, 14, 12, 10],
  boxSizes: {
    xs: {
      boxSize: 2.5,
      fontSize: 5,
      lineHeight: 2.5,
      paddingHorizontalDense: 0.5,
      paddingHorizontal: "6px",
      paddingVertical: 0,
      radius: 2.5,
    },
    sm: {
      boxSize: 3,
      fontSize: 4,
      lineHeight: 3,
      paddingHorizontalDense: 0.5,
      paddingHorizontal: 1,
      paddingVertical: 0,
      radius: 3,
    },
    md: {
      boxSize: 4,
      fontSize: 3,
      lineHeight: 4,
      paddingHorizontalDense: 1,
      paddingHorizontal: "12px",
      paddingVertical: 0,
      radius: 4,
    },
    lg: {
      boxSize: 5,
      fontSize: 3,
      lineHeight: 5,
      paddingHorizontalDense: 1,
      paddingHorizontal: "14px",
      paddingVertical: 0,
      radius: 5,
    },
    xl: {
      boxSize: 6,
      fontSize: 3,
      lineHeight: 6,
      paddingHorizontalDense: 2,
      paddingHorizontal: "18px",
      paddingVertical: 0,
      radius: 6,
    },
  },
  tabNav: {
    width: "auto",
    paddingHorizontal: 0,
    borderBottom: "none",
    overflow: "visible",
    mediaQueries: {
      sm: { flex: "none" },
    },
    tab: {
      fontWeight: 600,
      // @ts-expect-error TS support needed for 'mediaQueries' in Tapestry React theme
      mediaQueries: {
        sm: { fontWeight: 400 },
      },
    },
  },
}

export default theme
