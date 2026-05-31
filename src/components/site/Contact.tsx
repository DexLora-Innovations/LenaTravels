import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const info = [
    { icon: Phone, label: t.contact.call, value: "+91 98765 43210" },
    { icon: Mail, label: t.contact.email, value: "yatra@lenatravels.in" },
    { icon: MapPin, label: t.contact.office, value: t.contact.officeVal },
  ];

  return (
    <section id="contact" className="py-28 bg-divine">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={<>{t.contact.title1} <em className="not-italic text-gradient-gold">{t.contact.title2}</em></>}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-20 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="reveal flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="h-12 w-12 rounded-full bg-sunset flex items-center justify-center text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 font-display text-xl text-foreground">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="reveal lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-soft space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t.contact.name} name="name" />
              <Field label={t.contact.phone} name="phone" type="tel" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.interest}</label>
              <select className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors">
                {t.contact.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.message}</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder={t.contact.placeholder}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-sunset px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {sent ? t.contact.sent : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}
