import { Component } from 'react'
import MainHeader from './MainHeader'
import NewReleases from './NewReleases'
import Trending from './Trending'
import WatchAgain from './WatchAgain'

class MoviesList extends Component {
  render() {
    return (
      <>
        <div className="px-4">
          <MainHeader />
          <Trending />
          <WatchAgain />
          <NewReleases />
        </div>
      </>
    )
  }
}

export default MoviesList
