import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"

interface SocialIconsProps {
  className?: string
  iconSize?: number
}

export function SocialIcons({ className = "", iconSize = 20 }: SocialIconsProps) {
  return (
    <ul className={`flex space-x-4 ${className}`}>
      <li>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
          style={{ width: iconSize * 2, height: iconSize * 2 }}
        >
          <Facebook size={iconSize} />
          <span className="sr-only">Facebook</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors flex items-center justify-center"
          style={{ width: iconSize * 2, height: iconSize * 2 }}
        >
          <Twitter size={iconSize} />
          <span className="sr-only">Twitter</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 text-white p-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
          style={{ width: iconSize * 2, height: iconSize * 2 }}
        >
          <Instagram size={iconSize} />
          <span className="sr-only">Instagram</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center"
          style={{ width: iconSize * 2, height: iconSize * 2 }}
        >
          <Linkedin size={iconSize} />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://wa.me/5215512345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center"
          style={{ width: iconSize * 2, height: iconSize * 2 }}
        >
          <MessageCircle size={iconSize} />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </li>
    </ul>
  )
}
