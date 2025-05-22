import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCart = ({ news }) => {
  const { title, image_url, details, tags, author, published_date,category_id } = news;

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure className="w-full">
        <img src={image_url} alt={title} className="rounded-xl" />
      </figure>

      <div className="card-body px-0">
        <h2 className="text-2xl font-bold leading-snug mt-4">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">
          {new Date(published_date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="text-base text-gray-700 leading-relaxed mt-4 whitespace-pre-line">
          {details}
        </div>

        <div className="mt-6">
          <Link to={`/category/${category_id}`}>
            <button className="btn btn-error text-white gap-2">
              <FaArrowLeft />
              All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCart;
