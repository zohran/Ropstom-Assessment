import { ArrowRight } from "lucide-react"

export default function Partnaship() {
  return (
    <section className="relative min-h-[400px] w-full overflow-hidden  bg-gradient-to-r from-emerald-500 to-cyan-500">
      {/* Gradient Background with Stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.1) 20px,
            rgba(255, 255, 255, 0.1) 40px
          )`,
        }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage:'url(/partnaship.gif)'}}></div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center min-h-[400px] px-4 md:px-8">
        <div className="max-w-[867px] text-center space-y-6">
          <p className="text-black text-lg font-normal  leading-relaxed">
            We have partnered with RX Outreach to provide real ordering medications at a fraction of the price you may
            find in your local pharmacy. Meet your chronic illness provider online today and get your medication
            delivered as quickly as 24 hours later.
          </p>

          <button

            className="inline-flex items-center gap-2 bg-black/90 hover:bg-black text-white px-6 py-3 rounded-md transition-colors duration-200"
          >
            Get The App
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

