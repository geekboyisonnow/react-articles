import React, { Component } from 'react'

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>
          Bacon ipsum dolor amet ham hock capicola kevin, brisket t-bone pork
          chop meatball ground round shoulder ribeye bacon. Meatloaf ground
          round bacon turkey pork belly biltong andouille tenderloin buffalo
          jowl landjaeger fatback strip steak tongue. Corned beef fatback ground
          round buffalo, t-bone spare ribs chicken salami tri-tip prosciutto
          kielbasa beef ribs. Short ribs flank beef, andouille chuck pork belly
          pastrami turkey pork loin fatback salami. Nulla pork belly ball tip,
          lorem nostrud adipisicing pancetta consectetur beef. Pig sausage
          pastrami andouille. Bresaola ribeye short ribs sausage tri-tip
          landjaeger. Beef ribs pork shankle jerky sint shank eu corned beef
          aute deserunt.
        </p>
        <a href="#">read more</a>
      </article>
    )
  }
}

export default Article
