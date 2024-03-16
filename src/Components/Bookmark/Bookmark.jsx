
import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className='bg-white rounded-xl text-center m-5 p-3'>
            <h3>{title}</h3>

            
        </div>
    );
};

Bookmark.propTypes ={
   bookmark: PropTypes.object
}

export default Bookmark;