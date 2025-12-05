import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface SocialLinkProps {
  sociais: {
    label: string
    href: string
    icon: React.ReactNode
  }[]
}

const SocialLink = ({ sociais }: SocialLinkProps) => {
  const renderLinks = sociais.map((social, index) => (
    <TooltipProvider key={index}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={social.href}
            target="_blank"
            className="hover:text-primary text-gray-500 transition-all duration-200 hover:scale-110"
          >
            {social.icon}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{social.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ))
  return <div className="flex gap-6">{renderLinks}</div>
}

export default SocialLink
