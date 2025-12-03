import React from 'react';
import { Button } from './Button';
import { Smartphone, Apple, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* CTA Section */}
        <div className="text-center mb-16 border-b border-white/10 pb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            آوید کارت؛ تجربه‌ای نوین از <br />
            <span className="text-primary">اعتبار، تخفیف و خرید هوشمند</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            همین حالا اپلیکیشن را دانلود کنید و به جمع هزاران کاربر راضی آوید بپیوندید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" icon={Smartphone} className="h-14 text-lg">
              دانلود نسخه اندروید
            </Button>
            <Button variant="white" icon={Apple} className="h-14 text-lg">
              دانلود نسخه iOS
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold">آ</div>
              <span className="text-xl font-bold">آوید کارت</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              آوید کارت با ارائه راهکارهای نوین مالی، پل ارتباطی میان سازمان‌ها، کارکنان و پذیرندگان است.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">دسترسی سریع</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">خدمات</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">کارت سازمانی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">شبکه پذیرندگان</a></li>
              <li><a href="#" className="hover:text-white transition-colors">خرید اقساطی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">باشگاه مشتریان</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">تماس با ما</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>تهران، میدان میرداماد، کوچه حصاری، پلاک ۷۳</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span dir="ltr">+98 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@avidcard.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© ۱۴۰۳ تمامی حقوق برای آوید کارت محفوظ است.</p>
          <p>طراحی و توسعه با ❤️</p>
        </div>
      </div>
    </footer>
  );
};
