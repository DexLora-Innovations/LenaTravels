import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 bg-divine">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact Us"
          title={<>Begin Your <em className="not-italic text-gradient-gold">Yatra</em></>}
          subtitle="Tell us about your pilgrimage dream. We'll craft a soulful journey for you."
        />

        <div className="mt-20 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "yatra@lenatravels.in" },
              { icon: MapPin, label: "Office", value: "Varanasi, Uttar Pradesh, India" },
            ].map(({ icon: Icon, label, value }) => (
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
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Package Interest</label>
              <select className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors">
                <option>Kashi Yatra — Train (9 days)</option>
                <option>Kashi Yatra — Flight (6 days)</option>
                <option>Gaya Pilgrimage</option>
                <option>Buddha Gaya Tour</option>
                <option>Prayagraj Snan</option>
                <option>Custom Itinerary</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your travel dates and group size..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-sunset px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {sent ? "✓ We'll be in touch soon" : "Send Inquiry"}
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
