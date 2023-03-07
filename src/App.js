// import { Route, Routes, Link,useRoutes, NavLink } from 'react-router-dom'
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import BookList from './Pages/BookList';
import Books from './Pages/Books';
import NewBook from './Pages/NewBook';
import NotFound from './Pages/NotFound';
import BookLayout from './Pages/BookLayout';

function App() {

  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />
  //   }
  // ])

  return (<>
  <nav>
    <ul>
      <li><NavLink style={({ isActive }) => { return isActive ? {color : "red"} : {} }} to="/">Home</NavLink></li>
      <li><NavLink to="/books">Books</NavLink></li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element ={<Home/>}/>
    {/* <Route path="/*" element ={<BookRoutes/>}/> */}
    <Route path="/books" element ={<BookLayout/>}>
      <Route index element ={<BookList/>}/>
      <Route path=":id" element ={<Books/>}/>
      <Route path="new" element ={<NewBook/>}/>
    </Route>
    
    <Route path="*" element ={<NotFound/>}/>
  </Routes>
  </>);
}

export default App;
/* <Route path="/books" element ={<BookList/>}/>
    <Route path="/books/:id" element ={<Books/>}/>
    <Route path="/books/new" element ={<NewBook/>}/> */