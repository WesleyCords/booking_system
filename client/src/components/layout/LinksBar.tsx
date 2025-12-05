import ButtonMain from '../booking/Button'

interface Link {
  links: {
    label: string
    href: string
  }[]
}

const LinksBar = ({ links }: Link) => {
  const getLinks = links.map((link, index) => (
    <ButtonMain type="link" toLink={link.href} key={index}>
      {link.label}
    </ButtonMain>
  ))

  return <nav className="flex items-center gap-4">{getLinks}</nav>
}

export default LinksBar
