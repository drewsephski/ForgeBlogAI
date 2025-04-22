
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate dark:prose-invert max-w-none">
          <p>Last updated: April 22, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to BlogForge ("we," "our," or "us"). These Terms of Service govern your use of our website, 
            products, and services (collectively, the "Services"). By accessing or using our Services, you agree 
            to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
          </p>
          
          <h2>2. Account Registration</h2>
          <p>
            To access certain features of the Services, you may be required to register for an account. 
            You agree to provide accurate, current, and complete information during the registration process 
            and to update such information to keep it accurate, current, and complete.
          </p>
          
          <h2>3. Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the Services. 
            By submitting, posting, or displaying content on or through the Services, you grant us a worldwide, 
            non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, 
            display, and distribute such content.
          </p>
          <p>
            You are solely responsible for your content and the consequences of submitting it. We do not endorse 
            any content or any opinion, recommendation, or advice expressed therein, and we expressly disclaim 
            any and all liability in connection with user content.
          </p>
          
          <h2>4. Pricing and Payments</h2>
          <p>
            Some of our Services are offered for a fee. By choosing a paid Service, you agree to pay the fees 
            as described at the time of purchase. Prices may change at any time, but price changes will not affect 
            existing purchases.
          </p>
          
          <h2>5. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Services at our sole discretion, without 
            prior notice or liability, for any reason, including but not limited to a breach of these Terms.
          </p>
          
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall BlogForge, its officers, directors, employees, or agents be liable for any indirect, 
            incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
            incurred directly or indirectly.
          </p>
          
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make changes, we will provide notice 
            by posting the updated Terms on our website. Your continued use of the Services after any such changes 
            constitutes your acceptance of the new Terms.
          </p>
          
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@blogforge.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;
