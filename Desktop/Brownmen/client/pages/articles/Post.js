import React, { useEffect, useState } from 'react'
import NoPost from './NoPost';

function Post({ jsonRes }) {

  const [getData, setData] = useState([])

  useEffect(() => {
    setData(jsonRes)
  }, [setData])


  return (
    <>

      <div className='space' style={{ padding: "1px" }}></div>
      <div className=' container box' >
        {getData === undefined ? <NoPost /> : getData.map((item, index) => (
          <div key={index}>
            <div className='container'>
              {item.key.startsWith("topHeading") && <h1 className='text-center my-3'>{(item.text)}</h1>}
              {item.key.startsWith("title") && <h3 className='text-start my-2'>{(item.text).includes("<br/>") ? item.text.replace(/<br\/>/g, "<br>") : " "}</h3>}
              {item.key.startsWith("heading") && <p className='text-start my-2'>{(item.text)}</p>}
              {item.key.startsWith("subheading") && <p className='text-start my-2'>{(item.text)}</p>}
              {item.key.startsWith("content") && <p className='text-start my-2'>{(item.text)}</p>}
              <div className='d-flex justify-content-center'>
                {item.key.startsWith("image") && <img src={(item.text)} style={{ width: "100%", maxWidth: "500px",height:"100%",maxHeight:"500px" }} alt="Dynamic Image" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
Post.requireNavbarAndFooter = true;
export default Post


export async function getServerSideProps(context) {

  try {
    const { blog_slug } = context.query;
    console.log(blog_slug)
    const headers = new Headers();
    headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
    const res = await fetch(`http://13.233.72.215:4001/category/blog/${blog_slug}`, {
      headers: headers,
      timeout: 0,
   
    });
    const data = await res.json()
    const jsonRes = data[0].blog_desc
    console.log(jsonRes)
    return { props: { jsonRes } }
  }
  catch (error) {
    console.error(error);
    return { props: {} }
  }
}