                    key="success-card-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-[400px] bg-white border border-[#D9D0BC] rounded-3xl p-6 sm:p-8 shadow-lg relative flex flex-col overflow-hidden text-center"
                  >
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D9C28B] via-[#65785C] to-[#D9C28B]" />

                    <div className="flex flex-col items-center mb-4 pb-4 border-b border-[#E5D7BC]">
                      <div className="w-12 h-12 bg-[#F7F3E8] border border-[#E8CF75]/60 text-[#65785C] rounded-full flex items-center justify-center mb-3 shadow-xs">
                        <CheckCircle2 className="w-6 h-6 text-[#65785C]" />
                      </div>
                      <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#65785C]">RSVP Received!</h4>
                      <p className="text-sm text-[#2A2218] font-serif mt-1">
                        Thank you, <span className="font-bold text-[#65785C]">{submittedGuest.fullName}</span>!
                      </p>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="bg-[#F7F3E8] border border-[#E5D7BC] rounded-2xl p-4 space-y-2 text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-[#E5D7BC]">
                          <span className="text-[#6B4E18] font-sans uppercase text-[10px] font-bold">Full Name(s)</span>
                          <span className="font-bold text-[#2A2218]">{submittedGuest.fullName}</span>
                        </div>

                        <div className="flex items-center justify-between pb-2 border-b border-[#E5D7BC]">
                          <span className="text-[#6B4E18] font-sans uppercase text-[10px] font-bold">Attendance</span>
                          <span className="font-bold text-[#65785C]">
                            {submittedGuest.willAttend === 'yes' ? 'Attending with pleasure' : 'Regretfully decline'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-[#6B4E18] font-sans uppercase text-[10px] font-bold">Dietary / Allergies</span>
                          <span className="font-medium text-[#4A3F32] italic">
                            {submittedGuest.dietaryRequirements || 'None'}
                          </span>
                        </div>
                      </div>

                      {submittedGuest.notes && (
                        <div className="bg-[#FDFBF7] border border-[#E5D7BC] rounded-2xl p-3.5 text-center italic font-serif text-xs text-[#4A3F32]">
                          “{submittedGuest.notes}”
                        </div>
                      )}
                      {submittedGuest.eCardCode && submittedGuest.willAttend === 'yes' && (
                        <div className="mt-6 rounded-2xl border border-[#A8B69A] bg-[#F8FAF5] p-5 text-center">
                          <h4 className="font-serif text-lg font-bold text-[#33402F]">Your Digital Entry Card</h4>
                          <p className="text-xs text-[#52634A] mt-1">Keep this QR code and present it at the gate. It can be scanned only once.</p>
                          <div id="claris-allan-ecard-qr" className="bg-white inline-block p-3 rounded-xl mt-4 shadow-sm"><QRCodeSVG value={submittedGuest.eCardCode} size={190} level="H" includeMargin /></div>
                          <button type="button" onClick={downloadECard} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#65785C] hover:bg-[#52634A] text-white font-sans font-bold text-xs uppercase tracking-wider py-3 px-4 shadow-sm transition-all"><Download className="w-4 h-4" />Download E-Card</button>
                          <p className="text-xs font-bold text-[#33402F] mt-3">{submittedGuest.fullName}</p>
                          <p className="text-[10px] text-[#52634A]">Entry token: {submittedGuest.eCardCode.slice(0,8).toUpperCase()}</p>
                        </div>
                      )}

                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5D7BC] text-center text-xs text-[#574C3F] space-y-2">
                      <p className="font-serif">We look forward to celebrating with you on 5th December 2026!</p>
                      <div className="text-[11px] text-[#6B4E18] font-sans font-medium bg-[#F7F3E8] py-2 px-3 rounded-lg border border-[#E5D7BC]">
                        Your response has been securely recorded through this invitation.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="standard-info-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-[400px] bg-white border border-[#D9D0BC] shadow-lg rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F7F3E8] border border-[#E8CF75]/60 flex items-center justify-center text-[#65785C] shadow-xs">
                      <Heart className="w-7 h-7 text-[#65785C] fill-[#E8CF75]/25" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl text-[#2A2218] font-bold">Join Our Celebration</h4>
                      <p className="text-sm text-[#574C3F] font-serif leading-relaxed max-w-[280px] mx-auto">
                        Please confirm your presence with your full names so we can reserve your seat and cater to your preferences.
                      </p>
                    </div>

                    <div className="w-full bg-[#F7F3E8] border border-[#E5D7BC] rounded-2xl p-4 text-left space-y-2.5 text-xs text-[#4A3F32] font-sans">
                      <div className="flex items-center gap-2 text-[#2A2218] font-bold">
                        <Calendar className="w-4 h-4 text-[#65785C]" />
                        <span>Saturday, 5th December 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#2A2218] font-bold">
                        <MapPin className="w-4 h-4 text-[#65785C]" />
                        <span>Sunset Villas, Diani · Kwale County</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-[#574C3F] pt-1 border-t border-[#E5D7BC]">
                        Church ceremony at 9:00 AM · Reception at 1:30 PM.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5D7BC] w-full text-[11px] text-[#65785C] uppercase tracking-widest font-sans font-extrabold">
                      Kindly RSVP by 30th November 2026
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-auto"
            id="floating-rsvp-button-wrapper"
          >
            <button
              onClick={scrollToRsvp}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-[#65785C] hover:bg-[#6B4E18] border border-[#E8CF75] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#F5E6C4]" />
              <span>Confirm Attendance</span>
            </button>
          </motion.div>
