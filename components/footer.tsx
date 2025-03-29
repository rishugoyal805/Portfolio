import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold inline-block mb-4">
              Rishu<span className="text-primary">Goyal</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
            "Building digital experiences that make a real impact. Let's collaborate and bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/rishugoyal805"
                target="_blank"
                className="hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/rishu0405"
                target="_blank"
                className="hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              {/* <Link
                href="https://twitter.com/rishugoyal"
                target="_blank"
                className="hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link
                href="mailto:rishugoyal16800@gmail.com"
                className="hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Noida, Uttar Pradesh, India</li>
                <li>
                  <Link
                    href="mailto:rishugoyal@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    rishugoyal@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+918059870163" className="text-gray-400 hover:text-primary transition-colors">
                    +91 8059870163
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rishu Goyal. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js and Tailwind CSS
          </div>
        </div> */}
      </div>
    </footer>
  )
}

