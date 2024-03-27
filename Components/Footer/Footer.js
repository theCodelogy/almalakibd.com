import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer className="mt-12 bg-tertiary text-white print:hidden">
      <section className="container px-10 lg:px-16 pt-12 pb-24 relative">

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 md:gap-10 lg:gap-4">
          <section className="lg:col-span-3">
            <p className="text-center md:text-left mb-4 md:mb-8 font-SFProDisplaySemibold text-tiny tracking-[0.25rem] text-primary">SUPPORT</p>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <div className="duration-300 w-[275px] h-[71px] border-[1px] px-6 py-3 rounded-full border-white hover:border-primary flex items-center gap-4">
                <i className="bi bi-telephone-fill text-2xl"></i>
                <span className="w-[1px] bg-white h-full"></span>
                <div className="flex flex-col w-full">
                  <a className="text-xl tracking-wider hover:text-primary" href="tel:09678148148">09678148148</a>
                </div>
              </div>
              <a className="hover:text-primary duration-300 w-[275px] h-[71px] border-[1px] px-6 py-3 rounded-full border-white hover:border-primary flex items-center gap-4" href="/find-our-store">
                <i className="bi bi-geo-alt-fill text-2xl"></i>
                <span className="w-[1px] bg-white h-full"></span>
                <div className="flex flex-col justify-between h-full">
                  <p className="text-xs text-white">Store Locator</p>
                  <p className="text-xl tracking-wider">Find Our Stores</p>
                </div>
              </a>
              <div className="flex gap-2 justify-center md:justify-start px-6">
                <a aria-label="facebook" target="_blank" className="w-[40px] h-[40px] bg-icon duration-300 rounded text-tertiary flex justify-center items-center text-3xl hover:bg-[#3A5EAC] hover:text-white" href="https://www.facebook.com/applegadgetsltd"><i className="mt-[2px] bi bi-facebook"></i></a>
                <a aria-label="instagram" target="_blank" className="w-[40px] h-[40px] bg-icon duration-300 rounded text-tertiary flex justify-center items-center text-3xl hover:bg-insta hover:text-white" href="https://www.instagram.com/applegadgetsltd/"><i className="mt-[2px] bi bi-instagram"></i></a>
                <a aria-label="youtube" target="_blank" className="w-[40px] h-[40px] bg-icon duration-300 rounded text-tertiary flex justify-center items-center text-3xl hover:text-[#E30713] hover:bg-white" href="https://www.youtube.com/channel/UCXcwIGWOmTsXIbmiinJyLuw"><i className="mt-[2px] bi bi-youtube"></i></a>
                <a aria-label="tiktok" target="_blank" className="group w-[40px] h-[40px] bg-icon duration-300 rounded text-tertiary flex justify-center items-center text-3xl hover:bg-secondary hover:text-white" href="https://www.tiktok.com/@applegadgetsltd"><i className="mt-[2px] bi bi-tiktok relative z-[2]"></i><i className="mt-[2px] bi bi-tiktok absolute text-[#FF0000] z-[1] ml-1 opacity-0 group-hover:opacity-75"></i></a>
                <a aria-label="linkedin" target="_blank" className="w-[40px] h-[40px] bg-icon duration-300 rounded text-tertiary flex justify-center items-center text-3xl hover:bg-[#3A5EAC] hover:text-white" href="https://www.linkedin.com/company/applegadgetsltd"><svg xmlns="http://www.w3.org/2000/svg" className="fill-[#202020] hover:fill-[#fff]" viewBox="0 0 30 30" width="60px" height="60px"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path></svg></a>
              </div>
            </div>
          </section>

          </section>/


          
          </section>
          </footer>
        </div>
    );
};

export default Footer;