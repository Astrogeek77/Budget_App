//  helper functions
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  waait,
} from '../../helpers'

// loader
export default function dashboardLoader() {
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  const expenses = fetchData('expenses')
  return { userName, budgets, expenses }
}
