
import content from '../data/content.js';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Slogan */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-toyota-gray-dark mb-4 font-cairo">
              الشعار
            </h3>
            <p className="text-gray-600 font-cairo leading-relaxed text-sm">
              {content.footer.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-toyota-gray-dark mb-4 font-cairo">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {content.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-toyota-red font-cairo text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-toyota-gray-dark mb-4 font-cairo">
              معلومات التواصل
            </h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center">
                <svg className="w-4 h-4 text-teal-500 ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href={`mailto:${content.contact.email}`}
                  className="text-gray-600 hover:text-toyota-red font-cairo text-sm transition-colors duration-200"
                >
                  {content.contact.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <svg className="w-4 h-4 text-teal-500 ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href={`tel:${content.contact.phone}`}
                  className="text-gray-600 hover:text-toyota-red font-cairo text-sm transition-colors duration-200"
                >
                  {content.contact.phone}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <svg className="w-4 h-4 text-teal-500 ml-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 font-cairo text-sm">
                  {content.contact.address}
                </span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center">
                <svg 
                  className="w-4 h-4 text-green-500 ml-3" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
                </svg>
                <a 
                  href={`https://wa.me/${content.contact.whatsapp.replace('+', '')}`}
                  className="text-gray-600 hover:text-toyota-red font-cairo text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-sm font-cairo">
            © {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
