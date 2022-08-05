import React, { Component } from 'react'

class TrendingShowList extends Component {

  constructor(){// we can also have constructor. 
    // if we have constructor, state should be defined within constructor only
    super(); // must call super() to use 'this' keyword
    this.state = {
      trendingShowsList: [
        {
          rank: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false 
        },
        {
          rank: 2, name: 'Planet Earth II', host: 'David Attenborough', isInWatchlist: false 
        },
        {
          rank: 3, name: 'IPL 2022', host: 'Sourav Ganguly', isInWatchlist: false 
        },
        {
          rank: 4, name: 'Man vs Wild', host: 'Bear Grylls', isInWatchlist: false 
        }
      ]
    }
  }

  render() {
    return (
      <div className='row'>
        <h3>Trending this week!</h3>

        { /* Conditionals */ }
        { this.state.trendingShowsList && this.state.trendingShowsList.length > 0? 
          <div class="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                #1. Man Vs Wild | Host: Bear Grylls
                <button className='btn btn-success float-end'>Add to Watchlist</button>
              </li>
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