import { MapPin, Clock } from 'lucide-react';

export default function Local() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto pt-10">

        <div className="border-2 border-move-blue bg-neutral-950 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* TEXTO */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="bg-move-pink px-4 py-1 text-xs font-black uppercase tracking-widest mb-6 inline-block">
                LOCAL DOS EVENTOS
              </div>

              <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
                IGREJA DINAMUS <br />
                <span className="text-move-blue">ALPHAVILLE</span>
              </h1>

              <p className="text-white/80 text-lg mb-8">
                A maioria dos eventos do MOVE acontece na Igreja Dinamus Alphaville.
              </p>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <MapPin className="text-move-blue mt-1" size={22} />
                  <div>
                    <div className="text-sm text-white/50 uppercase font-bold">Endereço</div>
                    <div className="text-xl font-bold">
                     Estrada Bela Vista, 2914 - Alphaville, Santana de Parnaíba - SP, 06472-005
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-move-pink mt-1" size={22} />
                  <div>
                    <div className="text-sm text-white/50 uppercase font-bold">Cultos</div>
                    <div className="text-xl font-bold">
                      Todos os domingos às 10h
                    </div>
                  </div>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/"
                target="_blank"
                className="mt-10 bg-move-blue px-8 py-4 font-black uppercase hover:bg-move-pink transition"
              >
                VER NO MAPA
              </a>
            </div>

            {/* MAPA */}
            <div className="min-h-[350px] bg-neutral-900">
              <iframe
                src="https://www.google.com/maps?q=Igreja%20Dinamus%20Alphaville&output=embed"
                className="w-full h-full min-h-[350px]"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
