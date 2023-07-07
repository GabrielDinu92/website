import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookF, faTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faRss as faRssSolid } from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram, faFacebookF, faTwitter, faYoutube, faPinterest, faRssSolid);

const Socials = () => {
  return (
    <div className="socials flex justify-between items-center mr-5">
      <a target="_blank" className="social" href="https://www.instagram.com/theblondeabroad/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a target="_blank" className="social" href="https://www.facebook.com/theblondeabroad">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a target="_blank" className="social" href="https://twitter.com/theblondeabroad">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a target="_blank" className="social" href="https://www.youtube.com/channel/UCv-fxyco4Z6DUoweOgi5WRg?sub_confirmation=1">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a target="_blank" className="social" href="https://www.pinterest.com.au/theblondeabroad/">
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a target="_blank" className="social" href="https://www.bloglovin.com/blogs/blonde-abroad-3663186">
        <FontAwesomeIcon icon={faRssSolid} />
      </a>
    </div>
  );
};

export default Socials;