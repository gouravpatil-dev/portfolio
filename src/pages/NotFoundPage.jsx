import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

export default function NotFoundPage() {
  return <section><PageIntro eyebrow="// 404" title="This route hasn't been built yet." /><Link className="back-home" to="/"><ArrowLeft size={15} /> back home</Link></section>
}
