import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

const Rotas: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
)
export default Rotas