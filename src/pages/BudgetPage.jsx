// rrd imports
import { useLoaderData } from 'react-router-dom'

// library
import { toast } from 'react-toastify'

// components
import AddExpenseForm from '../components/Forms/AddExpenseForm'
;``
import BudgetItem from '../components/Items/BudgetItem'
import Table from '../components/Display-Data/Table'

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData()

  return (
    <div
      className="grid-lg"
      style={{
        '--accent': budget.color,
      }}
    >
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  )
}
export default BudgetPage
