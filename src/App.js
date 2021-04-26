import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import Header from './components/home/header/Header'
import Modal from './HOC/Modal/Modal'
import About from './pages/about/About'
import BaiTapToDoListSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga'
import Contact from './pages/contact/Contact'
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs'
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
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate'
import React from 'react'
import { CyberBugsTemplate } from './templates/HomeTemplate/CyberBugsTemplate'
import IndexCyberBugs from './redux/sagas/cyberbugs/IndexCyberBugs'
import CreateProject from './pages/CyberBugs/CreateProject/CreateProject'
import ProjectManagement from './pages/CyberBugs/ProjectManagement/ProjectManagement'
import DrawerCyberBugs from './HOC/CyberBugsHOC/DrawerCyberBugs'


function App() {

  return (
    <>
      {/* <Modal/> */}
      <DrawerCyberBugs/>
      <Switch>

        {/* <Route exact path='/home' render={(propsRoute) => {
          return <div>
            <Header/>
            <Home {...propsRoute} />
          </div>
        }} /> */}

        <HomeTemplate exact path="/home" Component = {Home} />
        <HomeTemplate exact path='/about' Component={About} />
        <UserLoginTemplate exact path='/login' Component={LoginCyberBugs}/>
        <HomeTemplate exact path='/contact' Component={Contact} />
        <UserLoginTemplate exact path='/login' Component={Login} />
        <HomeTemplate exact path='/detail/:id' Component={Detail} />
        <HomeTemplate exact path='/profile' Component={Profile} />
        <HomeTemplate exact path='/todolistrfc' Component={ToDoListRFC} />
        <HomeTemplate exact path='/todolistrcc' Component={ToDoListRCC} />
        <HomeTemplate exact path='/todolistredux' Component={ToDoListRedux} />
        <HomeTemplate exact path='/todolistsaga' Component={BaiTapToDoListSaga} />
        <HomeTemplate exact path='/demohocmodal' Component={DemoHOCModal} />
        <CyberBugsTemplate exact path='/cyberbugs' Component={IndexCyberBugs}/>
        <CyberBugsTemplate exact path='/createproject' Component={CreateProject} />
        <CyberBugsTemplate exact path='/projectmanagement' Component={ProjectManagement} />
        <CyberBugsTemplate exact path='/projectdetail/:projectId' Component={IndexCyberBugs} />
        <CyberBugsTemplate exact path='/' Component={ProjectManagement} />
        <HomeTemplate exact path='*' component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
