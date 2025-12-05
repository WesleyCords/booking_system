import SocialLink from '@/components/layout/SocialLink'
import { Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const links = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/wesleycords',
      icon: <Instagram />,
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/wesley-cordeiro-dev/',
      icon: <Linkedin />,
    },
    {
      label: 'Github',
      href: 'https://www.github.com/wesleycords',
      icon: <Github />,
    },
  ]
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className="flex h-[124px] w-full flex-col items-center justify-center gap-6 border-t px-4 py-2">
        <SocialLink sociais={links} />
        <span className="text-sm text-gray-500">
          &copy; {year} Booking System. All rights reserved.
        </span>
      </footer>
    </div>
  )
}

export default Footer
