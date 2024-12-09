"use client"
import { Facebook, Youtube, Linkedin, Instagram, ArrowUp, Backpack } from 'lucide-react'
import { Building, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0B1523] text-white">
      {/* Top Contact Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-200">
          <div>
            <h3 className="text-gray-800 text-xl mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600" />
              Our Offices
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Located across the country, ready to assist in planning & booking your perfect vacation.
            </p>
            <Link href="/locate-us" className="text-blue-600 hover:underline">
              Locate Us
            </Link>
          </div>

          <div>
            <h3 className="text-gray-800 text-xl mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              Call us
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Request a quote, or just chat about your next vacation. We're always happy to help!
            </p>
            <Link href="tel:1800227979" className="text-blue-600 hover:underline">
              1800 22 7979
            </Link>
          </div>

          <div>
            <h3 className="text-gray-800 text-xl mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              Write to us
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Be it an enquiry, feedback or a simple suggestion, write to us.
            </p>
            <Link href="mailto:travel@veenaworld.com" className="text-blue-600 hover:underline">
              travel@veenaworld.com
            </Link>
          </div>

          <div>
            <h3 className="text-gray-800 text-xl mb-4">Connect with us</h3>
            <p className="text-gray-600 text-sm mb-3">
              Reviews, podcasts, blogs and more...
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <div className="flex items-center gap-2 mb-6">
            <Backpack className="h-12 w-12 text-white" />
            <span className="text-2xl font-semibold">Veena World</span>
          </div>
          <h4 className="text-lg font-semibold mb-4">Keep travelling all year round!</h4>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter to find travel inspiration in your inbox.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full p-2 bg-transparent border border-gray-600 rounded"
            />
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full p-2 bg-transparent border border-gray-600 rounded"
            />
            <div className="flex gap-2">
              <select className="p-2 bg-transparent border border-gray-600 rounded w-24">
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+65">+65 (SG)</option>
                <option value="+81">+81 (JP)</option>
                <option value="+86">+86 (CN)</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="flex-1 p-2 bg-transparent border border-gray-600 rounded"
                pattern="[0-9]{10}"
                maxLength={10}
              />
              <button className="px-6 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-6 grid grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Discover us</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white">Guests Reviews</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Our Team</Link></li>
              <li><Link href="#" className="hover:text-white">Tour Managers</Link></li>
              <li><Link href="#" className="hover:text-white">Sales Partners</Link></li>
              <li><Link href="#" className="hover:text-white">Become A Sales Partner</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">CSR Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Create Your Travel Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Leave Your Feedback</Link></li>
              <li><Link href="#" className="hover:text-white">How To Book</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Travel Deals</Link></li>
              <li><Link href="#" className="hover:text-white">COVID-19 Public Notice</Link></li>
              <li><Link href="#" className="hover:text-white">Singapore Visa</Link></li>
              <li><Link href="#" className="hover:text-white">Annual Return</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white">Tour Status</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Podcasts</Link></li>
              <li><Link href="#" className="hover:text-white">Video Blogs</Link></li>
              <li><Link href="#" className="hover:text-white">Articles By Veena Patil</Link></li>
              <li><Link href="#" className="hover:text-white">Articles By Sunila Patil</Link></li>
              <li><Link href="#" className="hover:text-white">Articles By Neil Patil</Link></li>
              <li><Link href="#" className="hover:text-white">Travel Planner</Link></li>
              <li><Link href="#" className="hover:text-white">Customized Travel Planner</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0A1219] py-4">
        <div className="container mx-auto px-4">
          <div className="text-xs text-gray-400 space-y-4">
            <p className="mb-2">
              <strong className="text-yellow-400">*Caution: Beware of Fake Promotions or Offers </strong>
              *Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill in your details. All Veena World authorized email communications are delivered from domain @veenaworld.com or @veenaworld.in or SMS from VNAWLD or 741324.
            </p>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-4">
                <span>© 2013 - 24 Veena Patil Hospitality Pvt Ltd. All Rights Reserved.</span>
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                <Link href="#" className="hover:text-white">Site Map</Link>
              </div>
              <div className="flex items-center gap-4">
                <span>🔒 Payments on website are secure</span>
                <img src="/security-badge-1.png" alt="Security Badge" className="h-8" />
                <img src="/security-badge-2.png" alt="Security Badge" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </button>
    </footer>
  )
}

