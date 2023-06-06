import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const image_upload_token = import.meta.env.VITE_image_upload_token;


const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(image_upload_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, category, price, recipe} = data;
                const newItem = {name, category, price: parseFloat(price), recipe, image: imgURL};
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log(data.data);
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item Added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }

    return (
        <div className="w-full  bg-white">
            <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
        <SectionTitle subHeading="What's new" heading="Add an item" ></SectionTitle>
       <div className='mx-28 bg-slate-100 px-10 py-10 mb-24'>
       <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Recipe Name*</span>
                </label>
                <input type="text" placeholder="Recipe Name"
                    {...register("name", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="flex my-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                        <option disabled>Pick One</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Desi</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Recipe Details</span>
                </label>
                <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Item Details"></textarea>
            </div>
            <div className="form-control w-2/4 my-4">
                <label className="label">
                    <span className="label-text">Item Image*</span>
                </label>
                <input type="file" {...register("image", { required: true })} className="py-2 border rounded-md  w-full " />
            </div>
            <input className="btn btn-md mt-4 bg-orange-600 border-0" type="submit" value="Add Item" />
        </form>
       </div>
    </div>
    );
};

export default AddItem;