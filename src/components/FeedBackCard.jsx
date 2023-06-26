import {quotes} from '../assets'

const FeedBackCard = ({content , name , title , img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="" className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins text-white font-normal text-[18px] leading-[32px] my-10'>{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt="" className='w-[48px] h-[48px] rounded-full'/>

        <div className='flex flex-col ml-4'>
          <h1 className='font-poppins text-white font-semibold text-[20px] leading-[32px]'>{name}</h1>
          <p className='font-poppins text-white font-normal text-[18px] leading-[32px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard