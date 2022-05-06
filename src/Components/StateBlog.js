import React from 'react'
import { Link } from "react-router-dom";
import SyntaxHighLighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import Textbox from '../Library/Textbox'
import Button from '../Library/Button'

const StateBlog = () => {

  const exampleText = 'this is some example text about useState'

  const markdown = `A paragraph with *emphasis* and **strong importance**.`

  return (
    <div className="stateblog-container">
      <div>
        <h1>useState</h1>
        <Button text={'Home'} path={'/'} />
      </div>
      <div className="stateblog-body">
        {/* <Textbox text={exampleText} /> */}
        <SyntaxHighLighter language="javascript" style={dracula}>
          {
            "const func = () => {} {\n render() {\n return ( \n <div>\nHello {this.props.name}\n</div>\n);\n }\n}\n\nReactDOM.render(\n<HelloMessage name='Taylor' />,\ndocument.getElementById('hello-example')\n);"
          }
        </SyntaxHighLighter>
      </div>
    </div>
  )
}

export default StateBlog
