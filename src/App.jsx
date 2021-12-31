import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { MyRoutes } from "./routes"
import {store} from "./store"
import { GlobalStyle } from "./styles/global"
import { theme } from "./styles/theme"

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
      <MyRoutes />
      <GlobalStyle/>
      </ThemeProvider>
    </Provider>
  )
}

export default App
