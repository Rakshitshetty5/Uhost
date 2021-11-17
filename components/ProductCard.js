import React from 'react'
import Image from 'next/image'
import StarRatingComponent from 'react-star-rating-component';

const ProductCard = () => {
    return (
        <div className="p-2 shadow-md w-[11rem] h-[17rem] md:w-52 md:h-[19rem] flex flex-col items-center hover:shadow-xl rounded-sm">
            <div className="relative h-full w-full">
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/images%2F88b5f9e7-bd69-40d9-8c1d-8e5bcb37baed1549868509703-Bhama-Couture-Women-Navy-Blue-Washed-Denim-Jacket-8871549868-1.webp?alt=media&token=cd23e245-466d-44e2-b5f4-37a645b5430f"
                    layout="fill"
                    className="rounded"
                />
            </div>
            <div className="w-full pt-4 pl-2 flex flex-col items-start">
                <h1 className="font-bold text-gray-800 ">Ralf Lauren</h1>
                <StarRatingComponent 
                    name="rate"
                    value={3}
                    starCount={5}
                />
                <span className="text-gray-600 mt-2">$300</span>
            </div>
        </div>
    )
}

export default ProductCard
