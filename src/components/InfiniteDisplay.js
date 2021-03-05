// import React, {useEffect, useState,useCallback} from 'react';
// import {getData} from "../lib/library"
//
// export default function InfiniteDisplay({query}) {
//     //loaded photos is a small portion of photos initially loaded
//     // and as user scrolls it gets bigger
//     //last item in loadedPhotos will be the ref for the observer
//     const [loadedPhotos,setLoadedPhotos]=useState([])
//
//     //tobeloaded is a subsection of photos that are queued to be loaded.\
//     // will be appended to loaded photos as they come into view
//     const [toBeloaded,setToBeLoaded] = useState([])
//
//     // Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function at InfiniteDisplay
//
//     //once scrolled to last div on toBeLoaded page will be incremented
//     const [page,setPage]=useState(1)
//
//     const [lastVisible,setLastVisible] = useState(null)
//
//     const newRef = useCallback( node=>{
//         // console.log(node)
//         if (node!= null){
//             initObserver(node)
//         }
//     },[])
//
//     useEffect(()=>{
//         console.log("page num is", page)
//         console.log("loadedPhotos is",loadedPhotos)
//         console.log("toBeloaded is",toBeloaded)
//         getData(query, 3, lastVisible, setLastVisible, setToBeLoaded)
//     },[page])
//
//     useEffect( ()=>{
//         if(! toBeloaded.some(el=>loadedPhotos.includes(el))) {
//             setLoadedPhotos(prevState => [...prevState, ...toBeloaded])
//         }
//     },[toBeloaded])
//
//     function handleObserver(entities,observer){
//         if (entities[0].intersectionRatio>=0.9){
//             //if scrolled to whichever div is almost last, increment page to trigger getData
//             setPage(count=>count+1)
//         }
//     }
//
//
//     function initObserver(node){
//         console.log("initialising observer")
//         let options={
//             root:null,
//             rootMargin:"0px",
//             threshold:1
//         }
//
//         let observer = new IntersectionObserver(
//             handleObserver,options
//         )
//         if(node){
//             console.log(node)
//             observer.observe(node)
//         }
//
//     }
//
//     return (
//         <div>
//             <>
//                 <div>loaded photos</div>
//                 {loadedPhotos.map((el, idx) => (
//                 el.href &&
//                 <div key={idx}> {query} and {el.count}
//                     <img src={el.href} height={"60px"} alt="img"/>
//                 </div>
//         ))}
//             </>
//
//             <>
//             <h3>to be loaded photos</h3>
//             {toBeloaded.map((el,idx)=>(
//                 el.href &&
//                     <div key={idx}>{query} and {el.count}
//                         {el.count == toBeloaded.length-1 ?
//                             <img src={el.href} height={"200px"} alt="img" ref={newRef} />
//                             :
//                             <img src={el.href} height={"200px"} alt="img"/>
//                         }
//                     </div>
//             ))
//             }
//             </>
//
//
//         </div>
//     );
// }
