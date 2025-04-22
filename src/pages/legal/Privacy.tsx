
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate dark:prose-invert max-w-none">
          <p>Last updated: April 22, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            At BlogForge, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and protect your information when you use our services.
          </p>
          
          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <p>
            We collect information you provide directly to us, including:
          </p>
          <ul>
            <li>Account information (name, email address, password)</li>
            <li>Profile information (profile picture, bio)</li>
            <li>Content you create (blog posts, comments)</li>
            <li>Communication with us (customer support, feedback)</li>
            <li>Payment information (billing address, payment method details)</li>
          </ul>
          
          <h3>2.2 Information We Collect Automatically</h3>
          <p>
            When you access or use our services, we automatically collect:
          </p>
          <ul>
            <li>Log information (IP address, browser type, pages visited)</li>
            <li>Device information (hardware model, operating system)</li>
            <li>Usage information (features used, interactions)</li>
            <li>Cookies and similar technologies</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Communicate with you about our services</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address fraud and abuse</li>
            <li>Personalize your experience</li>
          </ul>
          
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We may share your information in the following circumstances:
          </p>
          <ul>
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>In connection with a merger, sale, or acquisition</li>
            <li>With your consent or at your direction</li>
          </ul>
          
          <h2>5. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>Access and update your information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          
          <h2>6. Data Security</h2>
          <p>
            We use reasonable measures to help protect your personal information from loss, theft, misuse, 
            and unauthorized access, disclosure, alteration, and destruction.
          </p>
          
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on our website and updating the "Last updated" date.
          </p>
          
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@blogforge.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;
