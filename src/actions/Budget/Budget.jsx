// helpers
import { createExpense, deleteItem, getAllMatchingItems } from '../../helpers'

// action
export default async function budgetAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })
      return toast.success(`Expense ${values.newExpense} created!`)
    } catch (e) {
      console.log(e.message)
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
