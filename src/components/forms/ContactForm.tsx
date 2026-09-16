"use client";

import { useRef, useState } from "react";
import MagneticButton from "@/components/animations/MagneticButton";

const EMAILJS_CONFIG = {
  service_id: "service_t4agn8t",
  template_id: "template_mzyt4bl",
  user_id: "8Z9vTXA5d-P-_FP4i",
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...EMAILJS_CONFIG,
          template_params: formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-ink outline-none focus:border-sand"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-ink outline-none focus:border-sand"
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-muted" htmlFor="number">
          Phone
        </label>
        <input
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-ink outline-none focus:border-sand"
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-muted" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 text-ink outline-none focus:border-sand"
        />
      </div>

      <div className="mt-4 flex items-center gap-6">
        <MagneticButton
          as="button"
          strength={0.3}
          onClick={() => {
            if (!isSubmitting) formRef.current?.requestSubmit();
          }}
          className="rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-widest text-ink transition-colors hover:border-sand hover:text-sand"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </MagneticButton>
        {status === "success" && <p className="text-sm text-moss">Thanks — we&apos;ll be in touch shortly.</p>}
        {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
