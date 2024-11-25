import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [acceptedTerms, setAcceptedTerms] = useState({
    contact: false,
    terms: false
  });

  const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (acceptedTerms.contact && acceptedTerms.terms) {
      window.open('https://wkf.ms/3V1UKOP', '_blank');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-secondary">
            Consulta o Solicitud Especial
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Completa nuestro formulario de contacto y te responderemos a la brevedad.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-white p-8 rounded-xl shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="space-y-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="acceptContact"
                className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                checked={acceptedTerms.contact}
                onChange={(e) => setAcceptedTerms(prev => ({ ...prev, contact: e.target.checked }))}
              />
              <label htmlFor="acceptContact" className="ml-2 text-sm text-gray-600">
                Acepto ser contactado por el equipo de Procufy.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="acceptTerms"
                className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                checked={acceptedTerms.terms}
                onChange={(e) => setAcceptedTerms(prev => ({ ...prev, terms: e.target.checked }))}
              />
              <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-600">
                Acepto los{' '}
                <a 
                  href="https://drive.google.com/file/d/1z5QlphToSXGfDprWhU-uij0C5jxVmJFs/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  Términos y Condiciones
                </a>{' '}
                y la{' '}
                <a 
                  href="https://drive.google.com/file/d/1bXamS4j9UwLZQvRXJRqAWdisgtJMSx8e/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Política de Privacidad
                </a>.
              </label>
            </div>

            <button
              onClick={handleRedirect}
              disabled={!acceptedTerms.contact || !acceptedTerms.terms}
              className="w-full px-6 py-3 bg-primary text-secondary font-semibold rounded-full hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Ir al Formulario de Contacto
            </button>

            {(!acceptedTerms.contact || !acceptedTerms.terms) && (
              <p className="text-sm text-gray-500 text-center mt-4">
                Por favor, acepta los términos y condiciones para continuar.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}