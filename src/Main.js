import React, { Component } from 'react'
import Article from './Article'
// import Article from './article.json'

class Main extends Component {
  render() {
    let titles = [
      'We are hungry',
      'Mmmm, bacon is so good',
      'When is lunch?',
      'Who has good Taco Tuesday',
      'React is amazing'
    ]

    return (
      <main>
        {titles.map(string => (
          <Article title={string} />
          // <Article.map(article) => {
          // <Article title={Article.title} body={Article.body}
          // }
        ))}
      </main>
    )
  }
}

export default Main
