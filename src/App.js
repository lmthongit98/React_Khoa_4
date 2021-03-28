import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import Header from './components/home/header/Header'
import About from './pages/about/About'
import BaiTapToDoListSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga'
import Contact from './pages/contact/Contact'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Profile from './pages/profile/Profile'
import ToDoListRCC from './pages/todolist/TodolistRCC'
import ToDoListRedux from './pages/todolist/ToDoListRedux'
import ToDoListRFC from './pages/todolist/ToDoListRFC'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <LoadingComponent/>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/todolistrfc' component={ToDoListRFC} />
        <Route exact path='/todolistrcc' component={ToDoListRCC} />
        <Route exact path='/todolistredux' component={ToDoListRedux} />
        <Route exact path='/todolistsaga' component={BaiTapToDoListSaga} />
        <Route exact path='/' component={BaiTapToDoListSaga} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
