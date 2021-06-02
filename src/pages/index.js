import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

const posts = getAllPostPreviews()

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alurastudio" />
        <meta name="twitter:creator" content="@alurastudio" />
        <meta name="twitter:title" content="AluraStudio - WordPress Themes and Plugins" />
        <meta name="twitter:description" content="AluraStudio - WordPress Themes and Plugins." />
        <meta name="twitter:image" content={`https://alura-studio.com${twitterCard}`} />
        <meta property="og:url" content="https://alura-studio.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AluraStudio" />
        <meta property="og:description" content="AluraStudio - WordPress Themes and Plugins." />
        <meta property="og:image" content={`https://alura-studio.com${twitterCard}`} />
        <title>AluraStudio - WordPress Themes and Plugins.</title>
        <meta name="description" content="Alura Studio - WordPress Themes and Plugins." />
      </Head>
      <div className="px-8 py-10 space-y-2 md:space-5 bg-gray-900 rounded-lg">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Welcome to AluraStudio
            </p>
            <h2 className="mt-2 text-2xl font-semibold font-display text-white">
              Beautiful WordPress Themes and Plugins
              <br className="hidden sm:inline lg:hidden xl:inline" />
              <span className="text-blue-300"> crafted by AluraStudio.</span>
            </h2>
            <p className="mt-4 text-base text-gray-300 max-w-3xl mb-8">
            Tailwind UI is a collection of professionally designed, pre-built, fully responsive HTML snippets you can drop into your Tailwind projects. Get started by checking out our free preview components, or browsing the PNG previews in the categories you're most curious about.
            </p>
            <div className="w-full text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
              <a href="mailto:support@alura-studio.com"className="text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-10">
          Best-selling WordPress Themes
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          All the latest WordPress themes crafted by AluraStudio.
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-20 py-12">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link}>
              <article className="space-y-2 xl:space-y-0 xl:items-top ring-1 ring-black ring-opacity-5 rounded-sm">
                 <div>
                   <a className="inline-block" href={link} title={meta.title}>
                    <Image src={meta.image} className="object-cover h-full w-full rounded-t-sm" width={800} height={400} />
                   </a>
                 </div>
                <div className="py-3 px-4">
                  <div className="space-y-2">
                    <h2 className="text-base leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="text-sm max-w-none text-gray-500">
                      <Component />
                    </div>
                  </div>
                  <div className="text-sm leading-6 font-medium mt-4">
                    <Link href={link}>
                      <a
                        className="text-teal-500 hover:text-teal-600"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Details &rarr;
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
