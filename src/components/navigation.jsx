export default function Navigation () {
    return (
        <nav className="flex items-center px-8 gap-12 bg-hero-pattern bg-cover min-h-20 text-white bg-[#F5F5DC] text-2xl font-bold">
          <a className="text-3xl font-bold" href="/">Toshie Latin</a>
          <a className="ml-[auto] hidden md:block" href="/">About Me</a>
          <a className="hidden md:block" href="/portfolio">Portfolio</a>
          <a className="hidden md:block" href="/contact">Contact</a>
          <a className="hidden md:block" href="/resume">Resume</a>
          <button className="ml-auto md:hidden peer"><img src={'/icon-hamburger.svg'} width={20} height={150} alt="menu"></img></button>
          <div className="fixed bg-blue-950 left-0 top-0 min-h-full w-full opacity-95 px-[5%] flex flex-col hidden peer-focus:flex">
            <div className="flex justify-between py-4">
              <a className="text-white text-2xl font-bold p-4" href="/"><p>Toshie Latin</p></a>
              <button><img src='' alt="close" /></button>
            </div>
            <div className="flex flex-col text-white justify-center items-center *:border-t *:border-gray-700 mb-8">
              <a className="w-full text-center py-4" href="/">About Me</a>
              <a className="w-full text-center py-4" href="/portfolio">Portfolio</a>
              <a className="w-full text-center py-4 border-b" href="/contact">Contact</a>
              <a className="hidden md:block" href="/resume">Resume</a>
            </div>
            <button className="w-full border-2 p-1 px-4 text-white rounded font-bold p-2">LOGIN</button>
            <div className='md:ml-auto flex gap-8 items-center mt-auto justify-center my-8'>
              <a href="https://github.com/Toshiebop18?tab=repositories" target="_blank" rel={'noreferrer'}><img src="/icon-github.svg" alt="github" className="w-12" /></a>
              <a href="/"><img src="/icon-linkedin.svg" alt="linkedin" className="w-12" /></a>
          </div>
          </div>
      </nav>
    )
}