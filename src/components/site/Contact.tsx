import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendContactEmail } from "@/lib/emailjs";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [packageInterest, setPackageInterest] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 bg-divine overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={
            <>
              Begin Your <em className="not-italic text-gradient-gold">Yatra</em>
            </>
          }
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-20 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6 min-w-0">
            {[
              {
                id: "phone",
                icon: Phone,
                label: t("contact.call_us"),
                value: "+91 9176735335",
                href: "tel:+919176735335",
              },
              {
                id: "email",
                icon: Mail,
                label: t("contact.email"),
                value: "sundaran06@gmail.com",
                href: "mailto:sundaran06@gmail.com",
              },
              {
                id: "office",
                icon: MapPin,
                label: t("contact.office"),
                value:
                  "No. 1A, Ground Floor, Vinayagapuram Main Road, Vinayagapuram, Ambattur, Chennai – 600053",
                href: null,
              },
            ].map(({ id, icon: Icon, label, value, href }) => (
              <div
                key={id}
                className="reveal flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover-lift min-w-0"
              >
                <div className="h-12 w-12 shrink-0 rounded-full bg-sunset flex items-center justify-center text-primary-foreground shadow-glow">
                  <Icon className="block h-5 w-5 shrink-0" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 font-display text-xl text-foreground hover:text-primary transition-colors break-words"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="mt-1 font-display text-lg text-foreground leading-snug break-words">
                      {value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);

              if (!name.trim() || !phone.trim() || !packageInterest.trim() || !message.trim()) {
                setError(t("contact.error_fields"));
                return;
              }

              setLoading(true);
              try {
                const submittedAt = new Date().toLocaleString();
                await sendContactEmail({
                  name: name.trim(),
                  phone: phone.trim(),
                  package: packageInterest,
                  message: message.trim(),
                  submitted_from: "Lena Travels Website",
                  submitted_at: submittedAt,
                });

                setSent(true);
                setName("");
                setPhone("");
                setPackageInterest("");
                setMessage("");
              } catch (err) {
                console.error("EmailJS send error:", err);
                setError(t("contact.error_send"));
              } finally {
                setLoading(false);
              }
            }}
            className="reveal lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-soft space-y-5 min-w-0"
            aria-label={t("contact.title")}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label={t("contact.name")}
                name="name"
                value={name}
                onChange={(v) => setName(v)}
              />
              <Field
                label={t("contact.phone")}
                name="phone"
                type="tel"
                value={phone}
                onChange={(v) => setPhone(v)}
              />
            </div>
            <div>
              <label
                htmlFor="package-select"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                {t("contact.package_interest")}
              </label>
              <select
                id="package-select"
                value={packageInterest}
                onChange={(e) => setPackageInterest(e.target.value)}
                required
                aria-label={t("contact.package_interest")}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
              >
                <option value="">{t("contact.select_package")}</option>
                <option value={t("contact.kashi_train")}>{t("contact.kashi_train")}</option>
                <option value={t("contact.kashi_flight")}>{t("contact.kashi_flight")}</option>
                <option value={t("contact.gaya")}>{t("contact.gaya")}</option>
                <option value={t("contact.buddha_gaya")}>{t("contact.buddha_gaya")}</option>
                <option value={t("contact.prayagraj")}>{t("contact.prayagraj")}</option>
                <option value={t("contact.custom")}>{t("contact.custom")}</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder={t("contact.message_placeholder")}
                required
                aria-label={t("contact.message")}
              />
            </div>
            {error && (
              <div className="text-sm text-destructive" role="alert">
                {error}
              </div>
            )}
            {sent && (
              <div className="text-sm text-green-600" role="status">
                {t("contact.success")}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              aria-disabled={loading}
              className={`w-full rounded-full bg-sunset px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        aria-label={label}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  );
}
