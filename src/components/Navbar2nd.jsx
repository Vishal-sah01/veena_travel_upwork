export default function Navbar2nd() {
  return (
    <nav className="bg-[#172737] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between">
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
          <li className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Speciality Tours
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Customized Holidays
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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
