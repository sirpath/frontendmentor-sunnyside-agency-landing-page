import Image from 'next/image'
import Link from 'next/link'
import { fontFraunces } from '@/styles/font'

const Section = () => (
  <main className="grid grid-cols-1 text-center md:grid-cols-2">

    <div>
      <Image className="h-full w-full object-cover md:hidden" width={750} height={624} alt="pictureEgg" src="./images/mobile/image-transform.jpg" />
      <Image className="hidden h-full w-full object-cover md:block" width={720} height={600} alt="pictureEgg" src="./images/desktop/image-transform.jpg" />
    </div>

    <div className="flex flex-col items-center px-8 pt-5 text-center md:col-start-1 md:row-start-1 md:items-start  md:justify-center md:px-10 md:text-left">

      <h1 className={`${fontFraunces.className} p-5 text-3xl font-extrabold md:pl-0 `}>Transform your brand</h1>
      <p className="text-neutral-dark-two">
        We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you.
      </p>

      <div className={`${fontFraunces.className} w-fit pb-10 pt-5 font-extrabold`}>
        <Link href="./">
          LEARN MORE
          <hr className="-mt-2 rounded border-4 border-underline-yellow/30" />
        </Link>
      </div>

    </div>

    <div className="md:col-start-1 md:row-start-2">
      <Image className="h-full w-full object-cover md:hidden" width={750} height={624} alt="pictureWineGlass" src="./images/mobile/image-stand-out.jpg" />
      <Image className="hidden h-full w-full object-cover md:block" width={720} height={600} alt="pictureWineGlass" src="./images/desktop/image-stand-out.jpg" />
    </div>

    <div className="flex flex-col items-center px-8 pt-5 text-center md:items-start md:justify-center md:px-10 md:text-left ">

      <h2 className={`${fontFraunces.className} p-5 text-3xl font-extrabold md:pl-0 `}>Stand out to the right audience</h2>
      <p className="text-neutral-dark-two">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
      </p>

      <div className={`${fontFraunces.className} w-fit pb-10 pt-5 font-extrabold`}>
        <Link href="./">
          LEARN MORE
          <hr className="-mt-2 rounded border-4 border-underline-red/30" />
        </Link>
      </div>

    </div>

    <div className="relative flex items-end justify-center">
      <div>
        <Image className="h-full w-full object-cover md:hidden" width={750} height={624} alt="pictureCherry" src="./images/mobile/image-graphic-design.jpg" />
        <Image className="hidden h-full w-full object-cover md:block" width={720} height={600} alt="pictureCherry" src="./images/desktop/image-graphic-design.jpg" />
      </div>
      <div className="absolute px-5 pb-5 md:px-[10%]">
        <h3 className={`${fontFraunces.className} pb-8 text-3xl font-extrabold text-graphic-font-color md:pb-0 lg:pb-8`}>
          Graphic design
        </h3>
        <p className="text-graphic-font-color"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
      </div>
    </div>

    <div className="relative flex items-end justify-center">
      <div>
        <Image className="h-full w-full object-cover md:hidden" width={750} height={624} alt="picturOrange" src="./images/mobile/image-photography.jpg" />
        <Image className="hidden h-full w-full object-cover md:block" width={720} height={600} alt="picturOrange" src="./images/desktop/image-photography.jpg" />
      </div>
      <div className="absolute px-5 pb-5 md:px-[10%]">
        <h4 className={`${fontFraunces.className} pb-8 text-3xl font-extrabold text-photo-font-color md:pb-4 lg:pb-8`}>Photography</h4>
        <p className="text-photo-font-color">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </div>

  </main>
)

export default Section
