import BlockContent from '@sanity/block-content-to-react'
import { LoaderFunction, useLoaderData } from 'remix'
import { client } from '~/api/sanity'
import { CodeBlock } from '~/components/CodeBlock'

export const loader: LoaderFunction = async ({ params }) => {
  const posts = await client.fetch<any[]>(
    '*[_type == "post" && slug.current == $slug]',
    params
  )

  return posts[0]
}

const serializers = {
  types: {
    code: (props: any) => <CodeBlock {...props.node}/>,
  },
}

export default function Slug() {
  const post = useLoaderData()

  return (
    <div>
      <h1>{post.title}</h1>
      <BlockContent blocks={post.body} serializers={serializers} />
    </div>
  )
}