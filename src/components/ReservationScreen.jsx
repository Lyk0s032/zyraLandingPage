import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import videoExample from '../assets/videoExample.mp4'

// ─── Datos de demo ────────────────────────────────────────────────────────────

const SPORTS = ['Fútbol', 'Tenis', 'Pádel']

const ALL_COURTS = [
  {
    id: 1,
    name: 'Cancha de Fútbol 5',
    sport: 'Fútbol',
    tags: ['Sintética', 'Techada', 'LED'],
    price: 60000,
    image:
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80',
    video: videoExample,
    location: {
      lat: 4.6097100,
      lng: -74.0817500,
      address: 'Calle 123 #45-67, Bogotá',
    },
    gallery: [
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80',
      'https://images.unsplash.com/photo-1551958219-acbc595b9ead?w=800&q=80',
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
    ],
    description: 'Cancha profesional de fútbol 5 con césped sintético de última generación. Totalmente techada y con sistema de iluminación LED de alta potencia para partidos nocturnos. Perfecta para torneos y entrenamientos profesionales.',
    features: [
      { label: 'Tipo de Superficie', value: 'Césped Sintético Premium' },
      { label: 'Techada', value: 'Sí, completamente cubierta' },
      { label: 'Iluminación', value: 'LED de Alta Potencia' },
      { label: 'Dimensiones', value: '40m x 20m' },
      { label: 'Capacidad', value: '10 jugadores + 50 espectadores' },
      { label: 'Vestuarios', value: 'Disponibles con duchas' },
    ],
  },
  {
    id: 2,
    name: 'Cancha Número 2',
    sport: 'Fútbol',
    tags: ['Grass Natural', 'Iluminada'],
    price: 55000,
    image:
      'https://images.unsplash.com/photo-1551958219-acbc595b9ead?w=800&q=80',
    video: videoExample,
    location: {
      lat: 4.6097100,
      lng: -74.0817500,
      address: 'Calle 123 #45-67, Bogotá',
    },
    gallery: [
      'https://images.unsplash.com/photo-1551958219-acbc595b9ead?w=800&q=80',
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80',
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80',
    ],
    description: 'Cancha de fútbol con césped natural perfectamente mantenido. Ideal para quienes buscan la sensación del juego tradicional en grass natural con excelente sistema de drenaje.',
    features: [
      { label: 'Tipo de Superficie', value: 'Grass Natural Mantenido' },
      { label: 'Techada', value: 'No' },
      { label: 'Iluminación', value: 'Reflectores LED' },
      { label: 'Dimensiones', value: '38m x 18m' },
      { label: 'Capacidad', value: '10 jugadores' },
      { label: 'Drenaje', value: 'Sistema profesional' },
    ],
  },
  {
    id: 3,
    name: 'Court de Tenis A',
    sport: 'Tenis',
    tags: ['Polvo de Ladrillo', 'Nocturna'],
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1544298621-35a764f3b079?w=800&q=80',
    video: videoExample,
    location: {
      lat: 4.6097100,
      lng: -74.0817500,
      address: 'Calle 123 #45-67, Bogotá',
    },
    gallery: [
      'https://images.unsplash.com/photo-1544298621-35a764f3b079?w=800&q=80',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&q=80',
    ],
    description: 'Court profesional de tenis con superficie de polvo de ladrillo tipo arcilla, ideal para entrenamientos y torneos. Excelente sistema de iluminación nocturna.',
    features: [
      { label: 'Tipo de Superficie', value: 'Polvo de Ladrillo / Arcilla' },
      { label: 'Techada', value: 'No' },
      { label: 'Iluminación', value: 'Sistema Nocturno LED' },
      { label: 'Dimensiones', value: 'Reglamentarias ITF' },
      { label: 'Red', value: 'Profesional regulable' },
      { label: 'Asientos', value: '20 espectadores' },
    ],
  },
  {
    id: 4,
    name: 'Pádel Court 1',
    sport: 'Pádel',
    tags: ['Cristal', 'Techada', 'LED'],
    price: 70000,
    image:
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
    video: videoExample,
    location: {
      lat: 4.6097100,
      lng: -74.0817500,
      address: 'Calle 123 #45-67, Bogotá',
    },
    gallery: [
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
    ],
    description: 'Cancha de pádel premium con paredes de cristal templado y césped sintético de competición. Totalmente techada con iluminación LED profesional para juego nocturno.',
    features: [
      { label: 'Tipo de Superficie', value: 'Césped Sintético Competición' },
      { label: 'Paredes', value: 'Cristal Templado Profesional' },
      { label: 'Techada', value: 'Sí, estructura metálica' },
      { label: 'Iluminación', value: 'LED Alta Definición' },
      { label: 'Dimensiones', value: '20m x 10m (Reglamentarias)' },
      { label: 'Zona de Descanso', value: 'Bancos integrados' },
    ],
  },
]

