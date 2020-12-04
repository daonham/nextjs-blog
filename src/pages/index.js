import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta name="twitter:title" content="Blog – Next JS and Tailwind CSS" />
        <meta name="twitter:description" content="Next JS and Tailwind CSS from the Alura team." />
        <meta name="twitter:image" content={`https://blog.tailwindcss.com${twitterCard}`} />
        <meta property="og:url" content="https://blog.tailwindcss.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Next JS and Tailwind CSS" />
        <meta property="og:description" content="Next JS and Tailwind CSS from the Alura team." />
        <meta property="og:image" content={`https://blog.tailwindcss.com${twitterCard}`} />
        <title>Blog – Next JS and Tailwind CSS</title>
        <meta name="description" content="Next JS and Tailwind CSS from the Alura team." />
      </Head>
      <div className="px-8 py-10 space-y-2 md:space-5 bg-gray-900 rounded-lg">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Welcome to Next JS and Tailwind CSS.
            </p>
            <h2 className="mt-2 text-2xl font-semibold font-display text-white">
              Beautiful UI component, crafted
              <br className="hidden sm:inline lg:hidden xl:inline" />
              <span className="text-blue-300">by Next JS and Tailwind CSS.</span>
            </h2>
            <p className="mt-4 text-base text-gray-300 max-w-3xl">
            Tailwind UI is a collection of professionally designed, pre-built, fully responsive HTML snippets you can drop into your Tailwind projects. Get started by checking out our free preview components, or browsing the PNG previews in the categories you're most curious about.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-10">
          Latest Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          All the latest Next JS news, straight from the team.
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-top">
                 <div>
                   <a className="inline-block h-full" href={link} title={meta.title}>
                    <Image src={meta.image} className="object-cover h-full w-full" width={800} height={800} />
                   </a>
                 </div>
                <div className="space-y-5 xl:col-span-3 xl:ml-6">
                  <dl className="space-y-4">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500">
                      <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                    </dd>
                  </dl>
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="prose max-w-none text-gray-500">
                      <Component />
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link href={link}>
                      <a
                        className="text-teal-500 hover:text-teal-600"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
