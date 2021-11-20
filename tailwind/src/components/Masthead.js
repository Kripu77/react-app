import React from 'react'
import capture from "../images/Capture.PNG"
const Masthead = () => {
    return (
      <section className="mx-auto sm:max-w-screen-xl sm:text-2xl text-justify p-4">
        <article className="text-center">
          <h1 className="text-4xl text-green-600"> Tailwind CSS</h1>
          <h1 className="text-xl sm:text-3xl text-center">
            {" "}
            This is a comprenshive tailwind css demo showing how it can be made
            responsive.
          </h1>
        </article>
        <article className="py-5">
          <img
            src="https://masilotti.com/images/tailwind-css.png"
            className="mx-auto sm:mt-4 sm:py-6 w-4/5"
            alt="image"
          />
          <h1> Why you should focus on learning Tailwind CSS?</h1>
          <h1 className="sm:text-xl text-gray-600 ">
            {" "}
            Tailwind CSS is easy to learn and the documentation available on
            Tailwind is a piece of cake to get started with Tailwind CSS. Here
            is a demo on how we can build a site using Tailwind CSS following
            the priniciple of responsive design. The princpiple concept that we
            need to understand is Tailwind CSS follows Mobile Design approach
            first. Hence, Tailwind has five different Breakpoints which we can
            use to make it adapt to any screen sizes.
          </h1>
        </article>
        <article className="py-5">
          <img
            src="https://www.grazitti.com/assets/2020/10/blog-image.jpg"
            alt="image"
            className="w-4/5 mx-auto py-6"
          />{" "}
          <h1> How to get started with Tailwind CSS?</h1>
          <h1 className="text-gray-600 sm:text-xl">
            {" "}
            In order to get started with Tailwind the process is simple and
            minimal configuration is required. You can refer to the
            documentation available in tailwind's offical page. The availablity
            of interactive guide makes the learning process interactive. You
            will need to simply install the tailwind css packagae and the
            dependecy to get started. Since Tailwind utilises the optimised
            verison. We have to install CRACO and replace the NPM run scripts
            with CRACO. You donot need to worry about the process. The process
            is super easy and documentation can be found if you check the
            officail website.
          </h1>
          <h1 className="sm:text-xl text-gray-600">
            {" "}
            The selling point of Taiwind I would say is JIT which referes to
            Just In Time Compilation, which ultimately minimizes the size of
            your CSS file in production which is highly handy in prodcution.
            Imagine those old days where you had to ship over 5 mega bytes of
            CSS file to the client that is browser ultimately slowing down your
            site resulting in negative user experience, but with JIT we can
            leave the work to Tailwind CSS and worry about design without even
            leaving our HTML. Personally, this has made me a big fan of
            tailwind.{" "}
          </h1>
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-green-500"
            target="blank"
          >
            Click here to visit the Link to installation guide.
          </a>
        </article>
        <article className="py-5">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1616325976381/7A4luAFTl.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            alt="info"
            className="w-4/5 mx-auto py-6"
          />
          <h1> How to enable JIT mode in Tailwind CSS and purgeCSS?</h1>
          <h1 className="sm:text-xl text-gray-600">
            Once you have installed the Tailwind CSS on your project root.
            Navigate to the tailwind.config.js file, where you can find
            following options.
          </h1>
          <img
            src={capture}
            alt="captured image"
            className="w-4/5 mx-auto py-6"
          />
          <h1 className='sm:text-xl text-gray-600'> Once you have navigated to the config file. Replace the purge conifg with:   </h1>
          <img/>
        </article>
      </section>
    );
}

export default Masthead
