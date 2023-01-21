import React from 'react';

const Modal = ({ product }) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="productModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-8/12 max-w-3xl relative">
                    <label htmlFor="productModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <img className='lg:w-10/12' src={product?.productImage} alt="product" />
                        </div>
                        <div className='font-bold'>
                            <h3 className="text-lg">{product?.productName}</h3>
                            <p className="py-4 text-justify font-normal">{product?.description}</p>
                            <p>Size: {product?.size}</p>
                            <div className='flex gap-3'>
                                <p>Color:</p>
                                <div className="badge badge-lg bg-black"></div>
                                <div className="badge badge-lg bg-red-400"></div>
                                <div className="badge badge-lg bg-red-600"></div>
                                <div className="badge badge-lg bg-green-600"></div>
                                <div className="badge badge-lg bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;