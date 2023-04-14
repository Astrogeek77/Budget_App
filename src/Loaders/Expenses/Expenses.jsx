// loader
export default async function expensesLoader() {
  const expenses = fetchData('expenses')
  return { expenses }
}
