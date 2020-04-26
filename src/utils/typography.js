import Typography from "typography"
import GitHubTheme from "typography-theme-github"

GitHubTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      fontFamily: `Fira Mono,monospace;`,
    },
    "a": {
      color: `#ffc600`,
      // backgroundColor: `#193549`,
      weight: 700,
      // padding: `0 4px`
    },
    "body": {
      backgroundColor: `#0D3A58`,
      color: `white`
    }
  }
}

delete GitHubTheme.googleFonts

const typography = new Typography(GitHubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
