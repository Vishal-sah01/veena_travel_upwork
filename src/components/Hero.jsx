import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-white pt-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[300px] bg-[url('/europe-america-banner.jpg')] bg-cover bg-center rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="h-full flex flex-col justify-center items-center p-8">
                <h1 className="text-4xl font-bold mb-2 text-center">
                  <span className="text-yellow-400">Europe</span>
                  <span className="text-white"> & </span>
                  <span className="text-yellow-400">America</span>
                </h1>
                <p className="text-white text-lg mb-6 text-center">
                  Always the right choice! Proven & trusted by thousands!
                </p>
                <div className="flex gap-4 justify-center">
                  <Link 
                    href="/europe-tours" 
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Europe Tours
                  </Link>
                  <Link 
                    href="/america-tours" 
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    America Tours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
