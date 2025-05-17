import { Mail, MapPin, Phone } from "lucide-react"
import SectionHeading from "./SectionHeading"
import ContactForm from "./ContactForm"

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "shirishshrestha25@gmail.com",
      link: "mailto:shirishshrstha25@gamil.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+977 981-10551811",
      link: "tel:+977 981-10551811",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Inaruwa-Sunsari, Nepal",
      link: null,
    },
  ]

  return (
    <div className="py-20 min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to chat? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-400">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-500 dark:text-white">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-400 dark:text-gray-400">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-6">Availability</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              I'm currently available for freelance work and full-time opportunities. If you have a project that needs
              my expertise, don't hesitate to reach out.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Response time: <span className="font-medium text-gray-400 dark:text-white">Within 24 hours</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
