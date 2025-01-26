import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contentData from '../utils/contentData';

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <h2 className="my-5 text-center" data-testid="content-title">
      Hogyan használd?
    </h2>
    <p className="my-5 text-center" data-testid="content-title">
      Jelentkezz be! Indísd el a hangot! Figyelj! Értsd meg!
    </p>

  </div>
);

export default Content;
