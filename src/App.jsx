import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer.jsx'
import WatchPage from './components/WatchPage.jsx'

const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body/> ,         // if path is / then body render
    children:[  // {/ route k bad children wha jaenge jha mera outlet le jaega}
        {
          path:"/",
          element:  <MainContainer/>
        },{
          path:"/watch",
          element: <WatchPage/>
        }                     
    ]
  }])

const App = () => {
  return (
    
    <Provider store={appStore}>
    <div className=' h-screen w-full overflow-x-hidden overflow-y-hidden'>
     <RouterProvider router={appRouter}/>  {/* Navbar k niche pure apps ko route milenge, puri body yha pe render hogi */}
     {/* Bcz approuter k andr body render hori h and Router provider uske age k routes dera h */}

      {/* 
      Navbar
      Body
        Sidebar
          Menu Item
        MainContainer
          ButtonList
          VideoContainer
            VideoCard
      */}
    </div>
    </Provider>
  )
}

export default App