/**/
import React from 'react'
import { Col, Container } from '@bootstrap-styled/v4'
import SliderExample from './Slider/index'
import Slider from 'react-slick'

const Home: React.FC<{ className?: any }> = ({ className }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Container className="className">
            <Col>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </Col>
            <SliderExample id="slider">
                <Col>
                    <h1>lola</h1>
                </Col>
                <Col>
                    <h1>lola</h1>
                </Col>
            </SliderExample>
        </Container>
    )
}

export default Home