const BASE_TIMES = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
  '19:00', '20:00', '21:00',
]

// ─── Utilidades ───────────────────────────────────────────────────────────────

const DAY_NAMES = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']
const MONTH_NAMES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

function generateDates(count = 12) {
  const today = new Date()
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return { id: i, day: DAY_NAMES[d.getDay()], num: d.getDate(), month: MONTH_NAMES[d.getMonth()] }
  })
}

function formatSlug(slug) {
  if (!slug) return ''
  return slug.split(/[-_]/).map(w => w.toUpperCase()).join(' ')
}

function formatPrice(n) {
  return `$ ${n.toLocaleString('es-CO')}`
}

function addMinutes(time, mins) {
  const [h, m] = time.split(':').map(Number)
  const total = h * 60 + m + mins
  const pad = n => String(n).padStart(2, '0')
  return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`
}

function slotTotal(court, duration) {
  return court ? Math.round((court.price / 60) * duration) : 0
}

function openMapsApp(location) {
  if (!location) return
  
  const { lat, lng, address } = location
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isAndroid = /Android/.test(navigator.userAgent)
  
  if (isIOS) {
    window.open(`maps://maps.apple.com/?q=${encodeURIComponent(address)}&ll=${lat},${lng}`)
  } else if (isAndroid) {
    window.open(`geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(address)})`)
  } else {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`)
  }
}

// ─── Componentes auxiliares ───────────────────────────────────────────────────

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-5 h-5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

// ─── Sub-secciones de UI ──────────────────────────────────────────────────────

function SportFilter({ selected, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {SPORTS.map(s => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={`px-6 py-2.5 text-xs font-bold tracking-widest rounded-full transition-all ${
            selected === s
              ? 'bg-white text-black'
              : 'bg-transparent text-[#888888] border border-[#2e2e2e] hover:border-[#555] hover:text-white'
          }`}
        >
          {s.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function DateSelector({ dates, selected, onChange }) {
  const ref = useRef(null)
  return (
    <div ref={ref} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
      {dates.map(d => (
        <button
          key={d.id}
          onClick={() => onChange(d.id)}
          className={`flex-shrink-0 flex flex-col items-center px-4 py-3 min-w-[60px] rounded-xl transition-all ${
            selected === d.id
              ? 'bg-white text-black'
              : 'bg-[#111] text-[#888888] border border-[#2e2e2e] hover:border-[#444] hover:text-white'
          }`}
        >
          <span className="text-[10px] font-bold tracking-widest">{d.day}</span>
          <span className="text-xl font-black leading-tight">{d.num}</span>
          <span className="text-[9px] tracking-widest opacity-70">{d.month}</span>
        </button>
      ))}
    </div>
  )
}

function DurationSwitcher({ selected, onChange }) {
  return (
    <div className="flex gap-3">
      {[60, 120].map(d => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`flex-1 px-6 py-3.5 text-sm font-black tracking-widest rounded-full transition-all ${
            selected === d
              ? 'bg-white text-black'
              : 'bg-[#111] text-[#888888] border border-[#2e2e2e] hover:border-[#444] hover:text-white'
          }`}
        >
          {d} MIN
        </button>
      ))}
    </div>
  )
}

function CourtCard({ court, isActive, onSelect, compact, isMobileCarousel, onViewDetails }) {
  const cardWidth = isMobileCarousel ? 'min-w-[280px] w-[280px]' : 'w-full'
  const snapClass = isMobileCarousel ? 'snap-start' : ''
  
  return (
    <button
      onClick={() => onSelect(court)}
      className={`relative text-left overflow-hidden rounded-xl border-2 transition-all group ${cardWidth} ${snapClass} ${
        isActive ? 'border-white' : 'border-[#2e2e2e] hover:border-[#555]'
      }`}
    >
      <div className={`relative overflow-hidden ${compact ? 'h-36' : 'h-48'}`}>
        <img
          src={court.image}
          alt={court.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay VER DETALLES - Desktop: hover, Mobile: solo cuando está activa */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isMobileCarousel 
              ? (isActive ? 'opacity-100' : 'opacity-0 pointer-events-none')
              : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={(e) => {
            e.stopPropagation()
            onViewDetails?.(court)
          }}
        >
          <div className="bg-white text-black px-6 py-3 rounded-full font-black text-sm tracking-widest hover:bg-[#39FF14] transition-colors duration-200 transform group-hover:scale-105">
            VER DETALLES
          </div>
        </div>
        
        {isActive && (
          <div className="absolute inset-0 border-[3px] border-[#39FF14] pointer-events-none rounded-t-xl" />
        )}
      </div>
      <div className={`bg-[#0a0a0a] ${compact ? 'p-3' : 'p-4'}`}>
        <p className={`text-white font-black ${compact ? 'text-sm' : 'text-base'} mb-2`}>{court.name}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {court.tags.map(t => (
            <span key={t} className="text-[10px] px-3 py-1 bg-[#1A1A1A] text-[#888888] border border-[#2e2e2e] tracking-wide rounded-full">
              {t}
            </span>
          ))}
        </div>
        <p className={`font-black ${compact ? 'text-sm' : 'text-base'} text-[#39FF14]`}>
          {formatPrice(court.price)}<span className="text-xs font-normal text-[#555] ml-1">/hr</span>
        </p>
      </div>
    </button>
  )
}

