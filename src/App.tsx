import { Header, Footer, PageBlock } from "./components"
import { HeroMain, About, Steps, Projects, Form } from "./sections"

export const App = () => {
  return (
    <div className="app-wrapper">
      <PageBlock className="site-header" tagName="header">
        <Header/>
      </PageBlock>
      <main>
        <HeroMain />
        <About />
        <Steps />
        <Projects />
        <Form />
      </main>
      <PageBlock className="site-footer" tagName="footer">
        <Footer/>
      </PageBlock>
    </div>
  )
}
