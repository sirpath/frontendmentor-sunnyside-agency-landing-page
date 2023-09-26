/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import ClientReview from '@/components/ClienReview'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Section from '@/components/Section'

const Home = () => (
  <section className="flex min-h-screen flex-col items-center justify-center md:max-w-7xl">
    <Header />
    <Section />
    <ClientReview />
    <Gallery />
    <Footer />
  </section>
)

export default Home
