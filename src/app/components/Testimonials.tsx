import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className="relative w-[1440px] h-[530px]">
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[530px] bg-[#ffffff]"></div>
      <h1 className="absolute left-[525px] top-[0px] w-[389px] h-[71px] font-productsans text-[55px] leading-[71px] font-[760] text-[#a1603b]">
        Testimonials
      </h1>
      {/* Left testimonial card - 50% opacity overlay */}
      <div className="absolute left-[-545px] top-[260px] w-[823px] h-[200px] bg-[#ffffff]" style={{ boxShadow: '0px 10px 30px rgba(41, 77, 118, 0.080899)', borderRadius: '30px 10px' }}></div>
      <div className="absolute left-[-545px] top-[260px] w-[823px] h-[200px] bg-[#ffffff] opacity-50" style={{ borderRadius: '30px 10px', pointerEvents: 'none' }}></div>
      
      {/* Middle testimonial card - fully visible (focused) */}
      <div className="absolute left-[308px] top-[260px] w-[823px] h-[200px] bg-[#ffffff]" style={{ boxShadow: '0px 10px 30px rgba(41, 77, 118, 0.080899)', borderRadius: '30px 10px' }}></div>
      
      {/* Right testimonial card - 50% opacity overlay */}
      <div className="absolute left-[1161px] top-[260px] w-[823px] h-[200px] bg-[#ffffff]" style={{ boxShadow: '0px 10px 30px rgba(41, 77, 118, 0.080899)', borderRadius: '30px 10px' }}></div>
      <div className="absolute left-[1161px] top-[260px] w-[823px] h-[200px] bg-[#ffffff] opacity-50" style={{ borderRadius: '30px 10px', pointerEvents: 'none' }}></div>
      
      {/* Left testimonial image - 50% opacity overlay */}
      <Image
        src="/images/testimonial_1.png"
        alt="testimonilas image"
        width={92}
        height={132}
        className="absolute left-[-511px] top-[171px] w-[92px] h-[132px] opacity-50"
        unoptimized
      />
      <div className="absolute left-[-511px] top-[171px] w-[92px] h-[132px] bg-[#ffffff] opacity-50" style={{ pointerEvents: 'none' }}></div>
      
      {/* Middle testimonial image - fully visible */}
      <Image
        src="/images/testimonial_1.png"
        alt="testimonilas image"
        width={92}
        height={132}
        className="absolute left-[342px] top-[171px] w-[92px] h-[132px]"
        unoptimized
      />
      
      {/* Right testimonial image - 50% opacity overlay */}
      <Image
        src="/images/testimonial_2.png"
        alt="testimonilas image"
        width={92}
        height={132}
        className="absolute left-[1195px] top-[171px] w-[92px] h-[132px] opacity-50"
        unoptimized
      />
      <div className="absolute left-[1195px] top-[171px] w-[92px] h-[132px] bg-[#ffffff] opacity-50" style={{ pointerEvents: 'none' }}></div>
      
      {/* Left testimonial text - 50% opacity */}
      <p className="absolute left-[-385px] top-[310px] w-[583px] h-[123px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d] opacity-50">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted.
      </p>
      
      {/* Middle testimonial text - fully visible */}
      <p className="absolute left-[468px] top-[310px] w-[583px] h-[123px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d]">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted.
      </p>
      
      {/* Right testimonial text - 50% opacity */}
      <p className="absolute left-[1321px] top-[310px] w-[583px] h-[123px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d] opacity-50">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted.
      </p>
    </div>
  );
}
