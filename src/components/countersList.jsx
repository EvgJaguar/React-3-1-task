import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ]

  const [counters, setCounters] = useState(initialState)
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id)
    setCounters(newCounters)
  }
  const handleReset = () => {
    setCounters(initialState)
    console.log('handle reset')
  }
  const handleIncrement = (id, value) => {
    console.log('handle increment', id, value)
    setCounters(
      counters.map((elem) =>
        elem.id === id ? { ...elem, value: elem.value + 1 } : { ...elem }
      )
    )
  }
  const handleDecrement = (id, value) => {
    console.log('handle decrement', id, value)
    setCounters(
      counters.map((elem) =>
        elem.id === id ? { ...elem, value: elem.value - 1 } : { ...elem }
      )
    )
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}
export default CountersList
