import Link from 'next/link'
import Image from 'next/image'

const CustomLink = (props: { href: string; children: React.ReactNode }) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: { alt: string; src: string }) {
  return <Image className="rounded-lg" alt={props.alt} src={props.src} />
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
