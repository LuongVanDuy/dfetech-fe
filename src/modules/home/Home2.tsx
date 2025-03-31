import CustomButton from "@/components/CustomButton";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import { DateIcon } from "@/Icons/DateIcon";
import { MoreIcon } from "@/Icons/MoreIcon";
import { TimeIcon } from "@/Icons/TimeIcon";
import Image from "next/image";

export default function Home2() {
  return (
    <>
      <section className="bg-[#000] ">
        <div className="lg:px-[120px] ">
          <div className="grid grid-cols-1 md:grid-cols-10 ">
            <div className="md:col-span-6  text-white  rounded-lg">
              <div className="md:p-[45px] sm:p-[20px]">
                <h1 className="text-[#fff] md:text-[45px] sm:text-[35px] leading-[55px] my-5">
                  Training & Workshop
                </h1>
                <p className="text-[#ADB5BD]">
                  DFETECH offers on a variety of training courses. Training
                  courses are conducted by our team of application experts and
                  doctorate holders with application and industrial professional
                  experience
                </p>

                <CustomButton
                  type="primary"
                  className="min-w-[30px] !text-[14px] !py-[10px] !px-[20px] !font-thin my-[30px]"
                >
                  Booking Now
                </CustomButton>
                <div className="flex my-3 justify-between items-center">
                  <span className="text-[#ADB5BD]">Training courses:</span>
                  <div className="flex items-center">
                    <CustomButton type="icon">
                      <ChevronLeftIcon />
                    </CustomButton>
                    <CustomButton type="icon">
                      <ChevronRightIcon />
                    </CustomButton>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex items-center px-[45px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
                    <span className="text-[#fff] text-[60px]">01</span>
                    <p className="text-[#ADB5BD]">Introduction to LS-DYNA®</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4  text-white  rounded-lg">
              <Image
                src="/home/workshop.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="cursor-pointer w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="md:px-[120px]  ">
        <div className="border-[1px]">
          <section>
            <div className="md:p-[45px] sm:px-[10px]">
              <div className="flex justify-between">
                <h1 className="text-[40px] mb-[30px]">News</h1>
                <CustomButton
                  type="contact-home"
                  className="!font-thin md:block sm:hidden"
                >
                  See all →
                </CustomButton>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
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
                      <MoreIcon className="cursor-pointer" />
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
                      <MoreIcon className="cursor-pointer" />
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
                      <MoreIcon className="cursor-pointer" />
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
              <article className=" md:p-[45px] sm:p-[10px]  border-r-[1px]">
                <div className="flex justify-between items-center mb-[30px]">
                  <h1 className="text-[40px] ">Academy</h1>
                  <MoreIcon width={20} height={20} fill="#2C7656" />
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
                    <MoreIcon className="cursor-pointer" />
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Retaining ring notches, shoulders, chamfers, fillets: The
                    bore hole details are shown and exported in the drawing area
                    on th...
                  </p>
                </div>
              </article>
              <article className="md:p-[45px] sm:p-[10px]">
                <div className="flex justify-between items-center mb-[30px]">
                  <h1 className="text-[40px]">Events</h1>
                  <MoreIcon width={20} height={20} fill="#2C7656" />
                </div>
                <div className="flex flex-col gap-[40px]">
                  <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                    <div className="text-white lg:col-span-4">
                      <Image
                        src="/home/academy.png"
                        width={215}
                        height={150}
                        alt="Picture of the author"
                        className="w-[100%] cursor-pointer"
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
                            <TimeIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-[14px] text-[#495057] ">
                              3:00 PM - 4:00 PM
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DateIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-[14px] text-[#495057] ">
                              Dec 19 2024
                            </span>
                          </div>
                        </div>
                        <CustomButton
                          type="contact-home"
                          className="min-w-[30px] !text-[14px] !py-[8px] !px-[20px] !font-thin"
                        >
                          Register
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                    <div className="text-white lg:col-span-4">
                      <Image
                        src="/home/academy.png"
                        width={215}
                        height={150}
                        alt="Picture of the author"
                        className="w-[100%] cursor-pointer"
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
                            <TimeIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-[14px] text-[#495057] ">
                              3:00 PM - 4:00 PM
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DateIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-[14px] text-[#495057] ">
                              Dec 19 2024
                            </span>
                          </div>
                        </div>
                        <CustomButton
                          type="contact-home"
                          className="min-w-[30px] !text-[14px] !py-[8px] !px-[20px] !font-thin"
                        >
                          Register
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                    <div className="text-white lg:col-span-4">
                      <Image
                        src="/home/academy.png"
                        width={215}
                        height={150}
                        alt="Picture of the author"
                        className="w-[100%] cursor-pointer"
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
                            <TimeIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-[14px] text-[#495057] ">
                              3:00 PM - 4:00 PM
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DateIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-[14px] text-[#495057] ">
                              Dec 19 2024
                            </span>
                          </div>
                        </div>
                        <CustomButton
                          type="contact-home"
                          className="min-w-[30px] !text-[14px] !py-[8px] !px-[20px] !font-thin"
                        >
                          Register
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-[#0B0E15]">
        <div className="lg:px-[120px] sm:px-[10px]">
          <div className="p-[45px]">
            <h3 className="text-center text-[32px] text-[#ADB5BD] mb-[30px]">
              We are Trusted 15+ Countries Worldwide
            </h3>
            <div className="grid  grid-cols-3 gap-8 ">
              <div className="p-4 text-white text-center rounded-lg border-[1px] bg-gradient-radial from-green-500/80 to-green-900">
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
          <div className=" text-white  text-center">
            <Image
              src="/home/touch.jpg"
              width={215}
              height={150}
              alt="Picture of the author"
              className="w-[100%] cursor-pointer lg:hidden md:block"
            />
          </div>
          <div className="p-4 text-white text-start">
            <h3 className=" sm:text-[32px] lg:text-[48px] text-[#fff]">
              Get in touch with us
            </h3>
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
                <p className=" left-0 top-full mt-1 text-red-500 text-[12px]  transition-opacity ">
                  Salutation is required!
                </p>
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
    </>
  );
}
