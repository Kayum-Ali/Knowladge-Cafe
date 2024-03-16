import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {


    return (
        <div className="w-1/3 bg-slate-300 rounded-xl ml-3 ">
            <h1 className="mt-3 text-center lg:text-2xl text-base font-bold"> Spent Time On Read: {readingTime} min</h1>
            <h2 className="my-5 text-center lg:text-2xl text-base font-bold">Bookmarks Blogs: {bookmarks.length}</h2>
            
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            


        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.func
}

export default Bookmarks;