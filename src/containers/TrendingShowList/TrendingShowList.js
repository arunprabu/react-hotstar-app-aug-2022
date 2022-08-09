import React, { Component } from 'react'

class TrendingShowList extends Component {

  constructor(){// we can also have constructor. 
    // if we have constructor, state should be defined within constructor only
    super(); // must call super() to use 'this' keyword
    this.state = {
      trendingShowsList: [
        {
          id: 234211, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: true 
        },
        {
          id: 546435 , name: 'Planet Earth II', host: 'David Attenborough', isInWatchlist: false 
        },
        {
          id: 467546, name: 'IPL 2022', host: 'Sourav Ganguly', isInWatchlist: false 
        },
        {
          id: 435634, name: 'Man vs Wild', host: 'Bear Grylls', isInWatchlist: true 
        }
      ]
    }
  }

  handleAddToWatchlist(index){
    // updating state immutably
    let dupTrendingShows = [ ...this.state.trendingShowsList ];// shallow copy
    dupTrendingShows[index].isInWatchlist = !dupTrendingShows[index].isInWatchlist;

    this.setState({
      trendingShowsList: dupTrendingShows
    })
  }

  render() {
    // comp-specific transformations
    // ideal place for looping 
    let showList = null; 
    
    if(this.state.trendingShowsList && this.state.trendingShowsList.length > 0){
      showList = this.state.trendingShowsList.map( (show, index) => {
        return(
          <li className="list-group-item" key={show.id}>
            #{index + 1}. {show.name} | Host: {show.host}
            <button className='btn btn-success float-end' 
              onClick={ this.handleAddToWatchlist.bind(this, index) }>
              { show.isInWatchlist? 'In Watchlist': 'Add to Watchlist'}
            </button>
          </li>
        )
      }) 
    }

    return (
      <div className='row'>
        <h3>Trending this week!</h3>

        { /* Conditionals */ }
        { this.state.trendingShowsList && this.state.trendingShowsList.length > 0? 
          <div className="card">
            <ul className="list-group list-group-flush">
            {showList}
            </ul>
          </div>
          :
          <div className='alert alert-danger'>
            Sorry! Unable to load trending shows. Try again later.
          </div>
        }        
        
      </div>
    )
  }
}

export default TrendingShowList;