import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ─── Iconos SVG ───────────────────────────────────────────────────────────────

function CheckCircleIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function LightBulbIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function BeerIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M9 12v6" />
      <path d="M13 12v6" />
      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.5.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function ComplexProfile() {
  const { slug } = useParams()
  const [isVisible, setIsVisible] = useState(false)

  // Nombre del complejo formateado
  const complexName = slug 
    ? slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Complejo Deportivo'

  useEffect(() => {
    setIsVisible(true)
    
    // Actualizar título de la página
    document.title = `${complexName} - Canchas Premium | Zyra`
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `${complexName}: Las mejores canchas de fútbol sintético y voley playa en Cali. Iluminación LED profesional, tercer tiempo premium y parqueadero privado.`
      )
    }
    
    // Actualizar Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', `${complexName} - Reserva Tu Cancha Ya`)
    }
    
    // Actualizar Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        `🏆 Canchas de fútbol sintético y voley playa con instalaciones premium. Iluminación LED profesional y el mejor ambiente para tu equipo.`
      )
    }
    
    // Actualizar Twitter title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${complexName} - Reserva Tu Cancha Ya`)
    }
    
    // Actualizar Twitter description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 
        `🏆 Canchas de fútbol sintético y voley playa con instalaciones premium. Iluminación LED profesional y el mejor ambiente para tu equipo.`
      )
    }
  }, [complexName])

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        .animate-delay-4 { animation-delay: 0.4s; }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(57, 255, 20, 0.4);
        }
      `}</style>

      <div className="min-h-screen bg-black text-white">
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* 1. HERO SECTION - El Gancho Visual de Entrada */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Imagen de fondo con overlay oscuro */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80"
              alt="Cancha de fútbol iluminada de noche"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>

          {/* Contenido Hero */}
          <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] animate-fade-in-up">
              {complexName}: El templo del deporte aficionado en Cali
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-1">
              Las mejores canchas de fútbol sintético y arena de voley playa en un solo lugar. Iluminación profesional, ambiente premium y el tercer tiempo que tu equipo se merece.
            </p><br />
            
            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-2">
              <Link
                to={`/c/${slug}/reservar`}
                className="group relative bg-[#39FF14] text-black font-black text-base md:text-lg tracking-wider px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 hover-glow inline-flex items-center gap-3"
              >
                <span>RESERVAR YA</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              
              <button
                onClick={() => scrollToSection('disciplinas-section')}
                className="text-white font-bold text-base tracking-wide px-8 py-5 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Conocer Más
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* 2. GRID DE DISCIPLINAS - Fútbol & Voley en Tarjetas Visuales */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 px-6 bg-black" id="disciplinas-section">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#39FF14] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Nuestras Disciplinas
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Fútbol y Voley en un Solo Lugar
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
                Instalaciones de primer nivel para dos de los deportes más apasionantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Tarjeta 1 - Fútbol */}
              <Link
                to={`/c/${slug}/reservar`}
                className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-[#2e2e2e] hover:border-[#39FF14] transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80"
                    alt="Canchas de fútbol sintético"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Canchas de Fútbol Sintético
                  </h3>
                  <p className="text-gray-300 text-base mb-4">
                    Fútbol 5, 8 y 11. Gramilla de última generación.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#39FF14] font-bold text-sm">
                    <span>Reservar Ahora</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              {/* Tarjeta 2 - Voley */}
              <Link
                to={`/c/${slug}/reservar`}
                className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-[#2e2e2e] hover:border-[#39FF14] transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80"
                    alt="Canchas de voley playa"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Canchas de Voley Playa
                  </h3>
                  <p className="text-gray-300 text-base mb-4">
                    Arena premium importada. Experiencia de playa real.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#39FF14] font-bold text-sm">
                    <span>Reservar Ahora</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* 3. SECCIÓN DE VALOR - ¿Por qué jugar aquí? */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#39FF14] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                ¿Por qué jugar aquí?
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Resolvemos lo que otras canchas no hacen
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Todo está diseñado para que solo te preocupes por disfrutar el partido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tarjeta 1 */}
              <div className="group bg-[#111] border border-[#2e2e2e] rounded-2xl p-8 hover:border-[#39FF14] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-[#39FF14] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircleIcon />
                </div>
                <h3 className="text-xl font-black mb-3 text-white">
                  Gramilla y Arena Certificada
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tecnología que cuida tus articulaciones para jugar al máximo nivel sin lesiones.
                </p>
              </div>

              {/* Tarjeta 2 */}
              <div className="group bg-[#111] border border-[#2e2e2e] rounded-2xl p-8 hover:border-[#39FF14] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-[#39FF14] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LightBulbIcon />
                </div>
                <h3 className="text-xl font-black mb-3 text-white">
                  Iluminación LED Estadio
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cero puntos ciegos. Se juega de noche con visibilidad perfecta tipo profesional.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className="group bg-[#111] border border-[#2e2e2e] rounded-2xl p-8 hover:border-[#39FF14] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-[#39FF14] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon />
                </div>
                <h3 className="text-xl font-black mb-3 text-white">
                  Parqueadero Privado
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tu única preocupación es el partido, tu vehículo está seguro con nosotros.
                </p>
              </div>

              {/* Tarjeta 4 */}
              <div className="group bg-[#111] border border-[#2e2e2e] rounded-2xl p-8 hover:border-[#39FF14] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-[#39FF14] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BeerIcon />
                </div>
                <h3 className="text-xl font-black mb-3 text-white">
                  Tercer Tiempo Premium
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zona de comidas, pantallas gigantes y cervezas bien frías para el post-partido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* CTA INTERMEDIO - RESERVA AHORA */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#39FF14] via-[#2ecc0f] to-[#39FF14] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 tracking-tight">
              ¿Listo para reservar tu cancha?
            </h2>
            <p className="text-black/80 text-lg md:text-xl mb-10 font-bold">
              Consulta disponibilidad en tiempo real y asegura tu horario en segundos.
            </p>
            <Link
              to={`/c/${slug}/reservar`}
              className="inline-flex items-center gap-3 bg-black text-[#39FF14] font-black text-lg px-12 py-6 rounded-full hover:bg-[#1a1a1a] transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span>RESERVAR AHORA</span>
              <span className="text-2xl">⚽</span>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* 4. FOOTER INFORMATIVO Y DE CONTACTO */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <footer className="bg-black border-t border-[#1a1a1a] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Columna 1: Horarios */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[#39FF14]">
                    <ClockIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">Horarios de Atención</h3>
                </div>
                <div className="space-y-3 text-gray-400">
                  <p className="flex flex-col md:flex-row md:justify-between gap-1">
                    <span className="font-bold text-white">Lunes a Domingo:</span>
                    <span className="text-[#39FF14] font-mono">6:00 AM - 12:00 PM</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Abierto todos los días del año, incluyendo festivos.
                  </p>
                </div>
              </div>

              {/* Columna 2: Ubicación */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[#39FF14]">
                    <MapPinIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">Ubicación</h3>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Calle 5 #38-120, Barrio San Fernando<br />
                  Cali, Valle del Cauca, Colombia
                </p>
                <a
                  href="https://www.google.com/maps/search/Calle+5+38-120+Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#39FF14] font-bold text-sm hover:underline transition-all duration-300"
                >
                  <span>Abrir en Google Maps</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Columna 3: Contacto */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[#39FF14]">
                    <WhatsAppIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">Contacto Directo</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  ¿Tienes alguna pregunta sobre disponibilidad, torneos o eventos? Escríbenos ahora.
                </p>
                <a
                  href="https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20las%20canchas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <WhatsAppIcon />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#39FF14] flex items-center justify-center">
                  <span className="text-2xl font-black text-black">
                    {complexName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-black text-lg">{complexName}</p>
                  <p className="text-gray-500 text-xs">Complejo Deportivo Premium</p>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm text-center md:text-right">
                <p>© 2026 {complexName}. Todos los derechos reservados.</p>
                <p className="text-xs mt-1">Powered by Zyra Sports Platform</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
