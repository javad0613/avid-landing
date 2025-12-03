import React from 'react';
import { Section } from './Section';
import { Download, CreditCard, Smile } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: '۱. نصب و دریافت کارت',
    description: 'اپلیکیشن آوید کارت را نصب کنید و کارت اعتباری سازمانی خود را تحویل بگیرید.'
  },
  {
    icon: CreditCard,
    title: '۲. خرید هوشمند',
    description: 'از فروشگاه‌های طرف قرارداد به صورت حضوری یا آنلاین خرید کنید.'
  },
  {
    icon: Smile,
    title: '۳. دریافت پاداش',
    description: 'تخفیف، کش‌بک و امتیاز دریافت کنید و اقساط خود را به راحتی مدیریت کنید.'
  }
];

export const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">نحوه کارکرد</h2>
        <p className="text-slate-600 text-lg">
          ساده، سریع و شفاف. تنها در سه مرحله وارد دنیای آوید کارت شوید.
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-8">
        {/* Connecting Line (Desktop only) */}
        <div className="hidden md:block absolute top-12 right-0 left-0 h-0.5 bg-slate-100 -z-10 w-2/3 mx-auto"></div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <step.icon className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
            <p className="text-slate-500 max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
