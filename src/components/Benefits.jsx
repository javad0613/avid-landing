import React from 'react';
import { Section } from './Section';
import { Building2, Store, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Benefits = () => {
  return (
    <>
      {/* Organizations Section */}
      <Section id="organizations">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">مزایا برای سازمان‌ها</h2>
            <p className="text-slate-600 text-lg mb-8">
              با پیوستن به شبکه آوید کارت، رفاه کارکنان خود را ارتقا دهید و هزینه‌های رفاهی را هوشمندانه مدیریت کنید.
            </p>
            
            <ul className="space-y-4">
              {[
                'ارائه کارت اعتباری سازمانی با برند سازمان',
                'افزایش رضایت شغلی و وفاداری کارکنان',
                'سیستم یکپارچه مدیریت تسهیلات و بازپرداخت',
                'حذف فرآیندهای کاغذی و بروکراسی اداری',
                'گزارش‌گیری دقیق و شفاف از هزینه‌ها'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <div className="order-1 md:order-2 bg-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[300px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-200 opacity-50"></div>
             {/* Abstract visual for Organization */}
             <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-xs">
                <div className="bg-white p-4 rounded-xl shadow-sm animate-pulse">
                    <div className="w-8 h-8 bg-blue-100 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm mt-8">
                    <div className="w-8 h-8 bg-green-100 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm -mt-8">
                    <div className="w-8 h-8 bg-purple-100 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-orange-100 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Merchants Section */}
      <Section id="merchants" background="gray">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
          <div className="bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-white/10">SHOP</div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-[-20px]">
                      <div className="text-primary font-bold text-2xl mb-1">+۳۰٪</div>
                      <div className="text-white text-sm">افزایش فروش ماهانه</div>
                  </div>
              </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <Store className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">مزایا برای پذیرندگان</h2>
            <p className="text-slate-600 text-lg mb-8">
              به شبکه گسترده‌ای از کسب‌وکارهای طرف قرارداد بپیوندید و مشتریان جدیدی از سازمان‌های معتبر جذب کنید.
            </p>
            
            <ul className="space-y-4">
              {[
                'دسترسی به جامعه بزرگ مشتریان سازمانی',
                'تضمین پرداخت و تسویه حساب منظم',
                'افزایش فروش از طریق ابزارهای وفاداری (کش‌بک)',
                'تبلیغ کسب‌وکار شما در اپلیکیشن آوید کارت',
                'امکان تعریف کمپین‌های فروش ویژه'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
