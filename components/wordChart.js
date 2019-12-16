import React from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { connect } from 'react-redux'

const data = [
  {
    name: 'Page A', uv: 4000
  },
  {
    name: 'Page B', uv: 3000
  },
  {
    name: 'Page C', uv: 2000
  },
  {
    name: 'Page D', uv: 2780
  },
  {
    name: 'Page E', uv: 1890
  },
  {
    name: 'Page F', uv: 2390
  },
  {
    name: 'Page G', uv: 3490
  },
  {
    name: 'Page H', uv: 1890
  },
  {
    name: 'Page I', uv: 2390
  },
  {
    name: 'Page J', uv: 3490
  }
]

const structureData = words => {
  const wordList = Object.keys(words)

  return wordList.map(word => ({word, count: words[word]}))
}

const WordChart = props => {
  const words = props.words

  return (
    <div>
      {Object.keys(words).length > 0 && (
        <BarChart width={500} height={300} data={structureData(words)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return { words: state.words }
}

export default connect(mapStateToProps)(WordChart)