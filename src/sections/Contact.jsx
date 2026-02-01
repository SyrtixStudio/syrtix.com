import { useState, useRef } from 'react';

import { useForm } from 'react-hook-form';

import {
  Phone,
  Mail,
  Building,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Shield,
  Lock,
} from 'lucide-react';

import { COMPANY } from '../constants';

const RATE_LIMIT_MS = 60000; // 1 minuto entre envíos
const MAX_SUBMISSIONS_PER_HOUR = 3;

function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000);
}

function Contact() {
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');
  const submissionTimestamps = useRef([]);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      deadline: '',
      features: [],
      message: '',
    },
  });

  const projectTypes = [
    { value: '', label: 'Selecciona un tipo de proyecto' },
    { value: 'landing', label: 'Landing Page' },
    { value: 'corporativo', label: 'Sitio Web Corporativo' },
    { value: 'ecommerce', label: 'Tienda Online / E-commerce' },
    { value: 'webapp', label: 'Aplicación Web' },
    { value: 'mobile', label: 'Aplicación Móvil' },
    { value: 'redesign', label: 'Rediseño de Sitio Existente' },
    { value: 'otro', label: 'Otro' },
  ];

  const budgetRanges = [
    { value: '', label: 'Selecciona tu presupuesto' },
    { value: '0-300', label: 'Menos de $300.000' },
    { value: '300-500', label: '$300.000 - $500.000' },
    { value: '500-1000', label: '$500.000 - $1.000.000' },
    { value: '1000-2000', label: '$1.000.000 - $2.000.000' },
    { value: '2000+', label: 'Más de $2.000.000' },
    { value: 'flexible', label: 'Presupuesto flexible' },
  ];

  const deadlineOptions = [
    { value: '', label: 'Selecciona el plazo' },
    { value: 'urgente', label: 'Urgente (menos de 2 semanas)' },
    { value: '1mes', label: '1 mes' },
    { value: '2meses', label: '2 meses' },
    { value: '3meses', label: '3 meses o más' },
    { value: 'flexible', label: 'Sin fecha límite' },
  ];

  const featureOptions = [
    { value: 'responsive', label: 'Diseño responsive' },
    { value: 'seo', label: 'Optimización SEO' },
    { value: 'blog', label: 'Blog integrado' },
    { value: 'ecommerce', label: 'Carrito de compras' },
    { value: 'payments', label: 'Pasarela de pagos' },
    { value: 'cms', label: 'Panel de administración' },
    { value: 'analytics', label: 'Google Analytics' },
    { value: 'chat', label: 'Chat en vivo' },
    { value: 'multilang', label: 'Multiidioma' },
    { value: 'booking', label: 'Sistema de reservas' },
  ];

  const onSubmit = async (data) => {
    const now = Date.now();

    // Rate limiting: verificar último envío
    const recentSubmissions = submissionTimestamps.current.filter(
      (ts) => now - ts < 3600000,
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
      setStatus('error');
      setServerMessage('Has excedido el límite de envíos. Intenta más tarde.');
      return;
    }

    const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_MS) {
      setStatus('error');
      setServerMessage('Por favor espera un momento antes de enviar nuevamente.');
      return;
    }

    setStatus('loading');
    setServerMessage('');

    // Sanitizar inputs
    const sanitizedData = {
      ...data,
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone),
      company: sanitizeInput(data.company),
      message: sanitizeInput(data.message),
    };

    const featuresText =
      sanitizedData.features?.length > 0
        ? sanitizedData.features
            .map((f) => featureOptions.find((opt) => opt.value === f)?.label)
            .join(', ')
        : 'Ninguna seleccionada';

    const projectTypeText =
      projectTypes.find((p) => p.value === sanitizedData.projectType)?.label ||
      sanitizedData.projectType;
    const budgetText =
      budgetRanges.find((b) => b.value === sanitizedData.budget)?.label || sanitizedData.budget;
    const deadlineText =
      deadlineOptions.find((d) => d.value === sanitizedData.deadline)?.label ||
      sanitizedData.deadline;

    const formData = new FormData();
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'syrtix.com - Nueva solicitud de cotización');
    formData.append('from_name', 'Cotización Web - syrtix.com');
    formData.append('name', sanitizedData.name);
    formData.append('email', sanitizedData.email);
    formData.append('phone', sanitizedData.phone);
    formData.append('company', sanitizedData.company || 'No especificada');
    formData.append('project_type', projectTypeText);
    formData.append('budget', budgetText);
    formData.append('deadline', deadlineText);
    formData.append('features', featuresText);
    formData.append('message', sanitizedData.message || 'Sin mensaje adicional');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        submissionTimestamps.current.push(now);
        setStatus('success');
        setServerMessage(
          '¡Gracias! Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas.',
        );
        reset();

        setTimeout(() => {
          setServerMessage('');
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setServerMessage(json.message || 'No pudimos enviar tu solicitud. Intenta nuevamente.');
      }
    } catch {
      setStatus('error');
      setServerMessage('No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos.');
    }
  };

  return (
    <section
      id="contacto"
      className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900"
    >
      <div className="absolute inset-0">
        <img
          src="/img/contacto.png"
          alt="Fondo contacto syrtix"
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: 'center' }}
        />
        {/* Viñeta superior */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-900 to-transparent"></div>
        {/* Viñeta inferior */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
        {/* Viñeta lateral izquierda */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
        {/* Viñeta lateral derecha */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900/50 to-transparent"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Solicita tu <span className="text-primary">cotización</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-300 text-gray-300 max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada sin compromiso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna izquierda: Información */}
            <div className="lg:col-span-1">
              <div className="bg-secondary p-6 text-white h-full">
                <h3 className="text-lg font-bold mb-6">Información de contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Building className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{COMPANY.name}</p>
                      <p className="text-white/70 text-xs">{COMPANY.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{COMPANY.phone}</p>
                      <p className="text-white/70 text-xs">Lun-Dom 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{COMPANY.email}</p>
                      <p className="text-white/70 text-xs">Respuesta en menos de 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Clock className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Horario de atención</p>
                      <p className="text-white/70 text-xs">Lunes a Domingo 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="text-primary mr-2" size={18} />
                    <p className="font-bold text-sm">¿Por qué elegirnos?</p>
                  </div>
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-primary mr-2" />
                      Cotización gratuita y sin compromiso
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-primary mr-2" />
                      Respuesta en menos de 24 horas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-primary mr-2" />
                      Precios transparentes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={14} className="text-primary mr-2" />
                      Soporte técnico incluido
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna derecha: Formulario */}
            <div className="lg:col-span-2">
                <div className="bg-base p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Detalles del proyecto</h3>
                <p className="text-xs text-gray-500 mb-6">
                  Completa lo esencial y, si quieres, agrega detalles opcionales para una
                  cotización más precisa.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Datos personales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tu nombre"
                        {...register('name', { required: 'El nombre es obligatorio' })}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Empresa (opcional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                        {...register('company')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="tu@email.com"
                        {...register('email', {
                          validate: (value) => {
                            const phone = getValues('phone');
                            if (!value && !phone) {
                              return 'Email o teléfono es obligatorio';
                            }
                            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                              return 'Email no válido';
                            }
                            return true;
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+56 9 1234 5678"
                        {...register('phone', {
                          validate: (value) => {
                            const email = getValues('email');
                            if (!value && !email) {
                              return 'Email o teléfono es obligatorio';
                            }
                            return true;
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Detalles del proyecto */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">
                      Tipo de proyecto *
                    </label>
                    <select
                      className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.projectType ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('projectType', { required: 'Selecciona un tipo' })}
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-red-600 text-xs mt-1">{errors.projectType.message}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">
                      Cuéntanos más sobre tu proyecto (opcional)
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows="4"
                      placeholder="Describe tu proyecto, objetivos, referencias de sitios que te gusten, etc."
                      {...register('message')}
                    ></textarea>
                  </div>

                  <details className="border border-gray-200 p-4">
                    <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                      Añadir más detalles (opcional)
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">
                            Presupuesto estimado
                          </label>
                          <select
                            className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...register('budget')}
                          >
                            {budgetRanges.map((range) => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">
                            Plazo deseado
                          </label>
                          <select
                            className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...register('deadline')}
                          >
                            {deadlineOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          Funcionalidades requeridas
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {featureOptions.map((feature) => (
                            <label
                              key={feature.value}
                              className="flex items-center text-xs cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                value={feature.value}
                                className="mr-2 accent-primary"
                                {...register('features')}
                              />
                              {feature.label}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>

                  {/* Honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  {/* Mensaje de estado */}
                  {serverMessage && (
                    <div
                      className={`p-4 text-sm flex items-center ${
                        status === 'success'
                          ? 'bg-green-50 border border-green-200 text-green-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                    >
                      {status === 'success' ? (
                        <CheckCircle className="mr-2 text-green-600" size={18} />
                      ) : (
                        <AlertCircle className="mr-2 text-red-600" size={18} />
                      )}
                      {serverMessage}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full font-bold py-3 text-sm transition duration-300 flex items-center justify-center ${
                      status === 'loading'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-primary text-gray-900 hover:bg-secondary hover:text-white'
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-gray-900 border-t-transparent animate-spin mr-2" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Solicitar cotización gratuita
                      </>
                    )}
                  </button>

                  {/* Separador */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">o contáctanos por</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  {/* Botón WhatsApp */}
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 transition duration-300 flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Escribir por WhatsApp
                  </a>

                  {/* Mensaje de seguridad y privacidad */}
                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <div className="flex items-center justify-center gap-4 text-xs text-green-800">
                      <div className="flex items-center">
                        <Lock size={14} className="mr-1 text-green-600" />
                        <span>Conexión segura SSL</span>
                      </div>
                      <div className="flex items-center">
                        <Shield size={14} className="mr-1 text-green-600" />
                        <span>Datos protegidos</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs text-center">
                    Al enviar este formulario, aceptas nuestra{' '}
                    <a href="/politica-privacidad" className="text-secondary hover:underline">
                      política de privacidad
                    </a>
                    . Tus datos están protegidos y nunca serán compartidos con terceros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
