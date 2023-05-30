import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20 max-w-7xl mx-auto">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p><FaQuoteLeft className='text-6xl mt-5' /></p>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;