import { useParams, Link } from 'react-router-dom'

function formatSlug(slug) {
  if (!slug) return ''
  return slug
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function ComplexProfile() {
  const { slug } = useParams()

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mx-auto mb-6 border border-[#262626]">
          <span className="text-2xl font-black text-white">
            {slug ? slug.charAt(0).toUpperCase() : 'Z'}
          </span>
        </div>
        <p className="text-[#888888] text-xs tracking-[0.3em] uppercase mb-3">
          Perfil Comercial
        </p>
        <h1 className="text-white text-3xl font-black tracking-tight mb-4">
          {formatSlug(slug)}
        </h1>
        <p className="text-[#888888] text-sm mb-8">
          Próximamente — esta página mostrará el perfil completo del complejo deportivo.
        </p>
        <Link
          to={`/c/${slug}/reservar`}
          className="inline-block bg-[#39FF14] text-black font-black text-sm tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
        >
          [ ➔ RESERVAR AHORA ]
        </Link>
      </div>
    </div>
  )
}
