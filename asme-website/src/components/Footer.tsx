function Footer() {
  return (
    <div>
      <footer className="font-helvetica w-full mx-auto bg-[#262626] rounded-2xl p-6 md:p-6 flex flex-col gap-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="order-2 md:order-1">
            <p className="text-zinc-200 text-sm font-medium">
              &copy; ASME 2026. All rights reserved.
            </p>
          </div>

          <div className="flex flex-row gap-x-8 order-1 md:order-2">
            <a href="#" className="text-zinc-300 hover:text-white text-sm font-bold tracking-wide transition-colors duration-200">
              Instagram
            </a>
            <a href="#" className="text-zinc-300 hover:text-white text-sm font-bold tracking-wide transition-colors duration-200">
              LinkedIn
            </a>
            <a href="#" className="text-zinc-300 hover:text-white text-sm font-bold tracking-wide transition-colors duration-200">
              Start
            </a>
          </div>

        </div>

        <div className="flex justify-center md:justify-end">
            <p className="text-zinc-400 text-xs font-medium">
              Made with ❤️
            </p>
        </div>

      </footer>
    </div>
  );
}

export default Footer;