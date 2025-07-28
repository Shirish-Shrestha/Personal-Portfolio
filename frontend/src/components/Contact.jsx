import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "./ContactForm"

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "shirishshrestha25@gmail.com",
      link: "mailto:shirishshrestha25@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+977 981-1055181",
      link: "tel:+9779811055181",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Inaruwa-Sunsari, Nepal",
      link: null,
    },
  ]

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-normal text-gray-900 mb-8">Let's connect</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-gray-100 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-900">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="pt-8 border-t border-gray-100">
              <h4 className="text-lg font-normal text-gray-900 mb-4">Availability</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Currently available for freelance projects and full-time opportunities.
              </p>
              <p className="text-gray-600 text-sm">
                Response time: <span className="text-gray-900 font-medium">Within 24 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-normal text-gray-900 mb-8">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact