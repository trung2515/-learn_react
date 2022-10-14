

  import { HeaderOnly } from '../components/Layout/index.js'
  import Following from '../Pages/Following/index.js'
  import Home from '../Pages/Home/index.js'
  import Upload from '../Pages/Upload/index.js'
  import Search from '../Pages/Search/index.js'
const publicRoutes =  [
    { path:'', component:Home},
    { path:'/following', component:Following},
    { path:'/upload', component:Upload , layout:HeaderOnly},
    { path:'/search', component:Search , layout : null}
]

const privateRoutes = [

]
 
export { privateRoutes , publicRoutes}