import { useState } from "react";
import { LIST_CATEGOTY } from "../../constanst/listCategory";
import EachUtils from "../../utils/EachUtils";
import type { LayoutProps } from "../types";
import Button from "../../components/Elements/Button";

const SectionLayout: React.FC<LayoutProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="px-3 mt-8 sm:w-[1200px] mx-auto">
      <h1 className="text-2xl sm:text-3xl font-poppins font-bold">Koleksi Video Pembelajaran Unggulan</h1>
      <p className="text-sm text-gray-500 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      <ul className='flex overflow-x-auto gap-11 justify-between sm:justify-start my-4'>
        <EachUtils
          of={LIST_CATEGOTY}
          render={(item, index) => (
            <li key={index}
              className='text-sm font-semibold text-textDark-secondary'>
              <Button
                variant="btn-default"
                className="text-left flex flex-col items-start group cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
                <div
                  className={`
                    w-12 mt-2 rounded-md border-b-4
                    transition
                    ${activeIndex === index
                      ? "border-main-tertiary"
                      : "border-transparent group-hover:border-main-tertiary"}
                  `}>
                </div>
              </Button>
            </li>
          )}
        />
      </ul>
      {children}
    </main>);
};

export default SectionLayout;