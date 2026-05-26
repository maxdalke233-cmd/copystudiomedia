import Image from "next/image";

export default function FactCard() {
  return (
    <div className="rounded-2xl overflow-hidden relative min-h-[200px]">
      {/* Background editorial photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950">
        <Image
          src="https://picsum.photos/seed/factcardbg/300/220"
          alt=""
          fill
          className="object-cover opacity-55"
          sizes="300px"
        />
      </div>
      {/* Orange-red overlay */}
      <div className="absolute inset-0 bg-[#002FA8]/72" />

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col justify-between min-h-[200px]">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.08em] text-white/60 uppercase">
            Fluxora® Fact
          </span>
          <span className="text-[9px] font-medium text-white/50">01/04</span>
        </div>
        <div>
          <div className="font-heading text-[48px] font-black text-white leading-none">
            230+
          </div>
          <div className="text-[11px] text-white/60 mt-1.5 leading-[1.4] max-w-[140px]">
            Projects successfully launched worldwide
          </div>
        </div>
      </div>
    </div>
  );
}
