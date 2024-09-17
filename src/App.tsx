import { Header, PageBlock } from "./components"
import { HeroMain, About } from "./sections"

export const App = () => {
  return (
    <div className="app-wrapper">
      <PageBlock className="site-header" tagName="header">
        <Header/>
      </PageBlock>
      <main>
        <HeroMain />
        <About />
      </main>
    </div>
  )
}
