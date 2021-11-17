import React from 'react'
import Layout from '../components/Layout'
const ProductPage = () => {
    return (
        <Layout title="ralf lauren">
            <section className="flex flex-col md:flex-row md:justify-around">
                <article>
                    <h1 className="text-2xl mb-2">Ralf Lauren</h1>
                    <span className="text-red-500">$22.56</span>
                </article>
                <article className="flex flex-col">
                    <h2 className="text-xl font-medium">Description</h2>
                    <p className="mt-4">Black printed sweatshirt has a round neck, long sleeves, closure, straight hem.</p>
                    <button className="w-full py-3 shadow-md rounded-lg bg-[pink] hover:shadow-xl self-center mt-10">
                        Add to Cart
                    </button>
                </article>
            </section>
            <article>
                    
            </article>
        </Layout>
    )
}

export default ProductPage
