import { motion } from 'motion/react';
import { Verified, ArrowRight, QrCode, Bolt } from 'lucide-react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function June() {
  const juneEvents = MOVE_EVENTS.filter(e => e.month === 'Junho');

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <MonthSwitcher />

        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-move-blue overflow-hidden">
          
          {/* Left Vertical Accent */}
          <div className="lg:col-span-1 bg-move-blue flex flex-col justify-between items-center py-10 border-r-2 border-black">
            <span className="text-white font-black text-xl vertical-text rotate-180 uppercase tracking-[0.25em]">
              DINAMUS ALPHAVILLE
            </span>
            <div className="w-12 h-12 bg-white flex items-center justify-center neo-brutalist-shadow">
              <Bolt className="text-move-blue font-bold" size={32} />
            </div>
          </div>

          {/* Central Content */}
          <div className="lg:col-span-8 relative bg-neutral-900 min-h-[600px] overflow-hidden group">
            <img 
              src="/junho.manu.jpg"
              alt="Event speaker" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative h-full flex flex-col justify-end p-6 md:p-12 z-10 bg-gradient-to-t from-black/80 to-transparent">
              <h1 className="text-[15vw] md:text-[10vw] font-black text-white uppercase leading-none tracking-tighter italic">
                JUNHO
              </h1>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-move-pink px-8 py-3 neo-brutalist-shadow">
                  <span className="text-white font-black italic text-3xl uppercase leading-none">
                    2026
                  </span>
                </div>

                <div className="border-4 border-white bg-black/40 backdrop-blur-md px-8 py-3">
                  <span className="text-white font-black uppercase tracking-[0.2em] text-lg">
                    SÃO PAULO - BR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Detail Column */}
          <div className="lg:col-span-3 flex flex-col border-l-2 border-black">
            {juneEvents.map((event) => (
              <div 
                key={event.id} 
                className={`${
                  event.color === 'move-orange' 
                    ? 'bg-move-orange' 
                    : event.color === 'white' 
                    ? 'bg-white' 
                    : 'bg-move-blue'
                } p-8 flex-1 flex flex-col justify-center border-b-2 border-black`}
              >
                <div className={`${event.color === 'white' ? 'text-black' : 'text-white'} font-black text-6xl mb-4 tracking-tighter`}>
                  {event.date.split('/')[0]}
                </div>

                <div className="flex justify-between items-end">
                  <a 
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${event.color === 'white' ? 'text-black border-move-blue' : 'text-white border-white'} font-bold uppercase text-sm border-l-4 pl-4`}
                  >
                    {event.title} - {event.day} · {event.time.split(' ')[0]} · Prédio da Igreja
                  </a>

                  <button 
                    onClick={() => saveToCalendar(event)}
                    className={`ml-4 px-3 py-1 text-[8px] font-black uppercase ${
                      event.color === 'white' 
                        ? 'bg-move-blue text-white' 
                        : 'bg-white text-black'
                    }`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-2 relative h-72 border-4 border-move-blue overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPdN2pB06pRpNjvO3jJbIKi8_mOKL0n1pEVnENGYgtGdzP9OJb0lDYQo2NX7-GuXnbcacWnszeyatvNOTdtfaTykuw6XLTB98Ppp3-dsYZAgZuHFgLlW-iw1lxkkkLWGYvmPuDNgc7GlsksnB-qzy9wmu4Z8sCUrHSKqQJXska9spWvQmUBcdnCn0ChMyYKdDBaeORVwxzD8A1O3_h5sP5yRXU3eZbWAR9KV6mCTJaU62G63uOBOTyh8yF9J_wHeDmlir1LnED7rI" 
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
            />

            <a 
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full p-8 flex flex-col justify-between"
            >
              <div className="bg-move-blue px-4 py-1 font-black text-xs uppercase text-white">
                LOCALIZAÇÃO
              </div>

              <div>
                <h3 className="text-5xl font-black uppercase text-white">
                  IGREJA DINAMUS ALPHAVILLE
                </h3>

                <p className="text-white text-sm mt-3 bg-black/60 px-2">
                  Alameda Mamoré, 521 - Alphaville, Barueri - SP
                </p>
              </div>
            </a>
          </div>

          <div className="bg-move-pink p-8 flex flex-col justify-between border-4 border-black text-white">
            <div className="w-16 h-16 border-4 border-white bg-black flex items-center justify-center mb-6">
              <QrCode size={32} />
            </div>

            <div>
              <h4 className="text-3xl font-black uppercase mb-3">
                ACESSO VIP
              </h4>

              <p className="text-sm font-bold uppercase">
                DOWNLOAD DO MOVE APP PARA ACESSO EXCLUSIVO AOS WORKSHOPS.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => saveToCalendar(juneEvents[0])}
            className="bg-move-blue text-white px-12 py-6 font-black text-2xl uppercase"
          >
            TE VEJO LÁ
          </button>
        </div>
      </div>
    </div>
  );
}
