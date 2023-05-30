import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white  my-20 max-w-7xl mx-auto">
          <div className='bg-black opacity-70 py-10'>
          <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
          </div>
            <div className="md:flex justify-center items-center bg-black opacity-70 pb-20 px-12 lg:px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 text-white border-b-4 mt-4 hover:text-yellow-600">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;