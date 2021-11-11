import React from 'react'
import axios from 'axios'
const url = "https://jsonplaceholder.typicode.com/posts"; 

const Post = () => {

    const [postData, setPostData] = React.useState([]);


    //POST function

    const postDataFn = ()=>{

        axios.post(url, {
            
            title:"Hope you can see the changes",
            body:"This is a demo for my tutorial"

        })
        .then((resp)=>setPostData(resp.data))
        .catch((err)=>{console.error(err)
  });

    }

if (!postData){
    return "There is no data"
}


    return (
       <section>
<h1> {postData.body}</h1>
<h1> {postData.title}</h1>
{/* invoke when clicked the button */}
<button onClick={()=>postDataFn()}> Insert Data</button>
       </section>
    )
}

export default Post
