import React from 'react'

export default function Search() {
  return (
    <div className="w-[85%] h-auto mx-auto flex flex-col justify-center items-center">
        
            <div className="flex flex-col justify-center items-center py-4">
           
            </div>
      
       
            <h2 className="text-indigo-400 text-4xl font-medium italic drop-shadow-md">
              Travel to the stars, read!
            </h2>
       
          {/* SEARCH INPUT */}
          <div className="w-full drop-shadow-md py-8">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    <form class='search' >
                      <label for="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        
                        </div>
                        <input
                         name="search"
                          type='text'
                          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-teal-400 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 sm:text-2xl"
                          placeholder="Search"
                        ></input>
                        <button>Search</button>
                      </div>
                      </form>
                      {/* <AnchorLink className="flex justify-center" href="#Trending">Or see what others are reading!</AnchorLink> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
  )
}
