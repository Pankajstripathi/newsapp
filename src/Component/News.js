import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalresult, setTotalResult] = useState(0)
  // capitilizeFirstLetter = (string) =>{
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
 
  const updateNews= async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a9e188f75b4f4080811318a480f6b119&Page=2&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResult(parseData.totalResults)
    setLoading(false)
     }

     useEffect(() => {
       // document.title = '${props.category} - CityNews'        
       updateNews();
           
           }, [])

     const fetchMoreData =async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a9e188f75b4f4080811318a480f6b119&Page=${page+1}2&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResult(parseData.totalResults)
  };

 const handlePrevClick = async () => {
     
    setPage(page+1)
    updateNews();
  };

 const handleNextClick = async () => {
         setPage(page-1)
    updateNews();
  };

    return (
      <div className="container my-4">
        <h1 className="text-center mt-5 pt-4">CityNews - Top Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== setTotalResult}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row my-4">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    Imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button
            disabled={state.page <= 1}
            type="button"
            className="btn btn-info mx-2"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-info mx-2"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
}
News.deafaultProps = {
  country: "in",
  page: 8,
  category: "General",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
