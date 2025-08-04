import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import EachUtils from '../../../utils/EachUtils';
import { LIST_FOOTER_2 } from '../../../constanst/listFooter';
import Button from '../../Elements/Button';


interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(Boolean);

  return (
    <div className="sm:w-auto w-full mb-4 sm:mb-0 cursor-pointer sm:text-start">
      <Button
        variant="btn-default"
        className="sm:cursor-default w-full flex justify-between sm:block font-semibold mb-2 sm:text-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="sm:hidden">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </Button>

      <div className={`sm:block ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

const FooterList = () => {
  return (
    <EachUtils
      of={LIST_FOOTER_2}
      render={(item, index) => (
        <div key={index} className='flex flex-col mt-3 sm:mt-0'>
          <FooterSection
            title={item.title}
          >
            <ul>
              <li>
                {Array.isArray(item.list) && item.list.map((listItem: string, id: number) => (
                  <p key={id} className='text-sm font-normal font-dmsans'>{listItem}</p>
                ))}
              </li>
            </ul>
          </FooterSection>
        </div>
      )}
    />
  )
}

export default FooterList;