import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1]);
    const [inifite, setInfinite] = React.useState(true);

    React.useEffect(() => {
        let wait = false;
        function infiniteScroll() {
            if (inifite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
    
                if (scroll > (height * 0.75) && !wait ) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(()=> wait = false, 500);
                }
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);

        return  () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        };
    }, [inifite]);

    return (
    <div>
        { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} /> }
        {pages.map((page) => {
            return <FeedPhotos key={page} page={page} setModalPhoto={setModalPhoto} user={user} setInfinite={setInfinite} /> 
        })}
    </div>
    );
}

Feed.defaultProps = {
    user : 0,
}

Feed.propTypes = {
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}

export default Feed;