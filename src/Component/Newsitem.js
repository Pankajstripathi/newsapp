import React from "react";

   const Newsitem = (props) => {
 
  
      let {title, description, Imageurl, newsurl, author, date, source} = props;
    return (
      <div>
        <div className="card" >
        <span className="badge badge-dark">{source}</span>
          <img src={!Imageurl?"https://media.gettyimages.com/id/1166234186/photo/mumbai-india-september-5-bhagat-singh-koshyari-chief-minister-of-maharashtra-devendra.jpg?s=612x612&w=0&k=20&c=9CCqWn4u-KJosmf8eEOXZC3GRbOexDLndfNfNfw4H88=":Imageurl  } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
            {description}...
            </p>
            <p className="card-text">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</p>
            <a href={newsurl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default Newsitem;
