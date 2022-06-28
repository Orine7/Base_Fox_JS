import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[90vh]">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span className="w-full h-full absolute bg-orange-300"></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="font-semibold text-5xl">
                    Bem vindo a Base Fox!
                  </h1>
                  <p className="mt-4 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec in molestie sapien. Proin pretium eu mauris non porta.
                    Curabitur id metus ut nisl maximus iaculis eget quis risus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-orange-300 -mt-24" id="about">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-5/12 px-4 mx-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal mt-4">
                  A Base
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Integer in vestibulum orci, vestibulum ultrices ligula. Fusce
                  consequat fermentum lobortis. Phasellus tempor mi a venenatis
                  gravida. Nam rutrum pharetra lacus, at blandit risus hendrerit
                  eget. Quisque rutrum odio tortor, non mattis tellus placerat
                  ut. Phasellus vel imperdiet dolor.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  In aliquet sed magna ac dictum. Nunc ullamcorper semper
                  egestas. Integer et commodo odio, et facilisis magna. Ut sit
                  amet mauris massa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-300 -mt-24" id="classes">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-5/12 px-4 mx-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal mt-4">
                  Aulas
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Integer in vestibulum orci, vestibulum ultrices ligula. Fusce
                  consequat fermentum lobortis. Phasellus tempor mi a venenatis
                  gravida. Nam rutrum pharetra lacus, at blandit risus hendrerit
                  eget. Quisque rutrum odio tortor, non mattis tellus placerat
                  ut. Phasellus vel imperdiet dolor.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  In aliquet sed magna ac dictum. Nunc ullamcorper semper
                  egestas. Integer et commodo odio, et facilisis magna. Ut sit
                  amet mauris massa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-300 -mt-24" id="staff">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-5/12 px-4 mx-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal mt-4">
                  Equipe Fox
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Integer in vestibulum orci, vestibulum ultrices ligula. Fusce
                  consequat fermentum lobortis. Phasellus tempor mi a venenatis
                  gravida. Nam rutrum pharetra lacus, at blandit risus hendrerit
                  eget. Quisque rutrum odio tortor, non mattis tellus placerat
                  ut. Phasellus vel imperdiet dolor.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  In aliquet sed magna ac dictum. Nunc ullamcorper semper
                  egestas. Integer et commodo odio, et facilisis magna. Ut sit
                  amet mauris massa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
