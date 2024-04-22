import { useEffect, useRef } from "react"
import articles from "@/data/articles.json"
import { Link } from "react-router-dom"
import { register } from "swiper/element/bundle"

import { cn } from "@/lib/utils"

register()

export default function Headline({ className }) {
  const titleSwiperRef = useRef(null)
  const coverSwiperRef = useRef(null)

  useEffect(() => {
    const TitleSwiperContainer = titleSwiperRef.current
    const coverSwiperContainer = coverSwiperRef.current

    const params = {
      thumbs: {
        swiper: coverSwiperContainer,
      },
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: true,
      speed: 600,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            width: 59px;
            height: 59px;
            padding: 12px;
            border-radius: 100%;
            border: 2px solid black;
            color: #000;
            box-sizing: border-box;
            bottom: 18px;
            top: auto;
            left: auto;
            right: 20px;
          }          
          
          .swiper-button-prev {
            transform: translate(-85px, 0px);
          }
      `,
      ],
    }

    Object.assign(TitleSwiperContainer, params)
    TitleSwiperContainer.initialize()

    const paramsCover = {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      watchSlidesProgress: true,
      speed: 400,
      noSwiping: true,
      noSwipingClass: "cover-swiper",
    }
    Object.assign(coverSwiperContainer, paramsCover)
    coverSwiperContainer.initialize()
  }, [])

  return (
    <section
      id="headline"
      className={cn(["relative", className])}
      data-section="headline"
    >
      <div className="relative isolate w-full max-w-full">
        <div className="grid max-h-[715px] grid-cols-2 items-center overflow-hidden pr-[30px]">
          <swiper-container init="false" ref={titleSwiperRef}>
            {articles.slice(12, 17).map((article) => (
              <swiper-slide key={article.title}>
                <div className="flex h-full flex-col items-start justify-center gap-7">
                  <span className="bg-orange-400 px-5 py-2 text-xl font-medium text-white">
                    MUSIC
                  </span>
                  <Link
                    href="#"
                    className="text-shadow hover:text-shadow-pinkpop text-white transition-all duration-300"
                  >
                    <h2 className="line-clamp-4 pb-2 text-4xl font-semibold leading-tight">
                      {article.title}
                    </h2>
                  </Link>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="cover-swiper relative mb-8 w-[514px] flex-1 border-4 border-white bg-white">
            <swiper-container init="false" ref={coverSwiperRef}>
              {articles.slice(12, 17).map((article) => (
                <swiper-slide key={article.title}>
                  <img
                    src={`${article.image}?w=1200`}
                    alt="image alt"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 flex h-full w-[100vw] min-w-[1080px] -translate-x-1/2 flex-col justify-center"
          role="presentation"
          aria-label="hidden"
        >
          <hr className="mb-1 w-full border-t-4 border-[#EE2D93]" />
          <div
            className="relative h-[511px] w-full"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}images/bg-hl-slider.webp')`,
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}
