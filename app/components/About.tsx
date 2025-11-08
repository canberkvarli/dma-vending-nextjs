'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4"
          >
            About Us
          </motion.div>
        </div>
        
        {/* Letter-styled card */}
        <div id="about" className="relative scroll-mt-20">
          <div className="absolute -inset-2 bg-primary/10 blur-2xl rounded-3xl" />
          <div
            className="relative rounded-3xl bg-white text-emerald-950 shadow-xl border border-emerald-900/10 overflow-hidden dark:bg-emerald-900/90 dark:text-white dark:border-white/10"
          >
            {/* subtle ruled-paper pattern */}
            <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(180deg,rgba(169,206,55,0.08)_1px,transparent_1px)] bg-[length:100%_36px] dark:opacity-0" />

            <div className="relative p-8 md:p-12">
              <div className="max-w-none text-emerald-950 dark:text-white" style={{ fontFamily: 'var(--font-hand)' }}>
                <div className="text-[1.35rem] md:text-[1.6rem] leading-8 md:leading-9 space-y-6 font-medium">
                <p>
                  Hi, I'm Mary Ann, an owner of DMA Healthy Vending, a family owned
                  business. My husband, Dennis, and I are lifelong residents of the
                  East Bay and ardent advocates of healthy vending.
                </p>
                <p>
                  You've all seen the stats on increasing rates of childhood and
                  adult obesity rates. The good news is that change is coming.
                  Schools are providing more nutritious meals and more and more
                  gyms, schools, and facilities are looking at healthy vending as a way to
                  promote wellness and healthy eating. This is where we come in.
                </p>
                <p>
                  At DMA Healthy Vending, we bring a healthy vending option to
                  gyms, schools, and facilities in the Bay Area. We can place our healthy
                  vending machine next to traditional snack and drink machines or we
                  can replace the junk food machines with our healthier option.
                </p>
                <p>
                  If you are interested in receiving more information or you would
                  like us to visit your facility, call us directly at
                  <strong> 925 785-6000</strong>.
                </p>
                <p className="mt-8">
                  Have a Healthy Day!
                  <br />
                  Dennis and Mary Ann Scullion
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


