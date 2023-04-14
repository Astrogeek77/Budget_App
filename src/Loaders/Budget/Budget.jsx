// helpers
import { createExpense, deleteItem, getAllMatchingItems } from '../../helpers'

// loader
export default async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: params.id,
  })[0]

  const expenses = await getAllMatchingItems({
    category: 'expenses',
    key: 'budgetId',
    value: params.id,
  })

  if (!budget) {
    throw new Error('The budget you’re trying to find doesn’t exist')
  }

  return { budget, expenses }
}
