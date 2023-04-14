import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  waait,
} from '../../helpers'

// action
export default async function dashboardAction({ request }) {
  await waait()

  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  // new user submission
  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName))
      return toast.success(`Welcome, ${values.userName}`)
    } catch (e) {
      throw new Error('There was a problem creating your account.')
    }
  }

  if (_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })
      return toast.success('Budget created!')
    } catch (e) {
      throw new Error('There was a problem creating your budget.')
    }
  }

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })
      return toast.success(`Expense ${values.newExpense} created!`)
    } catch (e) {
      throw new Error('There was a problem creating your expense.')
    }
  }

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      })
      return toast.success('Expense deleted!')
    } catch (e) {
      throw new Error('There was a problem deleting your expense.')
    }
  }
}
