import { id } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Categories from "../../Components/Categories";
import NewsCart from "../../Components/NewsCart";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
  }, [data, id]);
  return <div>
    <h1 className="font-bold mb-5 text-center">Total <span className="text-secondary">{categoryNews.length}</span> news Found</h1>
    <div className="grid grid-cols-1 gap-5">
      {
        categoryNews.map(news => <NewsCart news={news} key={news.id}></NewsCart>)
      }
    </div>
  </div>;
};

export default CategoryNews;
