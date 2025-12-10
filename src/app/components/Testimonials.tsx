import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className="relative w-[1440px] h-[530px]" style={{ marginTop: '125px' }}>
      <div className="absolute left-[0px] top-[0px] w-[1440px] h-[530px] bg-[#ffffff]"></div>
      <h1 className="absolute left-[525px] top-[0px] w-[389px] h-[71px] font-sharpsans text-[55px] leading-[71px] font-[760] text-[#a1603b] text-center uppercase whitespace-nowrap tracking-[-1px]">
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
        width={152}
        height={192}
        className="absolute left-[-511px] top-[171px] w-[152px] h-[192px] opacity-50"
        unoptimized
      />
      <div className="absolute left-[-511px] top-[171px] w-[152px] h-[192px] bg-[#ffffff] opacity-50" style={{ pointerEvents: 'none' }}></div>
      
      {/* Middle testimonial image - fully visible */}
      <Image
        src="/images/testimonial_1.png"
        alt="testimonilas image"
        width={152}
        height={192}
        className="absolute left-[342px] top-[171px] w-[152px] h-[192px]"
        unoptimized
      />
      
      {/* Right testimonial image - 50% opacity overlay */}
      <Image
        src="/images/testimonial_2.png"
        alt="testimonilas image"
        width={152}
        height={192}
        className="absolute left-[1195px] top-[171px] w-[152px] h-[192px] opacity-50"
        unoptimized
      />
      <div className="absolute left-[1195px] top-[171px] w-[152px] h-[192px] bg-[#ffffff] opacity-50" style={{ pointerEvents: 'none' }}></div>
      
      {/* Left testimonial brackets and text - 50% opacity */}
      <Image
        src="/images/brackets_start.png"
        alt="bracket start"
        width={108}
        height={71}
        className="absolute left-[-385px] top-[310px] w-[108px] h-[71px] opacity-50"
        unoptimized
      />
      <p className="absolute left-[-385px] top-[310px] w-[583px] h-[123px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d] opacity-50">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted.
      </p>
      <Image
        src="/images/brackets_end.png"
        alt="bracket end"
        width={108}
        height={71}
        className="absolute left-[198px] top-[310px] w-[108px] h-[71px] opacity-50"
        unoptimized
      />
      
      {/* Middle testimonial brackets and text - fully visible */}
      <Image
        src="/images/brackets_start.png"
        alt="bracket start"
        width={108}
        height={71}
        className="absolute left-[468px] top-[310px] w-[108px] h-[71px]"
        unoptimized
      />
      <p className="absolute left-[468px] top-[310px] w-[583px] h-[123px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d]">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted.
      </p>
      <Image
        src="/images/brackets_end.png"
        alt="bracket end"
        width={108}
        height={71}
        className="absolute left-[1051px] top-[310px] w-[108px] h-[71px]"
        unoptimized
      />
      
      {/* Right testimonial brackets and text - 50% opacity */}
      <Image
        src="/images/brackets_start.png"
        alt="bracket start"
        width={108}
        height={71}
        className="absolute left-[1321px] top-[310px] w-[108px] h-[71px] opacity-50"
        unoptimized
      />
      <p className="absolute left-[1321px] top-[310px] w-[583px] h-[123px] font-productsans text-[18px] leading-[30px] font-[400] text-[#4d4d4d] opacity-50">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted.
      </p>
      <Image
        src="/images/brackets_end.png"
        alt="bracket end"
        width={108}
        height={71}
        className="absolute left-[1904px] top-[310px] w-[108px] h-[71px] opacity-50"
        unoptimized
      />
    </div>
  );
}
