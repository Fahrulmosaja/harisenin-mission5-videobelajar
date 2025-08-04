import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import EachUtils from '../../../utils/EachUtils';
import { LIST_FOOTER_2 } from '../../../constanst/listFooter';


const FooterList = () => {
  const [showDown, setShowDown] = useState<number | null>(null);

  return (
    <EachUtils
      of={LIST_FOOTER_2}
      render={(item, index) => (
        <div key={index} className='flex flex-col mt-3'>
          <button
            className="bg-main-primary text-white py-2 px-4 rounded-md font-semibold flex justify-between items-center transition-normal"
            onClick={() => setShowDown(showDown === index ? null : index)}
          >
            <span>{item.title}</span>
            <span>{showDown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {showDown === index && (
            <div className="flex flex-col py-2 rounded px-3 gap-2 text-sm text-textDark-primary font-normal font-dmsans bg-main-primary/50">
              {Array.isArray(item.list) && item.list.map((listItem: string, idx: number) => (
                <span
                  className='hover:underline cursor-pointer'
                  key={idx}
                >
                  {listItem}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    />
  )
}

export default FooterList;