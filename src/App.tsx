import { Header, PageBlock } from "./components"

export const App = () => {
  return (
    <div className="app-wrapper">
      <PageBlock className="site-header" tagName="header">
        <Header/>
      </PageBlock>

      <main>
      </main>
    </div>
  )
}
