import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Button from '@material-ui/core/Button'

export default function Video() {

  const router = useRouter()

  return (
    <Layout>
      <p>Video id: {router.query.id}</p>
      <Button onClick={() => router.push('/')}>Voltar</Button>
    </Layout>
  )
}