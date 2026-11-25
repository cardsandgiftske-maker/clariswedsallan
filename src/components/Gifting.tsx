import React, { useState } from 'react';
import { Gift, Copy, Check, Heart, Smartphone, Mail, Package } from 'lucide-react';
import { WEDDING_DETAILS } from '../data';

export default function Gifting() {
  const [copiedTill, setCopiedTill] = useState(false);

  const handleCopyTill = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTill(true);
    setTimeout(() => setCopiedTill(false), 2000);
  };

  return (
    <section className="relative py-24 bg-[#FFFFFF] text-[#2A2218]" id="gifting-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#E8CF75]/[0.08] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#65785C] text-xs font-semibold tracking-widest uppercase font-sans">
            Love &amp; Support
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#2A2218] mt-2 mb-4">Gifting Options</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D9C28B] to-transparent mx-auto" />
        </div>

        {/* Registry Message Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Narrative card */}
          <div className="md:col-span-7 flex flex-col justify-between bg-[#FDFBF7] border border-[#D9D0BC] p-8 rounded-3xl shadow-md">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7F3E8] to-[#F6EFD9] flex items-center justify-center text-[#65785C] mb-4 border border-[#E8CF75]/50">
                <Gift className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl text-[#2A2218] font-medium">Love &amp; Blessings</h3>

              <div className="text-[#4A3F32] text-sm md:text-base leading-relaxed space-y-4 font-serif">
                <p className="italic text-lg text-[#2A2218]">
                  “{WEDDING_DETAILS.registry.message}”
                </p>

                <div className="pt-3 space-y-3 text-[#574C3F] text-sm">
                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E5D7BC]">
                    <Package className="w-5 h-5 text-[#65785C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-[#65785C]">
                        1. Physical Gifts
                      </h5>
                      <p className="font-serif text-xs text-[#574C3F] mt-0.5">
                        {WEDDING_DETAILS.registry.physicalGiftNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E5D7BC]">
                    <Mail className="w-5 h-5 text-[#65785C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-[#65785C]">
                        2. Envelope Blessing
                      </h5>
                      <p className="font-serif text-xs text-[#574C3F] mt-0.5">
                        {WEDDING_DETAILS.registry.envelopeNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E5D7BC]">
                    <Smartphone className="w-5 h-5 text-[#65785C] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-[#65785C]">
                        3. M-Pesa Gift
                      </h5>
                      <p className="font-serif text-xs text-[#574C3F] mt-0.5">
                        For friends and family wishing to send a monetary gift directly to Allan via M-Pesa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5D7BC] flex items-center gap-3">
              <Heart className="w-4 h-4 text-[#65785C] fill-[#E8CF75]/50" />
              <span className="text-xs text-[#574C3F] font-sans tracking-wider uppercase font-semibold">
                Thank you for your love, generosity, and prayers!
              </span>
            </div>
          </div>

          {/* M-PESA M-Pesa Number Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-white via-[#FDFBF7] to-[#F7F3E8] border border-[#E8CF75]/70 p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between items-center text-center relative overflow-hidden">
            <div className="w-full flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-green-800 text-[10px] uppercase font-sans font-bold tracking-widest mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>M-PESA · SEND MONEY</span>
              </span>

              <h4 className="font-serif text-xl text-[#2A2218] mb-1 font-medium">DIGITAL GIFT</h4>
              <p className="text-[#6B5E4E] text-xs font-sans mb-6 font-medium">
                Send Money
              </p>

              {/* Key-Value Display Blocks */}
              <div className="w-full space-y-3 mb-5">
                {/* M-Pesa M-Pesa Number Block with Copy Button */}
                <div className="bg-white border border-[#D9D0BC] rounded-2xl p-3.5 flex items-center justify-between shadow-xs">
                  <div className="text-left">
                    <p className="text-[10px] text-[#6B5E4E] uppercase font-sans font-bold tracking-wider">M-Pesa Number</p>
                    <p className="text-2xl font-mono font-bold text-[#65785C] tracking-wide tabular-nums">
                      {WEDDING_DETAILS.registry.tillNumber}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyTill(WEDDING_DETAILS.registry.tillNumber)}
                    className={`p-2 sm:p-2.5 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                      copiedTill
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800 font-bold'
                        : 'bg-[#F7F3E8] border-[#D9D0BC] text-[#65785C] hover:bg-[#65785C] hover:text-white'
                    }`}
                    title="Copy M-Pesa Number"
                  >
                    {copiedTill ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="text-xs">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Account Name Block */}
                <div className="bg-white border border-[#D9D0BC] rounded-2xl p-3.5 text-left shadow-xs">
                  <p className="text-[10px] text-[#6B5E4E] uppercase font-sans font-bold tracking-wider">Account Name</p>
                  <p className="text-lg sm:text-xl font-serif font-bold text-[#2A2218] mt-0.5">
                    {WEDDING_DETAILS.registry.accountName}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Steps Guide */}
            <div className="w-full bg-white border border-[#E5D7BC] rounded-xl p-3.5 text-left">
              <p className="text-[10px] uppercase font-sans font-bold text-[#65785C] tracking-wider mb-1.5">
                How to Send a Gift
              </p>
              <ol className="text-[11px] text-[#4A3F32] font-sans space-y-1 list-decimal list-inside">
                <li>M-Pesa &gt; Send Money</li>
                <li>
                  Enter Phone Number: <strong className="text-[#2A2218] font-mono tabular-nums">{WEDDING_DETAILS.registry.tillNumber}</strong>
                </li>
                <li>Enter Amount &amp; PIN</li>
                <li>
                  Confirm recipient: <strong className="text-[#2A2218]">{WEDDING_DETAILS.registry.accountName}</strong>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
