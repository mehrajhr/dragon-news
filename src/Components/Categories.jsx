import { ca } from 'date-fns/locale';
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
.then(res => res.json());
const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h1 className='font-bold'>All categories</h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category => <NavLink key={category.id} className="btn font-semibold text-accent bg-white border-0 hover:bg-base-200" to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;