import React from 'react'
import { Slider } from 'react-slick'
export type TypeProps = {
    id?: string
}
class SliderExample extends React.Component<TypeProps> {
    render(): React.ReactNode {
        const { id, children } = this.props
        const settings = {
            dots: true,
            className: 'sample'
        }
        return (
            <Slider id={id} {...settings}>
                {children}
            </Slider>
        )
    }
}

export default SliderExample
