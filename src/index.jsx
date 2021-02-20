import React from 'react'
import ReactDOM from 'react-dom'

// import Calc from './Calc'
import ChangeColors from './ChangeColors/ChangeColors'

import "./main.css"

ReactDOM.render(
  <React.StrictMode>
    {/* <Calc /> */}     {/* import qilingan fayli natijasini COMPONENT qilib yozamiz */}
    <ChangeColors />
  </React.StrictMode>,
  document.getElementById('root')   // 'index.html'ning 'body'sidagi 'root' 'id'li 'div'ga 'appendChild' qilib beradi, ya'ni RENDER qilib beradi.
)
