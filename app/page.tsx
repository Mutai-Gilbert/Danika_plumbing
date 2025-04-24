import Hero from '@/components/hero';
import Services from '@/components/services';
import EmergencyServices from '@/components/emergency-services';
import Testimonials from '@/components/testimonials';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <EmergencyServices />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
