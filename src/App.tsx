import { NavLink, Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Card, { CardVariant } from "./components/Card"
import EventExamples from "./components/EventExamples"
import TodoItemPage from "./components/TodoItemPage"
import TodosPage from "./components/TodosPage"
import UserItemPage from "./components/UserItemPage"
import UserPage from "./components/UserPage"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
          <Route path={"/todos/:id"} element={<TodoItemPage />} />
        </Routes>

        {/* <EventExamples />
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.primary}
        height="200px"
        width="200px"
      >
        <button>Кнопка</button>
      </Card> */}
      </div>
    </BrowserRouter>
  )
}

export default App
