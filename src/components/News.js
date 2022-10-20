import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    constructor() {
        super();
        this.state = {
            // articles:this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
    }

    async updatenewsgorilla() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eeba92eb116d42f995c39dbf21aa829e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.props.setProgress(20)
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(40)
        let parsedData = await data.json()
        this.props.setProgress(80)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)

    }
    async componentDidMount() {
        this.updatenewsgorilla()
    }


    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updatenewsgorilla()
    }




    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 })
        this.updatenewsgorilla()
    }


    fetchMoreData=async()=>{
        this.setState({page:this.state.page +1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eeba92eb116d42f995c39dbf21aa829e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <>

                <h1 className='text-center' style={{ margin: '25px' }}>NewsGorilla's Top HeadLines Today</h1>
                {/* {this.state.loading && <Spinner />} */}

                <div className="container my-3">
                    <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalResults}
                        loader={<Spinner/>}
                    >
                

                    <div className="container">

                    
                    <div className="row">

                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}

                    </div>
                    </div>
                    </InfiniteScroll>
                    <div className="container d-flex justify-content-between">

                        <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}> &larr; previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>

                </div>

            </>

        )
    }
}

export default News
