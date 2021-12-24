import {Link, useLoaderData} from 'remix'
import type {LoaderFunction} from 'remix'
import { client } from '~/api/sanity'
import { Body } from '~/components/Body'

export const loader: LoaderFunction = () => {
  const posts = client.fetch(
    '*[_type == "post"]',
    {}
  )

  return posts
}

export default function Index() {
  // TODO: Type definition for post content.
  const posts = useLoaderData<any[]>()

  return (
    <>
      <h1>ethancod.es</h1>

      {posts.map(post => (
        <div key={post.slug.current}>
          <h2>
            <Link to={`posts/${post.slug.current}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </>
  );
}
