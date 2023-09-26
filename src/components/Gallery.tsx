import Image from 'next/image'

const Gallery = () => (
  <>
    <div className="grid grid-cols-2 pt-14 md:hidden [&_Image]:h-full [&_Image]:w-full [&_Image]:object-cover">
      <Image width={376} height={376} src="./images/mobile/image-gallery-milkbottles.jpg" alt="milk bottles" />
      <Image width={376} height={376} src="./images/mobile/image-gallery-orange.jpg" alt="orange" />
      <Image width={376} height={376} src="./images/mobile/image-gallery-cone.jpg" alt="cone" />
      <Image width={376} height={376} src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="cubes" />
    </div>
    <div className="hidden md:grid md:grid-cols-4 md:pt-32 [&_Image]:h-full [&_Image]:w-full [&_Image]:object-cover">
      <Image width={720} height={894} src="./images/desktop/image-gallery-milkbottles.jpg" alt="milk bottles" />
      <Image width={720} height={894} src="./images/desktop/image-gallery-orange.jpg" alt="orange" />
      <Image width={720} height={894} src="./images/desktop/image-gallery-cone.jpg" alt="cone" />
      <Image width={720} height={894} src="./images/desktop/image-gallery-sugarcubes.jpg" alt="cubes" />
    </div>
  </>
)

export default Gallery
