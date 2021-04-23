import React from 'react';
import allBlogs from '../Components/allBlogs';
import Tittle from '../Components/Tittle';

function BlogsPage() {
    return (
        <div>
            <div className="b-title">
                <Tittle title={'Certifieds'} span={'Certifieds'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className="blog-link" target="_blank">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogsPage;
