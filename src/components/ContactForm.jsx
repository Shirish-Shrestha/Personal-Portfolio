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

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus({ type: "success", message: "Message sent successfully!" })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={18} className="ml-2" />
          </>
        )}
      </button>

      {submitStatus && (
        <div
          className={`p-3 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
              : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  )
}

export default ContactForm
