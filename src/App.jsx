
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import ListArticle from "./Components/articles/ListArticle"
import InsertArticle from "./Components/articles/InsertArticle"
import EditArticle from "./Components/articles/EditArticle"
import ViewArticle from "./Components/articles/ViewArticle"
import ListCategorie from "./Components/categories/ListCategorie"
import InsertCategorie from "./Components/categories/InsertCategorie"
import EditCategorie from "./Components/categories/EditCategorie"
import ViewCategorie from "./Components/categories/ViewCategorie"
import ListScategorie from "./Components/scategories/ListScategorie"
import InsertScategorie from "./Components/scategories/InsertScategorie"
import EditScategorie from "./Components/scategories/EditScategorie"
import ViewScategorie from "./Components/scategories/ViewScategorie"
import Menu from "./Components/Menu"
function App() {

  return (
    <>
  <Router>
  <Menu/>

    <Routes>
      <Route path="/articles" element={<ListArticle/>}/>
      <Route path="/articles/add" element={<InsertArticle/>}/>
      <Route path="/articles/edit/:id" element={<EditArticle/>}/>
      <Route path="/articles/show/:id" element={<ViewArticle/>}/>

      <Route path="/categories" element={<ListCategorie/>}/>
      <Route path="/categories/add" element={<InsertCategorie/>}/>
      <Route path="/categories/edit/:id" element={<EditCategorie/>}/>
      <Route path="/categories/show/:id" element={<ViewCategorie/>}/>

      <Route path="/scategories" element={<ListScategorie/>}/>
      <Route path="/scategories/add" element={<InsertScategorie/>}/>
      <Route path="/scategories/edit/:id" element={<EditScategorie/>}/>
      <Route path="/scategories/show/:id" element={<ViewScategorie/>}/>
    </Routes>
  </Router>

    </>
  )
}

export default App
