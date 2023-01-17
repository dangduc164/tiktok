
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Home from './pages/Home';
// import Members from './pages/Members';
import {publicRoutes} from './routes'
import {DefaultLayout} from './components/Layout'

function App() {
  return (
  <Router>
    
          <Routes>
            {publicRoutes.map((route, index) => {
                const Layout = route.Layout || DefaultLayout;
                const Page = route.component
                return (
                  <Route 
                    key={index} 
                    path={route.path} 
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    } 
                  />
                  )
            })} 
              {/* <Route path='/' element={<Home />}/>
              <Route path='/' element={<Members />}/> */}
          </Routes>
      
  </Router>
  );
}

export default App;
