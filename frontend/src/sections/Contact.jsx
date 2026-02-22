import { useRef, useState } from 'react';

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
import { useLanguage } from '../i18n/index.jsx';

const RATE_LIMIT_MS = 60000;
const MAX_SUBMISSIONS_PER_HOUR = 3;

function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000);
}

function Contact() {
  const { lang } = useLanguage();
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');
  const submissionTimestamps = useRef([]);

  const copy =
    lang === 'en'
      ? {
          altBg: 'Contact background',
          headerPrefix: 'Request your ',
          headerHighlight: 'quote',
          headerDescription:
            'Tell us about your project and we will send you a personalized proposal with no commitment.',
          contactInfo: 'Contact information',
          companyDescription: 'Web Development Agency',
          supportHours: 'Mon-Sun 24/7',
          response24: 'Response in less than 24h',
          businessHoursTitle: 'Business hours',
          businessHoursValue: 'Monday to Sunday 24/7',
          whyChoose: 'Why choose us?',
          whyItems: [
            'Free quote with no commitment',
            'Response in less than 24 hours',
            'Transparent pricing',
            'Technical support included',
          ],
          projectDetails: 'Project details',
          projectDetailsDescription:
            'Complete the essentials and optionally add more details for a more accurate quote.',
          fullName: 'Full name *',
          yourName: 'Your name',
          companyOptional: 'Company (optional)',
          yourCompany: 'Your company name',
          email: 'Email',
          yourEmail: 'you@email.com',
          phone: 'Phone',
          projectType: 'Project type *',
          tellUsMore: 'Tell us more about your project (optional)',
          messagePlaceholder:
            'Describe your project, goals, and references of websites you like.',
          addMoreDetails: 'Add more details (optional)',
          estimatedBudget: 'Estimated budget',
          desiredDeadline: 'Desired timeline',
          requiredFeatures: 'Required features',
          loading: 'Sending request...',
          submit: 'Request free quote',
          orContact: 'or contact us via',
          whatsapp: 'Message us on WhatsApp',
          sslSecure: 'Secure SSL connection',
          protectedData: 'Protected data',
          privacyText: 'By sending this form, you accept our ',
          privacyLink: 'privacy policy',
          privacySuffix: '. Your data is protected and never shared with third parties.',
          validation: {
            nameRequired: 'Name is required',
            emailOrPhoneRequired: 'Email or phone is required',
            invalidEmail: 'Invalid email',
            selectProject: 'Select a project type',
          },
          rateLimitExceeded: 'You reached the submission limit. Please try again later.',
          waitBeforeSubmit: 'Please wait a moment before submitting again.',
          subject: 'New quote request from syrtix.com',
          fromName: 'Syrtix Web',
          submitSuccess: 'Message sent successfully!',
          submitError: 'Error sending the message.',
          connectionError: 'Connection error.',
          projectTypes: [
            { value: '', label: 'Select a project type' },
            { value: 'landing', label: 'Landing page' },
            { value: 'corporate', label: 'Corporate website' },
            { value: 'ecommerce', label: 'Online store / E-commerce' },
            { value: 'webapp', label: 'Web application' },
            { value: 'mobile', label: 'Mobile application' },
            { value: 'redesign', label: 'Existing website redesign' },
            { value: 'other', label: 'Other' },
          ],
          budgetRanges: [
            { value: '', label: 'Select your budget' },
            { value: '0-300', label: 'Less than $300.000 CLP' },
            { value: '300-500', label: '$300.000 - $500.000 CLP' },
            { value: '500-1000', label: '$500.000 - $1.000.000 CLP' },
            { value: '1000-2000', label: '$1.000.000 - $2.000.000 CLP' },
            { value: '2000+', label: 'More than $2.000.000 CLP' },
            { value: 'flexible', label: 'Flexible budget' },
          ],
          deadlineOptions: [
            { value: '', label: 'Select timeline' },
            { value: 'urgent', label: 'Urgent (less than 2 weeks)' },
            { value: '1month', label: '1 month' },
            { value: '2months', label: '2 months' },
            { value: '3months', label: '3 months or more' },
            { value: 'flexible', label: 'No deadline' },
          ],
          featureOptions: [
            { value: 'responsive', label: 'Responsive design' },
            { value: 'seo', label: 'SEO optimization' },
            { value: 'blog', label: 'Integrated blog' },
            { value: 'ecommerce', label: 'Shopping cart' },
            { value: 'payments', label: 'Payment gateway' },
            { value: 'cms', label: 'Admin panel' },
            { value: 'analytics', label: 'Google Analytics' },
            { value: 'chat', label: 'Live chat' },
            { value: 'multilang', label: 'Multi-language' },
            { value: 'booking', label: 'Booking system' },
          ],
        }
      : {
          altBg: 'Fondo contacto syrtix',
          headerPrefix: 'Solicita tu ',
          headerHighlight: 'cotizacion',
          headerDescription:
            'Cuentaños sobre tu proyecto y te enviaremos una propuesta personalizada sin compromiso.',
          contactInfo: 'Informacion de contacto',
          companyDescription: 'Agencia de desarrollo web',
          supportHours: 'Lun-Dom 24/7',
          response24: 'Respuesta en menos de 24h',
          businessHoursTitle: 'Horario de atencion',
          businessHoursValue: 'Lunes a Domingo 24/7',
          whyChoose: 'Por que elegirnos?',
          whyItems: [
            'Cotizacion gratuita y sin compromiso',
            'Respuesta en menos de 24 horas',
            'Precios transparentes',
            'Soporte tecnico incluido',
          ],
          projectDetails: 'Detalles del proyecto',
          projectDetailsDescription:
            'Completa lo esencial y, si quieres, agrega detalles opcionales para una cotizacion mas precisa.',
          fullName: 'Nombre completo *',
          yourName: 'Tu nombre',
          companyOptional: 'Empresa (opcional)',
          yourCompany: 'Nombre de tu empresa',
          email: 'Email',
          yourEmail: 'tu@email.com',
          phone: 'Telefono',
          projectType: 'Tipo de proyecto *',
          tellUsMore: 'Cuentaños mas sobre tu proyecto (opcional)',
          messagePlaceholder:
            'Describe tu proyecto, objetivos y referencias de sitios que te gusten.',
          addMoreDetails: 'Anadir mas detalles (opcional)',
          estimatedBudget: 'Presupuesto estimado',
          desiredDeadline: 'Plazo deseado',
          requiredFeatures: 'Funcionalidades requeridas',
          loading: 'Enviando solicitud...',
          submit: 'Solicitar cotizacion gratuita',
          orContact: 'o contactaños por',
          whatsapp: 'Escribir por WhatsApp',
          sslSecure: 'Conexion segura SSL',
          protectedData: 'Datos protegidos',
          privacyText: 'Al enviar este formulario, aceptas nuestra ',
          privacyLink: 'politica de privacidad',
          privacySuffix: '. Tus datos estan protegidos y nunca seran compartidos con terceros.',
          validation: {
            nameRequired: 'El nombre es obligatorio',
            emailOrPhoneRequired: 'Email o telefono es obligatorio',
            invalidEmail: 'Email no valido',
            selectProject: 'Selecciona un tipo',
          },
          rateLimitExceeded: 'Has excedido el limite de envios. Intenta mas tarde.',
          waitBeforeSubmit: 'Por favor espera un momento antes de enviar nuevamente.',
          subject: 'Nueva cotizacion desde syrtix.com',
          fromName: 'Syrtix Web',
          submitSuccess: 'Mensaje enviado correctamente!',
          submitError: 'Error al enviar el mensaje.',
          connectionError: 'Error de conexion.',
          projectTypes: [
            { value: '', label: 'Selecciona un tipo de proyecto' },
            { value: 'landing', label: 'Landing page' },
            { value: 'corporate', label: 'Sitio web corporativo' },
            { value: 'ecommerce', label: 'Tienda online / E-commerce' },
            { value: 'webapp', label: 'Aplicacion web' },
            { value: 'mobile', label: 'Aplicacion movil' },
            { value: 'redesign', label: 'ReDiseño de sitio existente' },
            { value: 'other', label: 'Otro' },
          ],
          budgetRanges: [
            { value: '', label: 'Selecciona tu presupuesto' },
            { value: '0-300', label: 'Menos de $300.000' },
            { value: '300-500', label: '$300.000 - $500.000' },
            { value: '500-1000', label: '$500.000 - $1.000.000' },
            { value: '1000-2000', label: '$1.000.000 - $2.000.000' },
            { value: '2000+', label: 'Mas de $2.000.000' },
            { value: 'flexible', label: 'Presupuesto flexible' },
          ],
          deadlineOptions: [
            { value: '', label: 'Selecciona el plazo' },
            { value: 'urgent', label: 'Urgente (menos de 2 semanas)' },
            { value: '1month', label: '1 mes' },
            { value: '2months', label: '2 meses' },
            { value: '3months', label: '3 meses o mas' },
            { value: 'flexible', label: 'Sin fecha limite' },
          ],
          featureOptions: [
            { value: 'responsive', label: 'Diseño responsive' },
            { value: 'seo', label: 'Optimizacion SEO' },
            { value: 'blog', label: 'Blog integrado' },
            { value: 'ecommerce', label: 'Carrito de compras' },
            { value: 'payments', label: 'Pasarela de pagos' },
            { value: 'cms', label: 'Panel de administracion' },
            { value: 'analytics', label: 'Google Analytics' },
            { value: 'chat', label: 'Chat en vivo' },
            { value: 'multilang', label: 'Multiidioma' },
            { value: 'booking', label: 'Sistema de reservas' },
          ],
        };

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

  const onSubmit = async (data) => {
    const now = Date.now();

    const recentSubmissions = submissionTimestamps.current.filter((ts) => now - ts < 3600000);

    if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
      setStatus('error');
      setServerMessage(copy.rateLimitExceeded);
      return;
    }

    const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_MS) {
      setStatus('error');
      setServerMessage(copy.waitBeforeSubmit);
      return;
    }

    setStatus('loading');
    setServerMessage('');

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
            .map((f) => copy.featureOptions.find((opt) => opt.value === f)?.label)
            .join(', ')
        : '';

    const projectTypeText =
      copy.projectTypes.find((p) => p.value === sanitizedData.projectType)?.label || '';
    const budgetText = copy.budgetRanges.find((b) => b.value === sanitizedData.budget)?.label || '';
    const deadlineText =
      copy.deadlineOptions.find((d) => d.value === sanitizedData.deadline)?.label || '';

    const formData = new FormData();
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append('subject', copy.subject);
    formData.append('from_name', copy.fromName);
    if (sanitizedData.name) formData.append('name', sanitizedData.name);
    if (sanitizedData.email) formData.append('from', sanitizedData.email);
    if (sanitizedData.phone) formData.append('phone', sanitizedData.phone);
    if (sanitizedData.company) formData.append('company', sanitizedData.company);
    if (projectTypeText && projectTypeText !== copy.projectTypes[0].label) {
      formData.append('projectType', projectTypeText);
    }
    if (budgetText && budgetText !== copy.budgetRanges[0].label) {
      formData.append('budget', budgetText);
    }
    if (deadlineText && deadlineText !== copy.deadlineOptions[0].label) {
      formData.append('deadline', deadlineText);
    }
    if (featuresText) formData.append('features', featuresText);
    if (sanitizedData.message) formData.append('message', sanitizedData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setStatus('success');
        setServerMessage(copy.submitSuccess);
        reset();
      } else {
        setStatus('error');
        setServerMessage(copy.submitError);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setServerMessage(copy.connectionError);
    }
    setTimeout(() => {
      setServerMessage('');
      setStatus('idle');
    }, 5000);
  };

  return (
    <section
      id="contacto"
      className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900"
    >
      <div className="absolute inset-0">
        <img
          src="/img/img-contacto.avif"
          alt={copy.altBg}
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900/50 to-transparent"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {copy.headerPrefix}
              <span className="text-primary">{copy.headerHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-300 text-gray-300 max-w-2xl mx-auto">
              {copy.headerDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-secondary p-6 text-white h-full">
                <h3 className="text-lg font-bold mb-6">{copy.contactInfo}</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Building className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{COMPANY.name}</p>
                      <p className="text-white/70 text-xs">{copy.companyDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{COMPANY.phone}</p>
                      <p className="text-white/70 text-xs">{copy.supportHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{COMPANY.email}</p>
                      <p className="text-white/70 text-xs">{copy.response24}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 mr-3">
                      <Clock className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{copy.businessHoursTitle}</p>
                      <p className="text-white/70 text-xs">{copy.businessHoursValue}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="text-primary mr-2" size={18} />
                    <p className="font-bold text-sm">{copy.whyChoose}</p>
                  </div>
                  <ul className="space-y-2 text-xs text-white/80">
                    {copy.whyItems.map((item) => (
                      <li key={item} className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-base p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{copy.projectDetails}</h3>
                <p className="text-xs text-gray-500 mb-6">{copy.projectDetailsDescription}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.fullName}</label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={copy.yourName}
                        {...register('name', { required: copy.validation.nameRequired })}
                      />
                      {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.companyOptional}</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={copy.yourCompany}
                        {...register('company')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.email}</label>
                      <input
                        type="email"
                        className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={copy.yourEmail}
                        {...register('email', {
                          validate: (value) => {
                            const phone = getValues('phone');
                            if (!value && !phone) {
                              return copy.validation.emailOrPhoneRequired;
                            }
                            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                              return copy.validation.invalidEmail;
                            }
                            return true;
                          },
                        })}
                      />
                      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.phone}</label>
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
                              return copy.validation.emailOrPhoneRequired;
                            }
                            return true;
                          },
                        })}
                      />
                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.projectType}</label>
                    <select
                      className={`w-full px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.projectType ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('projectType', { required: copy.validation.selectProject })}
                    >
                      {copy.projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-red-600 text-xs mt-1">{errors.projectType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.tellUsMore}</label>
                    <textarea
                      className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows="4"
                      placeholder={copy.messagePlaceholder}
                      {...register('message')}
                    ></textarea>
                  </div>

                  <details className="border border-gray-200 p-4">
                    <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                      {copy.addMoreDetails}
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">
                            {copy.estimatedBudget}
                          </label>
                          <select
                            className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...register('budget')}
                          >
                            {copy.budgetRanges.map((range) => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">{copy.desiredDeadline}</label>
                          <select
                            className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            {...register('deadline')}
                          >
                            {copy.deadlineOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">{copy.requiredFeatures}</label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {copy.featureOptions.map((feature) => (
                            <label key={feature.value} className="flex items-center text-xs cursor-pointer">
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

                  <input type="checkbox" name="botcheck" className="hidden" />

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
                        {copy.loading}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        {copy.submit}
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">{copy.orContact}</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 transition duration-300 flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {copy.whatsapp}
                  </a>

                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <div className="flex items-center justify-center gap-4 text-xs text-green-800">
                      <div className="flex items-center">
                        <Lock size={14} className="mr-1 text-green-600" />
                        <span>{copy.sslSecure}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield size={14} className="mr-1 text-green-600" />
                        <span>{copy.protectedData}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs text-center">
                    {copy.privacyText}
                    <a href="/politica-privacidad" className="text-secondary hover:underline">
                      {copy.privacyLink}
                    </a>
                    {copy.privacySuffix}
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
