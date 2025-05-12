import { useState } from 'react';
import RecipeCard from '../RecipeCard';

export default function FeaturedRecipesCarousel () {
    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className='mb-0'>Featured Recipes</h3>
                    <div>
                        <button className='btn btn-outline-secondary me-2'>←</button>
                        <button className='btn btn-outline-secondary me-2'>→</button>
                    </div>
                </div>
            </div>

            <div className="carousel-slide-wrapper">
                <div className="row carousel-slide">
                    
                </div>
            </div>
        </>
    )
}