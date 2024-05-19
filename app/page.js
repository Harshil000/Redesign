"use client"

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center border-b-2 border-gray-400 bg-white h-12 sticky top-0 z-20 p-4 lg:px-8">
        <div className="logo text-xl font-semibold cursor-pointer">Logo Here</div>
        <div className="hidden md:flex space-x-4">
          <div className="text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">Public</div>
          <div className="font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">Private</div>
          <div className="font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">Favourites</div>
          <div className="font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">Create</div>
          <div className="font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">About</div>
        </div>
        <div className="flex md:hidden space-x-4">
          <div className="text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">Menu</div>
        </div>
        <div className="md:flex items-center cursor-pointer hidden">
          <lord-icon src="https://cdn.lordicon.com/lecprnjb.json" trigger="hover" className="w-6 h-6">
          </lord-icon>
        </div>
      </nav>
      <main className="px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full items-center justify-evenly my-6 space-y-4 lg:space-y-0 lg:space-x-4">
          <form className="w-full lg:w-2/5 mx-auto">
            <div className="block mb-2 text-sm font-medium text-gray-900">Search</div>
            <div className="flex">
              {/* <select id="dropdown-button" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                <option>All categories</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select> */}
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm bg-gray-50 rounded-r-lg border-l-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Search Mockups, Logos, Design Templates..." required />
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-r-lg flex items-center justify-center">
                  <lord-icon src="https://cdn.lordicon.com/unukghxb.json" stroke="bold" colors="primary:#ffffff,secondary:#121212" trigger="hover" className="w-5 h-5">
                  </lord-icon>
                </button>
              </div>
            </div>
          </form>
          <form className="w-full lg:w-1/5 mx-auto">
            <label htmlFor="subcategory" className="block mb-2 text-sm font-medium text-gray-900">Subcategory</label>
            {/* <select id="subcategory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option>All</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select> */}
          </form>
          <form className="w-full lg:w-1/5 mx-auto">
            <label htmlFor="sortby" className="block mb-2 text-sm font-medium text-gray-900">Sort By</label>
            {/* <select id="sortby" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option>Views</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select> */}
          </form>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <form className="w-full lg:w-1/5">
            <label htmlFor="page" className="block mb-2 text-sm font-medium text-gray-900">Page</label>
            {/* <select id="page" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option>Page</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select> */}
          </form>
          <div className="flex items-center justify-center lg:justify-between gap-2 lg:gap-4">
            <span className="text-red-500 font-semibold">1-3</span>
            <span>of</span>
            <span className="text-red-500 font-semibold">265 Results</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="border-l-2 border-gray-400 flex items-center justify-center w-12 bg-gray-200 rounded-lg cursor-pointer py-1 px-3 transform scale-x-[-1]">
              <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" className="w-6 h-6">
              </lord-icon>
            </span>
            <span className="border-l-2 border-gray-400 flex items-center justify-center w-12 bg-gray-200 rounded-lg cursor-pointer py-1 px-3">
              <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" className="w-6 h-6">
              </lord-icon>
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full my-12 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="h-full lg:w-1/4 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="text-indigo-500 inline-flex items-center cursor-pointer hover:underline underline-offset-2">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm cursor-pointer">
                <lord-icon src="https://cdn.lordicon.com/ulnswmkk.json" trigger="morph" state="morph-heart" colors="primary:#dc2626" className="w-4 h-4">
                </lord-icon>6
              </span>
            </div>
          </div>
          <div className="h-full lg:w-1/4 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="text-indigo-500 inline-flex items-center cursor-pointer hover:underline underline-offset-2">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm cursor-pointer">
                <lord-icon src="https://cdn.lordicon.com/ulnswmkk.json" trigger="morph" state="morph-heart" colors="primary:#dc2626" className="w-4 h-4">
                </lord-icon>6
              </span>
            </div>
          </div>
          <div className="h-full lg:w-1/4 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="text-indigo-500 inline-flex items-center cursor-pointer hover:underline underline-offset-2">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm cursor-pointer">
                <lord-icon src="https://cdn.lordicon.com/ulnswmkk.json" trigger="morph" state="morph-heart" colors="primary:#dc2626" className="w-4 h-4">
                </lord-icon>6
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}