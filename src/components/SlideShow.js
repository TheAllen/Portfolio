import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import lucerne from '../images/lucerne.jpg';
import paris from '../images/paris.jpg';
import hk from '../images/hongkong.jpg';

// Call back function

const SlideShow = (props) => {
    const items = [
        {
            src: props.pic1,
            altText: 'Slide 1',
            caption: 'Pilatus',
            header: 'Lucerne',
            key: '1'
        },
        {
            src: paris,
            altText: 'Slide 2',
            caption: 'Eiffel Tower',
            header: 'Paris',
            key: '2'
        },
        {
            src: hk,
            altText: 'Slide 3',
            caption: 'Central',
            header: 'Hong Kong',
            key: '3'
        },
        {
            src: hk,
            altText: 'Slide 3',
            caption: 'Central',
            header: 'Hong Kong',
            key: '4'
        },
        {
            src: hk,
            altText: 'Slide 3',
            caption: 'Central',
            header: 'Hong Kong',
            key: '5'
        }
    
    ];

    return <UncontrolledCarousel items={items}></UncontrolledCarousel>

}

export default SlideShow;