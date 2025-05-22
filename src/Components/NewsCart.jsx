import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCart = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      <div className="flex items-center bg-base-200 justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author?.img} alt={author?.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className='flex gap-3'>
            <CiBookmark />
            <CiShare2 />
        </div>
      </div>

      <div className="card-body pt-3">
        <h2 className="card-title text-lg">{title}</h2>
        <figure className="my-2">
          <img src={image_url} alt="news" className="rounded" />
        </figure>
        <p>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <span className="text-blue-600 font-medium cursor-pointer ml-1">Read More</span>
            </>
          ) : (
            details
          )}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: Math.round(rating?.number || 0) }).map((_, index) => (
              <FaStar key={index} />
            ))}
            <span className="text-gray-800 ml-1">{rating?.number || 0}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
