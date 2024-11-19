import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import VotingApp from './components/VotingApp/VotingApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VotingApp />
  </StrictMode>,
)
