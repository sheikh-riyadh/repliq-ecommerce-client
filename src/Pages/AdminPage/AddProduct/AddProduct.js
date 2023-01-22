import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    /*  */
    const handleOnSubmit = (data) => {

        setLoading(true)
        /* Get form data */
        const {
            productName, price, description
        } = data


        /* Get image from form */
        const image = data.productImage[0]
        const formData = new FormData()
        formData.append('image', image)

        /* Image upload on imageBB server */
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_api}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            if (data.success) {
                const productImage = data?.data?.display_url;

                const product = {
                    productName,
                    productImage,
                    price: parseInt(price),
                    description
                }
                addProduct(product)
            }
        })

        /* Save product to database */
        const addProduct = (product) => {
            fetch(`${process.env.REACT_APP_api_url}/add-product`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    setLoading(false)
                    toast.success('Product added succesfull')
                    reset()
                }
            }).catch(e => console.error(e))
        }

    }
    return (
        <div className="hero my-11 lg:my-0">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Add product</h1>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)} className="card flex-shrink-0 w-full bg-primary max-w-sm">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Product name</span>
                            </label>
                            <input {...register('productName', { required: 'This field required' })} type="text" placeholder="Product name" className="input input-bordered" />
                            <p className='text-red-600 font-medium text-start mt-1'>{errors.productName?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <input {...register('price', { required: 'This field required' })} type="number" placeholder="Price" className="input input-bordered" />
                            <p className='text-red-600 font-medium text-start mt-1'>{errors.price?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Product image</span>
                            </label>
                            <input {...register('productImage', { required: 'This field required' })} type="file" accept='image/*' name='productImage' className='text-white' />
                            <p className='text-red-600 font-medium text-start mt-1'>{errors.productImage?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Description</span>
                            </label>
                            <textarea {...register('description', { required: 'This field required' })} type="text" placeholder="Product description" className="textarea textarea-bordered"></textarea>
                            <p className='text-red-600 font-medium text-start mt-1'>{errors.description?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn-secondary text-white btn border-0">{loading ? "Processing..." : "Add Product"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;