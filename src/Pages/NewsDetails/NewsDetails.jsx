import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import RightAside from '../../Components/homeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCart from '../../Components/NewsDetailsCart';

const NewsDetails = () => {
    const data = useLoaderData();
    const [news , setNews] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const newsDetails = data.find(newsd => newsd.id == id);
        setNews(newsDetails);
    },[id, data])
    console.log(news);
    return (
        <div className='w-11/12 mx-auto py-5'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 my-10'>
                <section className='col-span-9'>
                    <h1 className='font-bold text-2xl'>Dragon News</h1>
                    <div className='my-5'>
                        {<NewsDetailsCart key={id} news={news}></NewsDetailsCart>}
                    </div>
                </section>
                <section className='col-span-3'>
                    <aside>
                        <RightAside></RightAside>
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;