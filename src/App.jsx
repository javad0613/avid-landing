import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-vazir text-right" dir="rtl">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* What is Avid Card Section */}
        <Section id="about" className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">آوید کارت چیست؟</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-loose">
              آوید کارت یک کارت اعتباری سازمانی است که همراه با یک اپلیکیشن کاملاً شخصی‌سازی‌شده برای هر سازمان ارائه می‌شود.
              کارکنان کارت اختصاصی سازمان خود را دریافت می‌کنند و از طریق اپ و وب‌سایت آوید می‌توانند در فروشگاه‌های آنلاین و حضوری طرف قرارداد خرید کنند.
            </p>
          </div>
        </Section>

        <Features />
        <Benefits />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

export default App;
