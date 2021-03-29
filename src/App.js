import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import Header from './components/home/header/Header'
import Modal from './HOC/Modal/Modal'
import About from './pages/about/About'
import BaiTapToDoListSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga'
import Contact from './pages/contact/Contact'
import DemoHOCModal from './pages/DemoHOCModal/DemoHOCModal'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Profile from './pages/profile/Profile'
import ToDoListRCC from './pages/todolist/TodolistRCC'
import ToDoListRedux from './pages/todolist/ToDoListRedux'
import ToDoListRFC from './pages/todolist/ToDoListRFC'
import { HomeTemplate } from './templates/HomeTemplate/HomeTeamplate'
function App() {
  return (
    <BrowserRouter>
      <Modal/>
      <Switch>

        {/* <Route exact path='/home' render={(propsRoute) => {
          return <div>
            <Header/>
            <Home {...propsRoute} />
          </div>
        }} /> */}

        <HomeTemplate exact path="/home" Component = {Home} />
        <HomeTemplate exact path='/about' Component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/todolistrfc' component={ToDoListRFC} />
        <Route exact path='/todolistrcc' component={ToDoListRCC} />
        <Route exact path='/todolistredux' component={ToDoListRedux} />
        <Route exact path='/todolistsaga' component={BaiTapToDoListSaga} />
        <Route exact path='/demohocmodal' component={DemoHOCModal} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
