import { Global, css } from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global styles = {css`

        body {
            margin: 0;
            padding: 0;
            background-color: white;
            /* color: white; */
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

    `} />
  )
}

export default GlobalStyles