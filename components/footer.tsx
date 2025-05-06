import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Nuestra compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca-de-nosotros" className="text-gray-600 hover:text-purple-900">
                  Acerca de nosotros
                </Link>
              </li>
              <li>
                <Link href="/afiliados" className="text-gray-600 hover:text-purple-900">
                  Afiliados
                </Link>
              </li>
              <li>
                <Link href="/empleo" className="text-gray-600 hover:text-purple-900">
                  Empleo
                </Link>
              </li>
              <li>
                <Link href="/socios" className="text-gray-600 hover:text-purple-900">
                  Socios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">¿Tienes alguna pregunta?</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/centro-de-ayuda" className="text-gray-600 hover:text-purple-900">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="/avisos" className="text-gray-600 hover:text-purple-900">
                  Avisos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Eventos en vivo en todo el mundo</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/eventos/mexico" className="text-gray-600 hover:text-purple-900">
                  México
                </Link>
              </li>
              <li>
                <Link href="/eventos/peso-mexicano" className="text-gray-600 hover:text-purple-900">
                  Peso mexicano
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Suscríbete a nuestro boletín</h3>
            <p className="text-gray-600 mb-4">Recibe las últimas novedades, ofertas exclusivas y mucho más.</p>
            <div className="flex">
              <input type="email" placeholder="Correo electrónico" className="px-4 py-2 border rounded-l-md w-full" />
              <button className="bg-purple-900 text-white px-4 py-2 rounded-r-md hover:bg-purple-800">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-purple-900"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <span className="font-bold">FanProtect</span>
              </div>
              <p className="text-sm text-gray-600">Compra y vende con seguridad</p>
            </div>

            <div className="flex space-x-4">
              <Link href="/aviso-de-privacidad" className="text-gray-600 hover:text-purple-900 text-sm">
                Aviso de privacidad
              </Link>
              <Link href="/terminos-y-condiciones" className="text-gray-600 hover:text-purple-900 text-sm">
                Términos y condiciones
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-purple-900 text-sm">
                Cookies
              </Link>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-purple-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-900">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              © 2025 StubHub. Todos los derechos reservados. El uso de este sitio constituye la aceptación de nuestros
              Términos de uso y Política de privacidad. Este sitio no es un vendedor de boletos. Los vendedores fijan
              los precios, los cuales pueden ser mayores que su valor nominal.
            </p>
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <Link href="#">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="#">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Google Play"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
