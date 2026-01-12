import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import PostDataProvider from './context/PostDataContext.jsx'
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(

    <ThemeContext>
          <App />
    </ThemeContext>
)
