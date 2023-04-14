// action
export default async function expensesAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      })
      return toast.success('Expense deleted!')
    } catch (e) {
      console.log(e.message)
      throw new Error('There was a problem deleting your expense.')
    }
  }
}
