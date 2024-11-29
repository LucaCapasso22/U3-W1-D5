import { Component } from 'react'
import { Alert, ListGroup, Row, Spinner } from 'react-bootstrap'
import SingleMovie from './SingleMovie'

class Trending extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    showErrorMessage: '',
  }

  fetchMovies = async () => {
    try {
      const res = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=259f6f20&type=movie&s=harry%20potter'
      )
      if (res.ok) {
        const data = await res.json()
        /* console.log(data); */
        if (data.Response === 'False') {
          this.setState({
            isLoading: false,
            hasError: true,
            showErrorMessage: `There was an error while loading the content. Try refreshing the page, and if the error persists, please contact us. Error: ${res.status}. `,
          })
        } else {
          this.setState({ movies: data.Search.splice(0, 6), isLoading: false })
        }
        /* console.log(this.state.movies); */
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          showErrorMessage: `There was an error while loading the content. Try refreshing the page, and if the error persists, please contact us. Error: ${res.status}.`,
        })
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        showErrorMessage: `Fatal error while loading the content, please try again later. Error: ${error}`,
      })
    }
  }

  componentDidMount = () => {
    /* console.log("Effettuo il mount"); */
    this.fetchMovies()
  }

  render() {
    /* console.log("Effettuo il render"); */
    return (
      <>
        <h4>Trending Now</h4>
        <Row xs={1} md={2} lg={4} xl={6}>
          {this.state.hasError && (
            <Alert className="w-100 text-center" variant="danger">
              {this.state.showErrorMessage}
            </Alert>
          )}
          {this.state.isLoading && (
            <div className="text-center m-auto">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {this.state.movies.length === 0 &&
            !this.state.isLoading &&
            !this.state.hasError && (
              <ListGroup>
                It seems there are no trending movies right now.
              </ListGroup>
            )}
          {this.state.movies.map((movies) => (
            <SingleMovie SingleMovie={movies} key={movies.imdbID} />
          ))}
        </Row>
      </>
    )
  }
}
export default Trending
