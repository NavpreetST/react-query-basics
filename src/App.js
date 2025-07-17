
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Menu } from './pages/menu';
import { Error } from './error';
import { Navbar } from './pages/navbar';
import { States } from './pages/stateManagement';
import { ChangeProfile } from './pages/ChangeProfile';
import {QueryClient, QueryClientProvider} from "@tankstack/react-query";
function App() {
  const client = new QueryClient() ;
  return (
    <div className="App">
      <QueryClientProvider client = {client}>

      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/menu" element = {<Menu />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/states" element = {<States />} />
          <Route path = "/changeProfile" element= {<ChangeProfile />} />
          <Route path = "*" element = { <Error />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
