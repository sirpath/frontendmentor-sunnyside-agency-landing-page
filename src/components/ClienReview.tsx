import Image from 'next/image'
import { fontFraunces } from '@/styles/font'

const ClientReview = () => (
  <>
    <p className={`${fontFraunces.className} pt-10 uppercase tracking-widest text-neutral-dark-four md:pb-10 md:pt-20`}>
      Client testimonials
    </p>

    <div className="flex flex-col gap-10 px-5 text-center md:flex-row md:px-[15]">

      <div>
        <div className="flex justify-center">
          <Image className="scale-50 rounded-full " width={114} height={114} src="./images/image-emily.jpg" alt="Profile Emily" />
        </div>

        <p className="py-5 text-neutral-dark-two">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
        <p className={`${fontFraunces.className} font-extrabold`}>Emily R.</p>
        <p className="pt-2 text-xs text-neutral-dark-four">Marketing Director</p>
      </div>

      <div>
        <div className="flex scale-50 justify-center">
          <Image className="rounded-full" width={114} height={114} src="./images/image-thomas.jpg" alt="Profile Thomas" />
        </div>
        <p className="py-5 text-neutral-dark-two">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
        </p>
        <p className={`${fontFraunces.className} font-extrabold`}>Thomas S.</p>
        <p className="pt-2 text-xs text-neutral-dark-four">Chief Operating Officer</p>
      </div>

      <div>
        <div className="flex scale-50 justify-center">
          <Image className="rounded-full" width={114} height={114} src="./images/image-jennie.jpg" alt="Profile Jennie" />
        </div>
        <p className="py-5 text-neutral-dark-two">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>

        <p className={`${fontFraunces.className} font-extrabold`}>Jennie F.</p>
        <p className="pt-2 text-xs text-neutral-dark-four">Business Owner</p>
      </div>

    </div>

  </>
)

export default ClientReview
