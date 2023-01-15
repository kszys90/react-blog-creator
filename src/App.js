import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Intro } from "./pages/Intro";
import { Categories } from "./pages/Categories";
import { Article } from './pages/Article'
import ArticlePages from './components/ArticlePages'
import { Error } from "./pages/Error";
import data from './data.json'
import { CategoriesList } from "./pages/CategoriesList"



function App() {
  const backgroundDivStyle = {
    fontStyle: 'fantasy',
    maxWidth: '800px',
    minHeight: '98vh',
    borderRadius: '0px',
    background: '#e0e0e0',
    boxShadow: `4px 4px 4px #d5d5d5,
           -4px -4px 4px #ebebeb`,
    margin: '0 auto 0 auto',
    position: 'relative'
  }
  const { posts } = data

  return (
    <div style={backgroundDivStyle}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Navigate replace to='/home/1' />} />
        <Route path="/home" element={<Home />}>
          <Route path={":currentPage"} element={<ArticlePages posts={posts} />} />
        </Route>
        <Route path={":currentArticle"} element={<Article />} />
        <Route path="/categories" element={<Categories posts={posts} />}>
          <Route path={":currentCategory"} element={<CategoriesList />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to='/404' />} />
      </Routes>
    </div >
  )
}

export default App
