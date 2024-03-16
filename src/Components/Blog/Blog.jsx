import { FaRegBookmark } from "react-icons/fa";

import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags,id } = blog
    return (
        <div>
            <div className="">
                <img className='rounded-[5px] w-full' src={cover} alt="Shoes" />
                <div className=' mt-8'>
                    <div className="flex flex-col lg:flex-row justify-between  items-center p-2">
                        {/* author and author_img div */}
                        <div className='flex justify-between items-center gap-5'>
                            <img className='w-[70px] h-[70px]' src={author_img} alt="" />
                            <div>
                                <h2 className='lg:text-xl text-base font-bold'>{author}</h2>
                                <p className='opacity-80 text-base'>{posted_date}</p>
                            </div>
                        </div>

                        {/* reading_time and bokkmark btn div */}
                        <div className='space-x-2 items-center animate-bounce my-4 lg:my-0 ' title="Add To bookmark">
                            <span>{reading_time} min read</span>
                            <button onClick={() => handleAddToBookmark(blog)} className="text-xl  pr-2"><FaRegBookmark></FaRegBookmark></button>

                        </div>
                       

                    </div>

                    <h3 className='lg:text-3xl text-base font-bold my-3 '>{title}</h3>

                    <p className='opacity-80 space-x-3 mb-2'>
                        {
                            hashtags.map((hash, idx) => <span key={idx} ><a href="">   #{hash}</a></span>)
                        }
                    </p>
                    <div className='mb-5'>
                        <button className='text-purple-500 underline animate-bounce' onClick={() => handleMarkAsRead(reading_time,id)}>Mark as read</button>
                    </div>
                    <hr /><br />
                </div>
            </div>



        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;