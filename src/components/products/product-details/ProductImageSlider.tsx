import { Component } from 'react';

import ImageSelector from 'utils/ImageSelector';

import { ImageSlide, OtherImages, PreviewImage } from './ProuductDetails.style';

type Props = {
    images: string[];
    name: string;
};

export default class ProductImageSlider extends Component<Props> {
    render() {
        const { images, name } = this.props;
        return (
            <ImageSlide>
                <ImageSelector noOfImages={images.length}>
                    {({ currentIndex, handleSelect }) => (
                        <>
                            <OtherImages className="hide-scrollbar">
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSelect(index)}
                                        style={{
                                            border:
                                                currentIndex === index
                                                    ? '1px solid rgba(0,0,0,.5)'
                                                    : '',
                                            padding:
                                                currentIndex === index
                                                    ? '0.1rem'
                                                    : '0',
                                        }}
                                    >
                                        <img src={src} alt={name} />
                                    </div>
                                ))}
                            </OtherImages>
                            <PreviewImage>
                                <img src={images[currentIndex]} alt={name} />
                            </PreviewImage>
                        </>
                    )}
                </ImageSelector>
            </ImageSlide>
        );
    }
}
