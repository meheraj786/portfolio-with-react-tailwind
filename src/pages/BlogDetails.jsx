import React from 'react'
import Container from '../layouts/Container'
import { useParams } from 'react-router-dom'


const BlogDetails = ({blogs}) => {

  const {blogId}= useParams()
  
  const blog = blogs.find((b) => b.id== blogId);

  if (!blog) {
    return(
    <div className="blogDetails bg-dark-bg py-[100px] pt-[150px] text-white relative flex justify-center items-center h-screen text-center">
            <div className="circle-violet absolute w-[152px] h-[152px] left-[10%] top-[40%] animate-pulse rounded-full bg-[rgba(47,17,30,0.48)] shadow-[0_0_100px_100px_rgba(47,17,30,0.48)]">
        

        </div>
      <h1 className='font-primary mt-[30px] md:text-subheading text-subheading-sm font-bold '>Blog not Found :(</h1>
      </div>
    )
  }
  return (
          <div className="blogDetails relative bg-dark-bg py-[100px] pt-[200px] text-white">
                  <div className="circle-violet absolute w-[152px] h-[152px] left-[10%] top-[10%] animate-pulse rounded-full bg-[rgba(47,17,30,0.48)] shadow-[0_0_100px_100px_rgba(47,17,30,0.48)]">
        

        </div>
          <Container>
            <div className="title mb-[50px] text-center">
              <p className='text-body'>{blog.date}</p>
              <h1 className='font-primary mt-[30px] md:text-subheading text-subheading-sm font-bold '>{blog.title}</h1>
              </div>
              <div className='content bg-black border border-primary rounded-[20px]  py-[38px] md:px-[73px] px-8' >
        <div className="img md:max-w-[758px] w-full mx-auto mb-[50px] h-[440px] bg-gray-300 rounded-[20px]" style={{
      background: `url(${blog.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}></div>
       <div>
        {blog.content}
       </div>
    
        </div>
              
    
            
          </Container>
        </div>

    

  )
}

export default BlogDetails