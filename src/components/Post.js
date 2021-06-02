import Head from 'next/head'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import tinytime from 'tinytime'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

export const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function Post({ meta, children, posts }) {
  const router = useRouter()
  const postIndex = posts.findIndex((post) => post.link === router.pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  return (
    <article className="xl:divide-y xl:divide-gray-200">
      <Head>
        <title>{meta.title} – {meta.description}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alurastudio" />
        <meta name="twitter:creator" content="@alurastudio" />
        <meta name="twitter:title" content={`${meta.title} – ${meta.description}`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://alura-studio.com${meta.image}`} />
        <meta property="og:url" content={`https://alura-studio.com${router.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} – ${meta.description}`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://alura-studio.com${meta.image}`} />
        <meta name="description" content={meta.description}></meta>
      </Head>
      <header className="pt-6 xl:pb-10">
        <div className="space-y-1 text-center">
          <div>
            <PageTitle>{meta.title} – {meta.description}</PageTitle>
            <div className="inline-grid grid-cols-2 gap-5 justify-center">
              <div>
                By &nbsp;
                {meta.authors.map((author) => (
                 <a className="text-blue-500 font-medium" href={author.link}>{author.name}</a>
                ))}
              </div>
              <div className="inline-flex gap-0 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#F2B827"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#F2B827"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#F2B827"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#F2B827"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#F2B827"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="divide-y xl:divide-y-0 divide-gray-200 flex pt-10 justify-center">
         <div className="rounded ring-1 ring-black ring-opacity-5">
           <div>
             <a href={meta.url} title={meta.title}>
              <Image src={meta.image} className="object-cover h-full w-full rounded-t-sm" width={590} height={300} />
             </a>
           </div>
           <div className="flex justify-center sm:space-x-6 py-3 px-4">
              <a href={meta.preview} title={meta.title} className="flex items-center gap-1 text-sm font-semibold bg-gray-800 text-white py-3 px-6 rounded hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"/></svg>
                Preview
              </a>
              <a href={meta.url} title={meta.title} className="flex items-center gap-1 text-sm font-semibold bg-blue-700 text-white py-3 px-6 rounded hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#ffffff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z"/><circle cx="6.5" cy="6.5" r="1.5"/></g></g></svg>
                Buy now
              </a>
           </div>
         </div>
         <div className="rounded ring-1 ring-black ring-opacity-5 max-w-xs w-full ml-6 p-4">
           <div className="flex justify-between border-b pb-4 items-center">
              <span className="font-semibold text-base">Regular Price</span>
              <span className="font-semibold text-2xl">{meta.price}</span>
           </div>
         </div>
      </div>


      <div
        className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20 mt-10"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
          <dt className="sr-only">Authors</dt>
          <dd>
            <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
              {meta.authors.map((author) => (
                <li key={author.twitter} className="flex items-center space-x-2">
                  <img src={author.avatar} alt="" className="w-10 h-10 rounded-full" />
                  <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900">{author.name}</dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      <a
                        href={`https://twitter.com/${author.twitter}`}
                        className="text-teal-500 hover:text-teal-600"
                      >
                        {author.twitter}
                      </a>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          {meta.discussion && (
            <div className="pt-6 pb-16">
              <p>
                Want to talk about this post?{' '}
                <a href={meta.discussion} className="font-medium text-teal-500 hover:text-teal-600">
                  Discuss this on GitHub &rarr;
                </a>
              </p>
            </div>
          )}
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">Next Article</h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/">
              <a className="text-teal-500 hover:text-teal-600">&larr; Back to the blog</a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
