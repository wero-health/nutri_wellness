"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { services } from "@/content/services";

const healthGoalsList = [
  "Chronic Fatigue & Low Energy",
  "Gut Health & Digestive Issues",
  "Hormonal Imbalance & Thyroid",
  "Weight & Metabolic Health",
  "Autoimmune & Inflammation",
  "Sleep & Stress Management",
  "Genomics & Preventive Longevity",
  "General Nutrition Counseling",
];

const timeSlots = [
  "10:00 AM - 11:30 AM (Morning)",
  "11:30 AM - 01:00 PM (Morning)",
  "02:30 PM - 04:00 PM (Afternoon)",
  "04:00 PM - 05:30 PM (Evening)",
  "05:30 PM - 07:00 PM (Evening)",
];

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: services[0].slug,
    date: "",
    timeSlot: timeSlots[0],
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "female",
    healthGoals: [] as string[],
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      healthGoals: prev.healthGoals.includes(goal)
        ? prev.healthGoals.filter((g) => g !== goal)
        : [...prev.healthGoals, goal],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "NW-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      service: services[0].slug,
      date: "",
      timeSlot: timeSlots[0],
      fullName: "",
      email: "",
      phone: "",
      age: "",
      gender: "female",
      healthGoals: [],
      notes: "",
    });
  };

  if (isSubmitted) {
    const selectedServiceObj = services.find((s) => s.slug === formData.service);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E9E1] shadow-2xl shadow-primary/10 max-w-2xl mx-auto text-center"
      >
        <div className="w-20 h-20 rounded-full bg-[#EFF6F0] text-[#176B60] mx-auto flex items-center justify-center mb-6 shadow-md border border-[#B9D8B1]/60">
          <CheckCircle2 className="w-10 h-10 text-[#176B60]" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full bg-[#EFF6F0] text-[#176B60] text-xs font-bold uppercase tracking-wider mb-3 border border-[#B9D8B1]/60 shadow-2xs">
          Appointment Request Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#233B36] mb-2">
          Thank you, {formData.fullName || "Valued Patient"}!
        </h3>

        <p className="text-[#38524C] text-sm leading-relaxed mb-6 max-w-md mx-auto font-medium">
          Your consultation request has been submitted to Dr. Dasari Anusha&apos;s clinical team.
          We will contact you via WhatsApp or phone shortly to confirm your slot.
        </p>

        {/* Confirmation Details Card */}
        <div className="bg-[#F8F6F0] rounded-2xl p-6 border border-[#E2E9E1] text-left mb-8 space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-[#E2E9E1] text-sm">
            <span className="text-[#57756E] font-medium">Booking Reference:</span>
            <span className="font-mono font-bold text-primary">{bookingRef}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#57756E] font-medium">Selected Service:</span>
            <span className="font-bold text-[#233B36]">{selectedServiceObj?.title}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#57756E] font-medium">Preferred Time:</span>
            <span className="font-bold text-[#233B36]">
              {formData.date ? formData.date + " — " : ""}
              {formData.timeSlot}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#57756E] font-medium">Contact Info:</span>
            <span className="font-bold text-[#233B36]">
              {formData.phone || formData.email}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919876543210?text=Hello%20Dr.%20Anusha%20Dasari,%20I%20have%20submitted%20a%20consultation%20request%20(${bookingRef})%20for%20${encodeURIComponent(
              selectedServiceObj?.title || "Wellness"
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#176B60] hover:bg-[#0F4C43] text-white font-bold text-sm transition-all shadow-md group"
          >
            <Sparkles className="w-4 h-4 text-[#E8B77B]" />
            Fast-Track on WhatsApp
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#E2E9E1] hover:bg-[#EFF6F0] text-[#233B36] font-semibold text-sm transition-all"
          >
            <RotateCcw className="w-4 h-4 text-[#57756E]" />
            Book Another Slot
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E9E1] shadow-xl shadow-primary/5 max-w-3xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E2E9E1]">
        {[
          { num: 1, title: "Select Service" },
          { num: 2, title: "Health Profile" },
          { num: 3, title: "Patient Details" },
        ].map((item) => (
          <div
            key={item.num}
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => setStep(item.num)}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === item.num
                  ? "bg-[#176B60] text-white shadow-md shadow-primary/25"
                  : step > item.num
                  ? "bg-[#B9D8B1] text-[#233B36] font-bold"
                  : "bg-[#F8F6F0] text-[#57756E] border border-[#E2E9E1]"
              }`}
            >
              {step > item.num ? "✓" : item.num}
            </div>
            <span
              className={`text-xs font-bold hidden sm:inline ${
                step === item.num ? "text-primary" : "text-[#57756E]"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-bold text-[#233B36] mb-2">
                  Select Healthcare Service / Program
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv.slug}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, service: srv.slug }))
                      }
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        formData.service === srv.slug
                          ? "border-primary bg-[#EFF6F0] ring-2 ring-primary/20"
                          : "border-[#E2E9E1] hover:border-primary/40 bg-[#F8F6F0]"
                      }`}
                    >
                      <p className="font-heading font-bold text-sm text-[#233B36] mb-1">
                        {srv.title}
                      </p>
                      <p className="text-[#38524C] text-xs line-clamp-2 font-medium">
                        {srv.shortDescription}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#233B36] mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, date: e.target.value }))
                      }
                      min={minDate || undefined}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#233B36] mb-2">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, timeSlot: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all shadow-md group"
                >
                  Continue to Health Profile
                  <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-bold text-[#233B36] mb-1">
                  What health concerns are you looking to address?
                </label>
                <p className="text-[#57756E] text-xs mb-3 font-medium">
                  Select all that apply to help Dr. Dasari prepare your medical assessment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {healthGoalsList.map((goal) => {
                    const isChecked = formData.healthGoals.includes(goal);
                    return (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => handleGoalToggle(goal)}
                        className={`p-3.5 rounded-2xl text-left text-xs font-semibold flex items-center justify-between border transition-all ${
                          isChecked
                            ? "bg-[#EFF6F0] border-primary text-primary shadow-xs"
                            : "bg-[#F8F6F0] border-[#E2E9E1] text-[#38524C] hover:border-primary/40"
                        }`}
                      >
                        <span>{goal}</span>
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-primary" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#233B36] mb-2">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Share any ongoing medications, previous diagnoses, or specific questions..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-semibold text-[#57756E] hover:text-[#233B36]"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all shadow-md group"
                >
                  Continue to Contact Info
                  <ArrowRight className="w-4 h-4 text-[#E8B77B] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#233B36] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#233B36] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#233B36] mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-bold text-[#233B36] mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, age: e.target.value }))
                      }
                      placeholder="e.g. 38"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#233B36] mb-2">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, gender: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2E9E1] bg-[#F8F6F0] text-sm text-[#233B36] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden font-medium"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-4 rounded-2xl bg-[#EFF6F0] border border-[#B9D8B1]/60 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#E8B77B] shrink-0 mt-0.5" />
                <p className="text-xs text-[#38524C] leading-relaxed font-medium">
                  Your medical privacy is strictly protected under patient confidentiality standards.
                  No information is shared with third parties.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm font-semibold text-[#57756E] hover:text-[#233B36]"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  id="submit-booking-btn"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-heading font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 group"
                >
                  Confirm & Request Appointment
                  <CheckCircle2 className="w-4 h-4 text-[#E8B77B]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
