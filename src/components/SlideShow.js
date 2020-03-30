import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';



const SlideShow = (props) => {

    return <UncontrolledCarousel items={props.items}></UncontrolledCarousel>

}

export default SlideShow;