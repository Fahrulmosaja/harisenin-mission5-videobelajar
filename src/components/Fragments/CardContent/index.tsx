import { LIST_CONTENT } from "../../../constanst/listContent"
import EachUtils from "../../../utils/EachUtils"

const CardContentDashboard = () => {
  return (
    <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      <EachUtils
        of={LIST_CONTENT}
        render={(item, index) => (
          <div key={index} className='bg-white py-3 px-4 gap-3 flex flex-col mt-4 rounded-md'>
            <img
              src={item.image}
              alt="content-video"
            />
            <div className='flex sm:flex-col gap-2'>
              <h1 className='text-xl font-poppins font-semibold'>{item.title}</h1>
              <p className='text-sm font-normal font-dmsans hidden sm:block'>{item.desc}</p>
            </div>
            <div className='flex mt-2 gap-3'>
              <img
                src={item.imageProfile}
                alt="profile"
              />
              <div>
                <p className='text-sm font-normal font-dmsans'>{item.name}</p>
                <p className='text-sm font-normal font-dmsans'>{item.job}</p>
              </div>
            </div>
            <div className='relative my-3 flex gap-3 items-center'>
              <img
                className=''
                src={item.imageRating}
                alt="Rating"
              />
              <p className='text-sm font-normal font-dmsans'>{item.rating}
                <span> ({item.reviewCount})</span>
              </p>
              <p className='absolute top-0 right-0 text-xl font-bold font-dmsans text-textLight-quaternary'>{item.price}</p>
            </div>
          </div>
        )}
      />
    </div>

  )
};

export default CardContentDashboard;