import { News } from "@/interfaces/news";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { generateNews } from "@/utils/generateNews";
import SkeletonHome from "@/components/SkeletonHome";

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleNewNews() {
    localStorage.removeItem("news");
    createNews();
  }

  async function createNews() {
    setLoading(true);
    const newsGerenated = await generateNews(3);
    localStorage.setItem("news", JSON.stringify(newsGerenated));
    setNews(newsGerenated);
    setLoading(false);
  }

  async function handleNews() {
    const newsString = localStorage.getItem("news");
    if (newsString) {
      setNews(JSON.parse(newsString));
      return;
    }
    createNews();
  }

  useEffect(() => {
    handleNews();
  }, []);

  if (loading) return <SkeletonHome />

  return (
    <div className="bg-white py-10 sm:py-10 h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between w-full items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The SkyBlog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 pb-10 sm:pb-10">
              This blog is generated with AI. The news are fake, but the code is
              real.
            </p>
          </div>

          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleNewNews}
          >
            Create new news
          </button>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news?.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              passHref
              prefetch={false}
            >
              <section className="flex max-w-xl flex-col items-start justify-between cursor-pointer">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={item.datetime} className="text-gray-500">
                    {item.date}
                  </time>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {item.category.title}
                  </p>
                </div>
                <img
                  className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-lg"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {item.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={item.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {item.author.name}
                    </div>
                    <p className="text-gray-600">{item.author.role}</p>
                  </div>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
