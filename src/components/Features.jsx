import React from 'react';
import { Section } from './Section';
import { ShoppingBag, CreditCard, Gift, Percent, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShoppingBag,
    title: 'خرید آسان',
    description: 'خرید از هزاران فروشگاه طرف قرارداد از طریق دستگاه پوز، درگاه آنلاین و QR Code.'
  },
  {
    icon: Percent,
    title: 'تخفیف و کش‌بک',
    description: 'دریافت تخفیف لحظه‌ای و بازگشت مبلغ (کش‌بک) به کیف پول شما پس از هر خرید.'
  },
  {
    icon: Gift,
    title: 'امتیاز وفاداری',
    description: 'با هر تراکنش امتیاز بگیرید و آن را به اعتبار خرید یا پول نقد تبدیل کنید.'
  },
  {
    icon: ShieldCheck,
    title: 'درخواست اعتبار',
    description: 'فرآیند کاملاً آنلاین درخواست، احراز هویت و تخصیص اعتبار سازمانی.'
  },
  {
    icon: CreditCard,
    title: 'خرید قسطی',
    description: 'امکان خرید الان و پرداخت بعداً به صورت اقساطی از حقوق ماهانه.'
  },
  {
    icon: Clock,
    title: 'مدیریت هوشمند',
    description: 'مشاهده ریز تراکنش‌ها و مدیریت اقساط در یک پنل کاربری ساده.'
  }
];

export const Features = () => {
  return (
    <Section id="features" background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">ویژگی‌های اصلی برای دارندگان کارت</h2>
        <p className="text-slate-600 text-lg">
          آوید کارت فقط یک کارت بانکی نیست؛ ابزاری برای مدیریت بهتر هزینه‌ها و افزایش قدرت خرید شماست.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
