import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,author,date}=this.props;

        
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://media.istockphoto.com/vectors/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-vector-id891605714?b=1&k=20&m=891605714&s=612x612&w=0&h=HR6jezIN5wQ7B8imsxws65esrjQTEUIu8IAY38f4ZQc=":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
                            <p className="card-text">{description}...</p>
                            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown Source"} on {new Date(date).toGMTString()} </small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
