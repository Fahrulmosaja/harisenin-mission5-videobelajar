import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/FormInput/Input';
import { LIST_BANNER_2 } from '../../constanst/listBanner';
import EachUtils from '../../utils/EachUtils';


const BannerDashboardBottom = () => {
  return (
    <div className="mt-8 flex items-center justify-center px-3">
      <EachUtils
        of={LIST_BANNER_2}
        render={(item, index) => (
          <div key={index} className="relative">
            <div>
              <img
                className="sm:w-[1200px] h-[450px] object-cover z-0 rounded-xl brightness-[.3]"
                src={item.image}
                alt="Banner"
              />

              <div className='absolute w-full text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 px-4 sm:px-25'>
                <p className='text-base font-mono tracking-widest mb-2'> {item.news} </p>
                <h1 className='text-3xl font-poppins font-semibold mb-4 sm:text-5xl'>{item.title}</h1>
                <p className='text-sm font-normal font-dmsans mb-5 sm:text-base'>{item.desc}</p>

                <div className='flex w-full items-center'>
                  <div className='sm:bg-white py-2 px-4 mx-auto flex flex-col sm:flex-row gap-5 rounded'>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Masukkan Emailmu'
                      className='text-sm py-2 px-3 rounded-md text-textDark-primary sm:text-base bg-default-white'
                    />
                    <Button
                      variant='btn-secondary'
                      className='text-sm text-white py-2 px-3 rounded-md font-semibold sm:text-base cursor-pointer'
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default BannerDashboardBottom;