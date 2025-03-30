"use client";

import Image from "next/image";
import SwiperComponent from "./components/sliders/SwiperComponent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Image src="/home/top.png" alt="Logo" width={1920} height={979} />
      <section className="relative min-h-auto w-full flex flex-row items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0 bg-cover bg-no-repeat bg-center"></div>
        <div className="relative w-full">
          <SwiperComponent />
        </div>
      </section>

      {/* Tranning and workshop */}
      <section className="bg-[#000] ">
        <div className="lg:px-[120px] sm:px-[10px]">
          <div className="p-[45px]">
            <h1 className="text-[#fff] text-[45px] leading-[55px] mb-5">
              Training & Workshop
            </h1>
            <p className="text-[#ADB5BD]">
              DFETECH offers on a variety of training courses. Training courses
              are conducted by our team of application experts and doctorate
              holders with application and industrial professional experience
            </p>

            <button className="text-[#fff]">Booking Now</button>
            <div className="flex my-3">
              <span className="text-[#ADB5BD]">Training courses:</span>
              <div>
                <button>Next</button>
                <button>Prev</button>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex items-center px-[45px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
                <span className="text-[#fff] text-[60px]">01</span>
                <p className="text-[#ADB5BD]">Introduction to LS-DYNA®</p>
              </div>
              <div className="flex items-center px-[45px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
                <span className="text-[#fff] text-[60px]">02</span>
                <p className="text-[#ADB5BD]">
                  Introduction Analysis in LS-DYNA®
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New */}
      <div className="md:px-[120px] sm:px-[10px] ">
        <div className="border-[1px]">
          <section>
            <div className="p-[45px]">
              <div className="flex justify-between">
                <h1 className="text-[40px] mb-[30px]">News</h1>
                <button type="button">See All</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[48px]">
                <article className="overflow-hidden">
                  <Image
                    src="/home/new.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="cursor-pointer"
                  />
                  <div className="py-4">
                    <p className="text-sm text-green-600">19 Jan 2022</p>
                    <div className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-semibold mt-1">
                        PROFIL Version 6.4 is Released!
                      </h2>
                      <Image
                        src="/home/more.svg"
                        width={12}
                        height={12}
                        alt="More"
                        className="cursor-pointer"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      Retaining ring notches, shoulders, chamfers, fillets: The
                      bore hole details are shown and exported in the drawing
                      area on th...
                    </p>
                  </div>
                </article>
                <article className="overflow-hidden">
                  <Image
                    src="/home/new.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="cursor-pointer"
                  />
                  <div className="py-4">
                    <p className="text-sm text-green-600">19 Jan 2022</p>
                    <div className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-semibold mt-1">
                        PROFIL Version 6.4 is Released!
                      </h2>
                      <Image
                        src="/home/more.svg"
                        width={12}
                        height={12}
                        alt="More"
                        className="cursor-pointer"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      Retaining ring notches, shoulders, chamfers, fillets: The
                      bore hole details are shown and exported in the drawing
                      area on th...
                    </p>
                  </div>
                </article>
                <article className="overflow-hidden">
                  <Image
                    src="/home/new.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="cursor-pointer"
                  />
                  <div className="py-4">
                    <p className="text-sm text-green-600">19 Jan 2022</p>
                    <div className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-semibold mt-1">
                        PROFIL Version 6.4 is Released!
                      </h2>
                      <Image
                        src="/home/more.svg"
                        width={12}
                        height={12}
                        alt="More"
                        className="cursor-pointer"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      Retaining ring notches, shoulders, chamfers, fillets: The
                      bore hole details are shown and exported in the drawing
                      area on th...
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="border-t-[1px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className=" p-[45px]  border-r-[1px]">
                <div className="flex justify-between items-center mb-[30px]">
                  <h1 className="text-[40px] ">Academy</h1>
                  <Image
                    src="/home/more_large.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/home/academy.png"
                    width={550}
                    height={450}
                    alt="Picture of the author"
                  />
                </div>
                <div className="py-4">
                  <p className="text-sm text-green-600">19 Jan 2022</p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold mt-1">
                      PROFIL Version 6.4 is Released!
                    </h2>
                    <Image
                      src="/home/more.svg"
                      width={12}
                      height={12}
                      alt="More"
                      className="cursor-pointer"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Retaining ring notches, shoulders, chamfers, fillets: The
                    bore hole details are shown and exported in the drawing area
                    on th...
                  </p>
                </div>
              </article>
              <article className="p-[45px]">
                <div className="flex justify-between items-center mb-[30px]">
                  <h1 className="text-[40px]">Events</h1>
                  <Image
                    src="/home/more_large.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                      <div className="text-white lg:col-span-4">
                        <Image
                          src="/home/academy.png"
                          width={215}
                          height={150}
                          alt="Picture of the author"
                          className="w-[full] cursor-pointer"
                        />
                      </div>
                      <div className=" text-white lg:col-span-6 flex flex-col justify-between">
                        <div>
                          <p className="text-sm text-[#2C7656]">Events</p>
                          <h3 className="text-[#000] cursor-pointer">
                            Exploring Ansys Discovery – The Simulation Software
                            for Every Engineer
                          </h3>
                        </div>
                        <div className="flex justify-between">
                          <div className=" text-gray-700">
                            <div className="flex items-center space-x-2">
                              <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-[14px] text-[#495057] ">
                                3:00 PM - 4:00 PM
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 4h10M5 10h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"
                                />
                              </svg>
                              <span className="text-[14px] text-[#495057] ">
                                Dec 19 2024
                              </span>
                            </div>
                          </div>
                          <button className="text-[#000]">Register</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      {/* Touch */}
      <section className="bg-[#0B0E15]">
        <div className="lg:px-[120px] sm:px-[10px]">
          <div className="p-[45px]">
            <h3 className="text-center text-[32px] text-[#ADB5BD] mb-[30px]">
              We are Trusted 15+ Countries Worldwide
            </h3>
            <div className="grid  grid-cols-3 gap-8 ">
              <div className="p-4 text-white text-center rounded-lg border-[1px]">
                <h2 className="text-[38px] font-bold">100+</h2>
                <p className="text-[#ADB5BD]">Clients</p>
              </div>
              <div className=" p-4 text-white text-center rounded-lg border-[1px]">
                <h2 className="text-[38px] font-bold">100+</h2>
                <p className="text-[#ADB5BD]">Projects</p>
              </div>
              <div className=" p-4 text-white text-center rounded-lg border-[1px]">
                <h2 className="text-[38px] font-bold">50</h2>
                <p className="text-[#ADB5BD]">Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="touch-section min-h-[600px] lg:px-[120px] sm:px-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-[45px]">
          <div className=" text-white text-center"></div>
          <div className=" p-4 text-white text-start">
            <h3 className="text-[48px] text-[#fff]">Get in touch with us</h3>
            <p className="text-[#ADB5BD]">
              Drop us a note - we look forward to hearing from you
            </p>
            <form className="mt-8 flex flex-col  gap-9">
              <div className="relative">
                <select
                  title="country"
                  aria-label="country"
                  required
                  className="w-full border-b-[2px] border-[#333333] pb-2 bg-[#000] pt-4 outline-none peer text-white
               peer-invalid:border-red-500 appearance-none"
                >
                  <option value=""></option>
                  <option value="us">Salutation 1</option>
                  <option value="uk">Salutation 2</option>
                  <option value="vn">Salutation 3</option>
                </select>
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Salutation *
                </label>
                {/* <p className=" left-0 top-full mt-1 text-red-500 text-[12px]  transition-opacity ">
                  Salutation is required!
                </p> */}
              </div>
              <div className="flex lg:flex-row md:flex-col gap-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="first_name"
                    aria-label="first_name"
                    required
                    autoComplete="off"
                    className="w-full border-b pb-1 border-[#333333]  bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    First name *
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="first_name"
                    aria-label="first_name"
                    required
                    autoComplete="off"
                    className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    First name *
                  </label>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="email"
                    aria-label="Email"
                    required
                    autoComplete="off"
                    className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    Email address *
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="contact number"
                    aria-label="contact number"
                    required
                    autoComplete="off"
                    className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    Contact number *
                  </label>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="organization"
                    aria-label="organization"
                    required
                    autoComplete="off"
                    className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    Organization *
                  </label>
                </div>
                <div className="relative flex-1">
                  <select
                    title="country"
                    aria-label="country"
                    required
                    className="w-full border-b border-[#333333] pb-1 bg-[#000] pt-4 outline-none peer text-white
               peer-invalid:border-red-500 appearance-none"
                  >
                    <option value=""></option>
                    <option value="us">Salutation 1</option>
                    <option value="uk">Salutation 2</option>
                    <option value="vn">Salutation 3</option>
                  </select>
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    Job Level *
                  </label>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-6">
                <div className="relative flex-1">
                  <select
                    title="student"
                    aria-label="student"
                    required
                    className="w-full border-b border-[#333333] pb-1 bg-[#000] pt-4 outline-none peer text-white
               peer-invalid:border-red-500 appearance-none"
                  >
                    <option value=""></option>
                    <option value="us">Yes</option>
                    <option value="uk">No</option>
                  </select>
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    Are you a Students? *
                  </label>
                </div>

                <div className="relative flex-1">
                  <select
                    title="country"
                    aria-label="country"
                    required
                    className="w-full border-b border-[#333333] pb-1 bg-[#000] pt-4 outline-none peer text-white
               peer-invalid:border-red-500 appearance-none"
                  >
                    <option value=""></option>
                    <option value="us">Thái Lan</option>
                    <option value="uk">Việt Nam</option>
                    <option value="vn">Singapore</option>
                  </select>
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    Country/Region *
                  </label>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-6">
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="city"
                    aria-label="city"
                    required
                    autoComplete="off"
                    className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    City *
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    title="postal_code"
                    aria-label="postal_code"
                    required
                    autoComplete="off"
                    className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                  />
                  <label
                    className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                  >
                    PostalCode *
                  </label>
                </div>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  title="subject"
                  aria-label="subject"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
               peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Subject *
                </label>
              </div>
              <div className="relative">
                <textarea
                  title="message"
                  aria-label="message"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer resize-none text-white
               peer-invalid:border-red-500"
                  rows={5}
                ></textarea>
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
               peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
               peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Message *
                </label>
              </div>
              <button className="w-[100px]">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="text-center text-[#fff]  bg-[#0B0E15]">
        <div className="mx-auto px-[120px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l-[0.5px] border-r-[0.5px] border-[#2c2c2c]">
            <div className="pl-[45px] py-[45px] text-start border-r-[0.5px] border-[#2c2c2c]">
              <Link href={"/"}>
                <Image
                  src="/brands/Logo.svg"
                  alt="Logo"
                  width={113}
                  height={54}
                />
              </Link>
              <p className="mt-4 text-[#ADB5BD]">
                Engineered Solution. Our Passion.
              </p>
            </div>
            <div className="p-[45px] text-start border-r-[0.5px] border-[#2c2c2c]">
              <h2 className="text-[#fff] mb-2">Company</h2>
              <ul className="flex flex-col gap-2">
                <li className="text-[#ADB5BD]">
                  <Link href="/">About us</Link>
                </li>
                <li className="text-[#ADB5BD]">
                  <Link href="/">News & Events</Link>
                </li>
                <li className="text-[#ADB5BD]">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="p-[45px] text-start border-r-[0.5px] border-[#2c2c2c]">
              <h2 className="text-[#fff] mb-2">Platform</h2>
              <ul className="flex flex-col gap-2">
                <li className="text-[#ADB5BD]">
                  <Link href="/">Software Solutions</Link>
                </li>
                <li className="text-[#ADB5BD]">
                  <Link href="/">News & Events</Link>
                </li>
                <li className="text-[#ADB5BD]">
                  <Link href="/">Free trial</Link>
                </li>
              </ul>
            </div>
            <div className="p-[45px] text-start ">
              <h2 className="text-[#fff] mb-2">Terms</h2>
              <ul className="flex flex-col gap-2">
                <li className="text-[#ADB5BD]">
                  <Link href="/">Terms</Link>
                </li>
                <li className="text-[#ADB5BD]">
                  <Link href="/">Privacy</Link>
                </li>
                <li className="text-[#ADB5BD]">
                  <Link href="/">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-[#ADB5BD] text-start p-[45px] border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#2c2c2c]">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
