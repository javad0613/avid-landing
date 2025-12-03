import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm mb-6">
            نسل جدید خدمات مالی سازمانی
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-6">
            آوید کارت، <br />
            <span className="text-primary">اعتبار هوشمند</span> برای همه
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            کارت اعتباری سازمانی و اکوسیستم یکپارچه خدمات مالی برای سازمان‌ها، کارکنان و پذیرندگان. تجربه‌ای نوین از خرید و مدیریت هزینه.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" icon={Smartphone} className="h-14 text-lg">
              دانلود نسخه اندروید
            </Button>
            <Button variant="outline" icon={Apple} className="h-14 text-lg">
              دانلود نسخه iOS
            </Button>
          </div>
        </motion.div>

        {/* Image/Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 md:w-80 aspect-[9/19] bg-secondary rounded-[3rem] border-8 border-secondary shadow-2xl overflow-hidden">
            {/* Mockup Screen Content */}
            <div className="absolute inset-0 bg-white flex flex-col">
              <div className="h-full w-full bg-slate-50 flex flex-col relative">
                {/* Header Mockup */}
                <div className="bg-primary h-32 rounded-b-[2.5rem] p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="mt-6">
                        <div className="text-sm opacity-80">موجودی اعتبار</div>
                        <div className="text-2xl font-bold">۵۰,۰۰۰,۰۰۰ ریال</div>
                    </div>
                </div>
                
                {/* Card Mockup */}
                <div className="px-4 -mt-8">
                    <div className="bg-secondary text-white p-4 rounded-2xl shadow-lg h-40 flex flex-col justify-between relative overflow-hidden">
                         <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                         <div className="flex justify-between items-start">
                             <div className="font-bold text-lg">Avid Card</div>
                             <div className="w-8 h-5 bg-yellow-500/80 rounded"></div>
                         </div>
                         <div className="flex justify-between items-end">
                             <div className="text-sm tracking-widest">**** **** **** 1234</div>
                             <div className="text-xs opacity-70">1404/12</div>
                         </div>
                    </div>
                </div>

                {/* Actions Mockup */}
                <div className="grid grid-cols-4 gap-2 px-4 mt-6">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                                <div className="w-6 h-6 bg-slate-100 rounded-full"></div>
                            </div>
                            <div className="w-8 h-2 bg-slate-200 rounded-full"></div>
                        </div>
                    ))}
                </div>
                 
                 {/* List Mockup */}
                 <div className="mt-6 px-4 space-y-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-full"></div>
                            <div className="flex-1">
                                <div className="w-24 h-3 bg-slate-200 rounded-full mb-2"></div>
                                <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-1/4 -left-4 md:left-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-10"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                ٪
            </div>
            <div>
                <div className="text-xs text-slate-500">کش‌بک دریافتی</div>
                <div className="font-bold text-secondary">+۲۵۰,۰۰۰ ریال</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="absolute bottom-1/4 -right-4 md:right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-10"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">
                ✓
            </div>
            <div>
                <div className="text-xs text-slate-500">وضعیت اعتبار</div>
                <div className="font-bold text-secondary">تایید شد</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
