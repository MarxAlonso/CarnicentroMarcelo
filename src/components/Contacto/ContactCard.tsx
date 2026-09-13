import React from "react";

interface ContactCardProps {
  title: string;
  children: React.ReactNode;
  phone?: string;
  whatsapp?: string;
  icon?: React.ReactNode;
}

export const ContactCard: React.FC<ContactCardProps> = ({ title, children, phone, whatsapp, icon }) => {
  return (
    <div className="rounded-lg border border-brand/20 bg-surface shadow-sm">
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="h-6 w-6 text-brand-ink-deep mr-2">{icon}</div>
          <h3 className="text-lg font-semibold text-brand-ink-deep">{title}</h3>
        </div>

        <div className="text-ink-muted">{children}</div>
        {phone || whatsapp ? (
          <ul className="mt-3 text-sm text-ink-muted list-disc pl-5">
            {phone && <li>Tel: <a href={`tel:${phone}`} className="text-brand-ink-deep font-medium hover:underline">{phone}</a></li>}
            {whatsapp && <li>WhatsApp: <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-ink-deep font-medium hover:underline">Abrir chat</a></li>}
          </ul>
        ) : null}
      </div>
      {(phone || whatsapp) && (
        <div className="border-t border-brand/10 px-5 py-3 bg-surface-2 flex items-center justify-between">
          {phone ? <a href={`tel:${phone}`} className="text-brand-ink-deep font-medium hover:underline">Tel: {phone}</a> : <span />}
          {whatsapp ? <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-ink-deep font-medium hover:underline">WhatsApp</a> : <span />}
        </div>
      )}
    </div>
  );
};

export default ContactCard;