import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { allBlogs } from '.contentlayer/data'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '../components/MDXComponents'
import millisecondsToReadable from 'helpers/milisecondsToReadable'

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [post] = posts
  const Component = useMDXComponent(post.body.code)

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Goodmotion 2022</title>
      </Head>
      <main className="flex flex-col items-start justify-start mx-auto prose lg:prose-xl">
        <div className="relative w-full h-96">
          <Image src={post.image} layout="fill" alt="Goodmotion" />
        </div>
        <h2>{post.title}</h2>
        <div>{post.tags}</div>
        <div>{millisecondsToReadable(post.readingTime.time)}</div>
        <div>{post.publishedAt}</div>
        <div>{post.slugifyTags.map((t: slugifyTagsType) => t.slug)}</div>
        <Component components={components} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: allBlogs,
    },
  }
}

export default Home
