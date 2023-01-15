import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { sno } = router.query

  return <p>post is comming: {sno}</p>
}

export default Post;
