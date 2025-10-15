import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-[60vh] pt-20">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Your Privacy Matters
            </h1>
            <p className="py-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              We protect your data with the same care we bring to your events
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Encrypted</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Secure</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Transparent</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UserCheck className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-xl">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              My Chef Bali ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our hospitality staffing services, visit our website www.mychef.in, or interact with us through any means.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (including WhatsApp)</li>
              <li>Physical address (villa location, event venue, etc.)</li>
              <li>Payment information</li>
              <li>Dietary preferences and restrictions</li>
              <li>Event details (guest count, occasion type, special requirements)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">When you visit our website, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website</li>
              <li>Date and time of visits</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect website functionality.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and manage our hospitality staffing services</li>
              <li>Process bookings and payments</li>
              <li>Communicate with you about your service requests</li>
              <li>Match you with appropriate staff members</li>
              <li>Send booking confirmations and service updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our services and website functionality</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1 Our Staff Members</h3>
            <p className="text-muted-foreground leading-relaxed">
              We share necessary information with our employed/contracted chefs, servers, and other staff members to fulfill your service requests. All staff are bound by confidentiality agreements.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed">
              We work with third-party service providers who assist us in operating our business, including payment processors, email service providers, and analytics platforms. These providers are contractually obligated to protect your information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3 Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.4 Business Transfers</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-6 font-semibold">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>Secure SSL encryption for data transmission</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Staff training on data protection</li>
              <li>Secure payment processing through trusted providers</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at info@mychef.in or +62 822-3756-5997. We will respond to your request within 30 days.
            </p>
          </section>

          {/* Marketing Communications */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Marketing Communications</h2>
            <p className="text-muted-foreground leading-relaxed">
              With your consent, we may send you promotional emails about our services, special offers, and updates. You can opt out of marketing communications at any time by clicking the "unsubscribe" link in our emails or by contacting us directly. Please note that even if you opt out of marketing communications, we will still send you transactional messages related to your bookings.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our business is based in Bali, Indonesia. If you are accessing our services from outside Indonesia, please be aware that your information may be transferred to, stored, and processed in Indonesia. By using our services, you consent to the transfer of your information to Indonesia.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <p className="font-semibold text-foreground mb-2">My Chef Bali</p>
              <p className="text-muted-foreground">Jalan Sunset Road No. 88</p>
              <p className="text-muted-foreground">Seminyak, Bali 80361, Indonesia</p>
              <p className="text-muted-foreground mt-3">Phone/WhatsApp: +62 822-3756-5997</p>
              <p className="text-muted-foreground">Email: info@mychef.in</p>
              <p className="text-muted-foreground">Website: www.mychef.in</p>
            </div>
          </section>

          {/* Consent */}
          <section className="bg-primary/5 rounded-lg p-6 border border-primary/20 mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>
        </div>
      </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
