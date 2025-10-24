'use client'
import React, { useRef, useState, FormEvent, ChangeEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EarthCanvas from './Earth'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin
gsap.registerPlugin(ScrollTrigger)

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const title1 = useRef<HTMLHeadingElement | null>(null)
  const title2 = useRef<HTMLHeadingElement | null>(null)
  const form = useRef<HTMLDivElement>(null)
  const earth = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    gsap.from(title1.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title1.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
    gsap.from(title2.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: title2.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
    gsap.from(form.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: form.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
    gsap.from(earth.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: earth.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      }
    })
  }, [])

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const serviceID = 'service_fef5ucj'
    const templateID = 'template_2b9asol'
    const publicKey = 'DPIkVAIZHvpFg307S'

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
        toast.success('Message sent successfully! 🎉', {
          position: 'top-right',
          autoClose: 3000,
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      },
      (error) => {
        console.log('FAILED...', error)
        toast.error('Failed to send message. Please try again! ❌', {
          position: 'top-right',
          autoClose: 3000,
        })
      }
    )
  }

  return (
    <>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />
      <div className="contact-wrapper flex flex-col items-center justify-center gap-y-9">
        <div className="contact-content-wrapper flex flex-col justify-center items-center">
          <h1
            ref={title1}
            className="title font-bold bg-[linear-gradient(to_bottom,_white,_black_90%)] bg-clip-text text-transparent text-[30px] sm:text-4xl lg:text-5xl"
          >
            READY TO START
          </h1>
          <h1
            ref={title2}
            className="title font-bold bg-[linear-gradient(to_bottom,_#8830da_40%,_black_90%)] bg-clip-text text-transparent text-4xl lg:text-5xl"
          >
            YOUR PROJECT?
          </h1>
        </div>
      </div>

      <div className="full-form-section flex flex-col-reverse justify-between items-center m-auto pt-10 sm:flex-row md:w-full lg:w-[90%] xl:w-[70%]">
        <div ref={form} className="form-wrapper w-full sm:w-[50%] py-7">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h2 className="title font-bold bg-[linear-gradient(to_bottom,_white,_black_90%)] bg-clip-text text-transparent text-[30px] sm:text-3xl lg:text-4xl">
              connect with me
            </h2>

            {/* Name */}
            <div className="relative mt-5 w-[70%]">
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-0 py-2 bg-transparent text-white text-sm border-b-2 border-gray-400 outline-none peer placeholder-transparent focus:border-purple-500"
                placeholder="name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-5 text-white text-sm transition-all duration-300 ease-in-out
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-500 cursor-text"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative mt-8 w-[70%]">
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-0 py-2 bg-transparent text-white border-b-2 border-gray-400 outline-none peer placeholder-transparent focus:border-purple-500"
                placeholder="email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-5 text-white text-sm transition-all duration-300 ease-in-out
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-500 cursor-text"
              >
                Email
              </label>
            </div>

            {/* Subject */}
            <div className="relative mt-8 w-[70%]">
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={handleChange}
                value={formData.subject}
                className="w-full px-0 py-2 bg-transparent text-white border-b-2 border-gray-400 outline-none peer placeholder-transparent focus:border-purple-500"
                placeholder="subject"
                required
              />
              <label
                htmlFor="subject"
                className="absolute left-0 -top-5 text-white text-sm transition-all duration-300 ease-in-out
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-500 cursor-text"
              >
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative mt-8 w-[70%]">
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                value={formData.message}
                className="w-full px-3 py-2 bg-transparent text-white border-2 border-gray-400 outline-none peer placeholder-transparent focus:border-purple-500 transition-colors min-h-[120px] resize-none"
                placeholder="message"
                required
                rows={4}
              />
              <label
                htmlFor="message"
                className="absolute px-2 left-2 -top-5 text-white bg-black text-sm capitalize transition-all duration-300 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-500 cursor-text"
              >
                message
              </label>
            </div>

            <div className="w-[70%] pt-5">
              <button
                className="p-2 w-full rounded-sm transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-800 to-blue-800 hover:scale-105 active:scale-95"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div
          ref={earth}
          className="3d-earth-wrapper w-full sm:w-[50%] h-[400px] sm:h-[370px] md:h-[500px] lg:h-[500px] xl:h-[700px]"
        >
          <EarthCanvas />
        </div>
      </div>
    </>
  )
}

export default Contact
