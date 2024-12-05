import { MapPin, Navigation, Users2, Mountain, Sparkles, Heart, Building2, Palmtree, Crown, Plane, ArrowRight } from 'lucide-react';

export default function Navbar2nd() {
  return (
    <nav className="bg-[#172737] text-white border-t border-gray-700 relative z-40">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between relative">
          <li className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              India
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              World
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li className="group py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Speciality Tours
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 top-full w-[900px] bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
              <div className="p-4">
                {/* Popular & Available Tours Section */}
                <div className="mb-6">
                  <h2 className="text-blue-600 font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    POPULAR & AVAILABLE TOURS
                  </h2>
                  
                  <div className="grid grid-cols-3 gap-x-3 gap-y-2">
                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Honeymoon Special <span className="text-gray-500 text-sm">(32 Departures)</span></div>
                      <div className="text-sm text-gray-500">Embark on a journey of togetherness.</div>
                    </a>
                    
                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Road Trips <span className="text-gray-500 text-sm">(1 Departure)</span></div>
                      <div className="text-sm text-gray-500">Inspiring beautiful journeys & Scenic Routes.</div>
                    </a>
                    
                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Seniors' Special <span className="text-gray-500 text-sm">(61 Departures)</span></div>
                      <div className="text-sm text-gray-500">Golden age celebration tours for 55+ yrs.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Short Trips <span className="text-gray-500 text-sm">(60 Departures)</span></div>
                      <div className="text-sm text-gray-500">Quick getaways to stunning destinations.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Women's Special <span className="text-gray-500 text-sm">(80 Departures)</span></div>
                      <div className="text-sm text-gray-500">Exclusive handcrafted women only tours.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Family Tour Packages <span className="text-gray-500 text-sm">(876 Departures)</span></div>
                      <div className="text-sm text-gray-500">Veena World's safe, secure, and popular tours</div>
                    </a>
                  </div>
                </div>

                {/* Upcoming Tours Section */}
                <div>
                  <h2 className="text-blue-600 font-semibold mb-3 flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    UPCOMING TOURS
                  </h2>
                  
                  <div className="grid grid-cols-3 gap-x-3 gap-y-2">
                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Couples Only</div>
                      <div className="text-sm text-gray-500">Exclusive tours for middle aged couples.</div>
                    </a>
                    
                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Luxury Tours</div>
                      <div className="text-sm text-gray-500">Enjoy the sweet life of luxury & pampering.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">One Week One Place</div>
                      <div className="text-sm text-gray-500">Explore one place at a relaxed pace.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Post Tour Holidays</div>
                      <div className="text-sm text-gray-500">Explore the city after your big tour.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Treks & Hikes</div>
                      <div className="text-sm text-gray-500">Exiting adventure & challenges (15-55 yrs).</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">City Walks & Day Trips</div>
                      <div className="text-sm text-gray-500">Explore the city and culture.</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">WOW Adventures</div>
                      <div className="text-sm text-gray-500">Thrilling holidays for family (10-55 yrs).</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium">Students' Special</div>
                      <div className="text-sm text-gray-500">Dhamaal tours after 10th & 12th exams</div>
                    </a>

                    <a href="#" className="block hover:bg-gray-50 p-2 rounded">
                      <div className="font-medium flex items-center gap-2">
                        Women's Special with Kids
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">NEW</span>
                      </div>
                      <div className="text-sm text-gray-500">Travel with your kids (boys & girls, under 12 yrs)</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="group py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Customized Holidays
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 top-full w-[900px] bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
              <div className="p-6 flex gap-8">
                {/* Left Section - Menu Items */}
                <div className="flex-1">
                  <h2 className="text-blue-600 font-semibold mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    THEMED EXPERIENCES - Find your reason!
                  </h2>
                  
                  <div className="space-y-4">
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Users2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Family Fun</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Heart className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Romantic Holidays</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Building2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">City Breaks</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Palmtree className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Getaways</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Mountain className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Adventure Stories</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Crown className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Taj Holidays</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <Plane className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">Air Inclusive Holidays</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">NEW</span>
                    </a>
                  </div>
                </div>

                {/* Right Section - Featured Cards */}
                <div className="flex-1">
                  <a href="#" className="block mb-6">
                    <div className="relative rounded-lg overflow-hidden">
                      <img 
                        src="/luxury-holiday.jpg" 
                        alt="Luxury Holidays" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="mt-2">
                        <h3 className="font-medium text-lg flex items-center gap-2">
                          Luxury Holidays
                          <ArrowRight className="w-4 h-4" />
                        </h3>
                        <p className="text-gray-500">choose the right tailor-made luxury travel vacations</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="block">
                    <div className="relative rounded-lg overflow-hidden">
                      <img 
                        src="/island-getaway.jpg" 
                        alt="Island Getaways" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="mt-2">
                        <h3 className="font-medium text-lg flex items-center gap-2">
                          Island Getaways
                          <ArrowRight className="w-4 h-4" />
                        </h3>
                        <p className="text-gray-500">explore the tropical island getaways</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="py-2">
            <button className="hover:text-blue-400">
              Corporate Travel
            </button>
          </li>
          <li className="py-2">
            <button className="hover:text-blue-400">
              Inbound
            </button>
          </li>
          <li className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Forex
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li className="py-2">
            <button className="hover:text-blue-400">
              Gift a Tour
            </button>
          </li>
          <li className="py-2">
            <button className="hover:text-blue-400">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