function TimeGrid({ court, duration, selectedTime, onSelect }) {
  if (!court) return null
  return (
    <div>
      <p className="text-xs text-[#999] tracking-[0.25em] uppercase mb-5 font-bold">
        Horarios Disponibles · {court.name}
      </p>
      <div className="grid grid-cols-3 gap-3">
        {BASE_TIMES.map(t => {
          const isSelected = selectedTime === t
          const price = slotTotal(court, duration)
          return (
            <button
              key={t}
              onClick={() => onSelect(t)}
              className={`flex flex-col items-center px-4 py-3.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                isSelected
                  ? 'bg-[#39FF14] text-black'
                  : 'bg-[#111] text-[#888888] border border-[#2e2e2e] hover:border-[#444] hover:text-white'
              }`}
            >
              <span className="text-sm font-black">{t}</span>
              <span className={`text-[10px] font-normal mt-1 ${isSelected ? 'text-black/70' : 'text-[#555]'}`}>
                {formatPrice(price)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Vista de Detalles de Cancha ──────────────────────────────────────────────

function CourtDetailView({ court, onClose, slug }) {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="flex flex-col gap-8 animate-fadeSlideIn">
      {/* Header con botón cerrar */}
      <div className="flex items-start justify-between py-2 mb-2">
        <div>
          <p className="text-xs text-[#999] tracking-[0.3em] uppercase mb-1.5 font-bold">
            Complejo Deportivo
          </p>
          <h1 className="text-white font-black text-2xl md:text-3xl tracking-tight leading-none">
            {formatSlug(slug)}
          </h1>
        </div>
        <button 
          onClick={onClose}
          className="text-[#888888] hover:text-[#39FF14] transition-colors p-2.5 rounded-xl border border-[#2e2e2e] hover:border-[#39FF14] group"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Video Presentacional */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#2e2e2e] shadow-2xl">
        <video
          ref={videoRef}
          src={court.video}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white font-black text-sm tracking-widest">VIDEO PRESENTACIONAL</p>
        </div>
      </div>

      {/* Galería de Imágenes */}
      <div className="space-y-3">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#2e2e2e]">
          <img
            src={court.gallery[selectedGalleryIndex]}
            alt={`${court.name} - foto ${selectedGalleryIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {court.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedGalleryIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedGalleryIndex === idx 
                  ? 'border-[#39FF14] scale-105' 
                  : 'border-[#2e2e2e] hover:border-[#555] opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Nombre y Descripción */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h2 className="text-white font-black text-2xl tracking-tight">{court.name}</h2>
          <div className="text-right">
            <p className="text-[#39FF14] font-black text-2xl">{formatPrice(court.price)}</p>
            <p className="text-[#555] text-xs">/hora</p>
          </div>
        </div>
        <p className="text-[#aaa] text-sm leading-relaxed">{court.description}</p>
      </div>

      {/* Características Puntuales */}
      <div className="space-y-5">
        <p className="text-xs text-[#999] tracking-[0.25em] uppercase font-bold">
          Características
        </p>
        <div className="bg-[#0a0a0a] border border-[#2e2e2e] rounded-xl p-5 space-y-3">
          {court.features.map((feat, idx) => (
            <div key={idx} className="flex justify-between items-start py-2 border-b border-[#1a1a1a] last:border-0">
              <span className="text-[#888] text-sm font-medium">{feat.label}</span>
              <span className="text-white text-sm font-bold text-right max-w-[60%]">{feat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Volver */}
      <button
        onClick={onClose}
        className="w-full bg-[#111] border border-[#2e2e2e] text-white font-black text-sm tracking-[0.2em] py-4 rounded-full hover:border-white hover:bg-[#1a1a1a] transition-all"
      >
        ← VOLVER A CANCHAS
      </button>
    </div>
  )
}

// ─── Modal / Drawer de reserva ────────────────────────────────────────────────

function BookingDrawer({ court, time, duration, slug, onClose, isMobile }) {
  const [nombre, setNombre] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const timeRange = time ? `${time} – ${addMinutes(time, duration)}` : ''
  const total = slotTotal(court, duration)

  const inputClass =
    'w-full bg-[#111] border border-[#2e2e2e] text-white text-sm px-5 py-3.5 rounded-xl outline-none focus:border-white placeholder-[#444] transition-colors font-mono'

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — slide-up en mobile, side-panel en desktop */}
      <div
        className={`fixed z-50 bg-[#0a0a0a] border-white flex flex-col ${
          isMobile
            ? 'bottom-0 left-0 right-0 border-t rounded-t-3xl px-6 pt-6 pb-8 max-h-[90vh] overflow-y-auto'
            : 'top-0 right-0 h-full w-[420px] border-l px-8 pt-8 pb-8 overflow-y-auto'
        }`}
        style={{ animation: 'slideIn 0.28s cubic-bezier(.22,1,.36,1) both' }}
      >
        {/* Handle (solo mobile) */}
        {isMobile && (
          <div className="w-12 h-1.5 bg-[#333] rounded-full mx-auto mb-6" />
        )}

        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[10px] text-[#888888] tracking-[0.3em] uppercase mb-1">
              Solicitar Reserva
            </p>
            <h3 className="text-white font-black text-xl leading-tight">{court?.name}</h3>
          </div>
          <button onClick={onClose} className="text-[#555] hover:text-white transition-colors p-1">
            <CloseIcon />
          </button>
        </div>

        {/* Resumen */}
        <div className="bg-[#111] border border-[#2e2e2e] rounded-xl p-5 mb-6 space-y-2.5">
          <div className="flex justify-between text-sm">
            <span className="text-[#888888]">Complejo</span>
            <span className="text-white font-bold">{formatSlug(slug)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#888888]">Horario</span>
            <span className="text-white font-mono font-bold">{timeRange}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#888888]">Duración</span>
            <span className="text-white font-bold">{duration} min</span>
          </div>
          <div className="border-t border-[#2e2e2e] pt-2.5 flex justify-between">
            <span className="text-[#888888] text-sm">Total</span>
            <span className="text-[#39FF14] font-black text-base">{formatPrice(total)}</span>
          </div>
        </div>

        {/* Formulario */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-[10px] text-[#888888] tracking-[0.25em] uppercase block mb-2">
              Nombre de Comando
            </label>
            <input
              type="text"
              placeholder="Ej: Los Cañones FC"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[10px] text-[#888888] tracking-[0.25em] uppercase block mb-2">
              Comunicaciones (WhatsApp)
            </label>
            <input
              type="tel"
              placeholder="+57 300 000 0000"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <button
          className="w-full bg-[#39FF14] text-black font-black text-sm tracking-[0.2em] py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={!nombre.trim() || !whatsapp.trim()}
        >
          [ ➔ SOLICITAR RESERVA ]
        </button>
      </div>
    </>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function ReservationScreen() {
  const { slug } = useParams()
  const DATES = generateDates()

  const [selectedSport, setSelectedSport] = useState('Fútbol')
  const [selectedDate, setSelectedDate] = useState(0)
  const [selectedDuration, setSelectedDuration] = useState(60)
  const [selectedCourt, setSelectedCourt] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [showDrawer, setShowDrawer] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [viewingCourtDetail, setViewingCourtDetail] = useState(null)

  const courts = ALL_COURTS.filter(c => c.sport === selectedSport)

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  // Reset cancha y hora al cambiar deporte
  useEffect(() => {
    setSelectedCourt(null)
    setSelectedTime(null)
    setViewingCourtDetail(null)
  }, [selectedSport])

  // Abrir drawer al seleccionar cancha + hora
  useEffect(() => {
    if (selectedCourt && selectedTime) {
      const t = setTimeout(() => setShowDrawer(true), 150)
      return () => clearTimeout(t)
    }
  }, [selectedCourt, selectedTime])

  function handleCourtSelect(court) {
    if (selectedCourt?.id === court.id) {
      setSelectedCourt(null)
      setSelectedTime(null)
    } else {
      setSelectedCourt(court)
      setSelectedTime(null)
    }
  }

  function handleTimeSelect(t) {
    setSelectedTime(t)
  }

  function handleCloseDrawer() {
    setShowDrawer(false)
    setSelectedTime(null)
  }

  function handleViewDetails(court) {
    setViewingCourtDetail(court)
  }

  function handleCloseDetails() {
    setViewingCourtDetail(null)
  }

  // ── Panel izquierdo / configuración ─────────────────────────────────────────
  const ConfigPanel = (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-start justify-between py-2 mb-2">
        <div>
          <p className="text-xs text-[#999] tracking-[0.3em] uppercase mb-1.5 font-bold">
            Complejo Deportivo
          </p>
          <h1 className="text-white font-black text-2xl md:text-3xl tracking-tight leading-none">
            {formatSlug(slug)}
          </h1>
        </div>
        <button 
          onClick={() => {
            const firstCourt = ALL_COURTS[0]
            if (firstCourt?.location) {
              openMapsApp(firstCourt.location)
            }
          }}
          className="text-[#888888] hover:text-[#39FF14] transition-colors p-2.5 rounded-xl border border-[#2e2e2e] hover:border-[#39FF14]"
        >
          <LocationIcon />
        </button>
      </div>

      {/* Deporte */}
      <div>
        <p className="text-xs text-[#999] tracking-[0.25em] uppercase mb-5 font-bold">
          Deporte
        </p>
        <SportFilter selected={selectedSport} onChange={setSelectedSport} />
      </div>

      {/* Fecha */}
      <div>
        <p className="text-xs text-[#999] tracking-[0.25em] uppercase mb-5 font-bold">
          Fecha
        </p>
        <DateSelector dates={DATES} selected={selectedDate} onChange={setSelectedDate} />
      </div>

      {/* Duración */}
      <div>
        <p className="text-xs text-[#999] tracking-[0.25em] uppercase mb-5 font-bold">
          Duración
        </p>
        <DurationSwitcher selected={selectedDuration} onChange={setSelectedDuration} />
      </div>
    </div>
  )

  // ── Panel derecho / canchas + horarios ───────────────────────────────────────
  const CourtsPanel = (
    <div className="flex flex-col gap-8">
      {/* Canchas */}
      <div>
        <p className="text-xs text-[#999] tracking-[0.25em] uppercase mb-5 font-bold">
          Canchas Disponibles
        </p>
        {courts.length === 0 ? (
          <p className="text-[#555] text-sm">No hay canchas para este deporte.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courts.map(c => (
              <CourtCard
                key={c.id}
                court={c}
                isActive={selectedCourt?.id === c.id}
                onSelect={handleCourtSelect}
                onViewDetails={handleViewDetails}
                compact={false}
                isMobileCarousel={false}
              />
            ))}
          </div>
        )}
      </div>

      {/* Horarios */}
      {selectedCourt && (
        <div>
          <TimeGrid
            court={selectedCourt}
            duration={selectedDuration}
            selectedTime={selectedTime}
            onSelect={handleTimeSelect}
          />
        </div>
      )}
    </div>
  )

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(40px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        }
        @keyframes fadeSlideIn {
          from { 
            opacity: 0; 
            transform: translateX(-30px) scale(0.96); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none; 
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ── MOBILE VIEW ── */}
      <div className="block md:hidden min-h-screen bg-black text-white">
        <div className="px-5 pt-8 pb-32 space-y-8">
          {viewingCourtDetail ? (
            <CourtDetailView 
              court={viewingCourtDetail} 
              onClose={handleCloseDetails}
              slug={slug}
            />
          ) : (
            <>
              {ConfigPanel}
              
              {/* Canchas - Horizontal Carousel */}
              <div>
                <p className="text-xs text-[#999] tracking-[0.25em] uppercase mb-5 font-bold">
                  Canchas Disponibles
                </p>
                {courts.length === 0 ? (
                  <p className="text-[#555] text-sm">No hay canchas para este deporte.</p>
                ) : (
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-2">
                    {courts.map(c => (
                      <CourtCard
                        key={c.id}
                        court={c}
                        isActive={selectedCourt?.id === c.id}
                        onSelect={handleCourtSelect}
                        onViewDetails={handleViewDetails}
                        compact={false}
                        isMobileCarousel={true}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Horarios */}
              {selectedCourt && (
                <TimeGrid
                  court={selectedCourt}
                  duration={selectedDuration}
                  selectedTime={selectedTime}
                  onSelect={handleTimeSelect}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* ── DESKTOP VIEW ── */}
      <div className="hidden md:grid md:grid-cols-12 h-screen overflow-hidden bg-black text-white">
        {/* Left Panel — 5 cols (≈40%) */}
        <div className="col-span-5 h-full overflow-y-auto border-r border-[#1A1A1A] px-10 py-10" style={{ scrollbarWidth: 'none' }}>
          {viewingCourtDetail ? (
            <CourtDetailView 
              court={viewingCourtDetail} 
              onClose={handleCloseDetails}
              slug={slug}
            />
          ) : (
            ConfigPanel
          )}
        </div>

        {/* Right Panel — 7 cols (≈60%) */}
        <div className="col-span-7 h-full overflow-y-auto px-10 py-10" style={{ scrollbarWidth: 'none' }}>
          {CourtsPanel}
        </div>
      </div>

      {/* ── DRAWER / SIDE PANEL ── */}
      {showDrawer && (
        <BookingDrawer
          court={selectedCourt}
          time={selectedTime}
          duration={selectedDuration}
          slug={slug}
          onClose={handleCloseDrawer}
          isMobile={isMobile}
        />
      )}
    </>
  )
}
