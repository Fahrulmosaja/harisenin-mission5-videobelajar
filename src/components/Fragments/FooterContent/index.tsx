import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import EachUtils from "../../../utils/EachUtils";
import { LIST_FOOTER_1 } from "../../../constanst/listFooter";
import FooterList from "./FooterList";

const FooterContent = () => {
  return (
    <EachUtils
      of={LIST_FOOTER_1}
      render={(item, index) => (
        <div
          className="px-8 py-5 sm:py-10 sm:w-[1250px] mx-auto"
          key={index}>
          <div className="sm:flex-row sm:justify-between sm:items-center flex flex-col">
            <div>
            <img
              src={item.logoImage}
              alt="footer-logo"
              className="w-36 sm:w-32 md:w-38 mb-2"
              />
              <div className="flex flex-col gap-2 text-sm text-textDark-primary font-normal font-dmsans">
                <p className='font-semibold'>{item.title}</p>
                <p>{item.address}</p>
                <p>{item.phone}</p>
              </div>
            </div>
            <div className="mt-4">
              <FooterList />
            </div>
          </div>

          <div className='mt-4 bg-textDark-tertiary h-[2px]'></div>
          <div>
            <div className=' md:flex-row md:justify-between flex flex-col gap-3 mt-4'>
              <div className='flex gap-3'>
                <FaLinkedin className='text-3xl text-textDark-primary hover:text-main-primary cursor-pointer' />
                <FaFacebookSquare className='text-3xl text-textDark-primary hover:text-main-primary cursor-pointer' />
                <FaInstagramSquare className='text-3xl text-textDark-primary hover:text-main-primary cursor-pointer' />
                <FaTwitterSquare className='text-3xl text-textDark-primary hover:text-main-primary cursor-pointer' />
              </div>
              <div>
                <p className='text-sm text-textDark-primary font-normal font-dmsans'>@2023 Gerobak Sayur All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default FooterContent;