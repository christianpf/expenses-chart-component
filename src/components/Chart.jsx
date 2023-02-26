import React from 'react'

import chart_data from '../assets/data.json'

const Daily = () => {

    const maxExpense = Math.max(...chart_data.map(entry => entry.amount))

    return (
        <div className="expenses__chart">
            {chart_data.map(entry => {
                return (
                    <div className='eachday'>
                        <div className='chart' max={entry.amount == maxExpense ? "true" : "false"} style={{height:`${(entry.amount*80)/maxExpense}%`}} alt={`$ ${entry.amount} spent on ${entry.day}`}>
                            <div className='expense__number full'>
                                <p>${entry.amount}</p>
                            </div>    
                        </div>
                        <p className='weekday'>{entry.day}</p>
                    </div>
                )
            })}
        </div>
    )
}

const Chart = () => {
  return (
    <article className='expenses'>
        <div className='expenses__header'>
            <div className='expenses__balance'>
                <p>My balance</p>
                <p className='balance'>$921.48</p>
            </div>
            <img src="../../images/logo.svg" alt="Enterprise logo"/>
        </div>
        <div className='expenses__content'>
            <h1 className='expenses__title'>Spending - Last 7 days</h1>

            <Daily />

            <div className='expenses__data'>
                <div className='expenses__month'>
                    <p className="total__expent">Total this month</p>
                    <p className="expent">$478.33</p>
                </div>
                
                <div className='expenses__last'>
                    <p className='percentage'>+2.4%</p>
                    <p className='last__month'>from last month</p>
                </div>
            </div>
        </div>
    </article>
  )
}


export default Chart