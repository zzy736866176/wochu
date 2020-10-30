import React, { Component, lazy, Suspense } from "react";
import _ from "lodash";
import axios from 'axios'
const time = 3.5;
const Lzy = lazy(
  () =>{
    // new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({ default: () => <Resource /> });
    //   }, time * 1000);
    // })
    new Promise(resolve => {
      axios({
        url:"/a.json"
      }).then((data)=>{
          resolve(data)
      })
    }).then((a)=>{
      console.log(a)
    })
  }
);
const Resource = () => (
  <div className="box">
    <h1>React Lazy</h1>
    <p>
      This component loaded after {time} seconds, using React Lazy and Suspense
    </p>
  </div>
);
const Loading = () => {
  return <p>Loading...</p>;
};
class SearchTitle extends Component {
  render() {
    const arr = [1, 2, 3, 4, 5, undefined, 7, null, 9];
    console.log("lodash", _.compact(arr, [3]));
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Lzy />
        </Suspense>
      </>
    );
  }
}

export default SearchTitle;
