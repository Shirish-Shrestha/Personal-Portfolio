"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS implementation
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_3u0z4kt', // Replace with your EmailJS service ID
          template_id: 'template_14ca3zn', // Replace with your EmailJS template ID
          user_id: 'AxtUAzK1P9PT7Otqp', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'shirishshrestha25@gmail.com'
          }
        })
      })

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again or email me directly." })
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const inputClasses = "w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500 transition-colors duration-200"

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          rows="4"
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </button>
      </div>

      {submitStatus && (
        <div className="pt-4">
          <p className={`text-sm ${
            submitStatus.type === "success" ? "text-green-600" : "text-red-600"
          }`}>
            {submitStatus.message}
          </p>
        </div>
      )}
    </form>
  )
}

export default ContactForm