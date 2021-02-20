import { useState } from "react"

import "./ChangeColors.css"

function ChangeColors() {

  const [value, setValue] = useState(false)

  const changeColors = () => setValue(!value)

  const changeHeader = () => {

    let header = ""

    if (value) {
      header = "dark"
    }

    return header
  }

  const changeMain = () => {

    let main = ""

    if (value) {
      main = "dark"
    }

    return main
  }

  const changeFooter = () => {

    let footer = ""

    if (value) {
      footer = "dark"
    }

    return footer
  }

  const appHtml = (
    <>
      <header className={`header ${changeHeader()}`}>
      </header>

      <main className={`main ${changeMain()}`}>
        <button className="button" onClick={changeColors}>Click often!!!</button>
      </main>

      <footer className={`footer ${changeFooter()}`}>
      </footer>
    </>
  )

  return appHtml
}

export default ChangeColors