import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Library
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Layouts
import Main, { mainLoader } from './layouts/Main'

// Actions
import { logoutAction } from './actions/logout'
import { deleteBudget } from './actions/Budget/deleteBudget'

// Routes
import Dashboard from './pages/Dashboard'
import dashboardLoader from './Loaders/Dashboard/Dashboard'
import dashboardAction from './actions/Dashboard/Dashboard'

import Error from './pages/Error'

import BudgetPage from './pages/BudgetPage'
import budgetLoader from './Loaders/Budget/Budget'
import budgetAction from './actions/Budget/Budget'

import ExpensesPage from './pages/ExpensesPage'
import expensesLoader from './Loaders/Expenses/Expenses'
import expensesAction from './actions/Expenses/Expenses'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: 'delete',
            action: deleteBudget,
          },
        ],
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
