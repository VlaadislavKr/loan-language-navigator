
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

/**
 * Страница политики конфиденциальности
 * Содержит информацию о обработке персональных данных
 */
const Privacy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              This Privacy Policy describes how 44Finance ("we", "us", or "our") collects, uses, 
              and shares your personal information when you visit our website.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you visit the Site, we automatically collect certain information about your 
              device, including information about your web browser, IP address, time zone, 
              and some of the cookies that are installed on your device.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information that we collect to help us screen for potential risk and fraud, 
              and more generally to improve and optimize our Site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Your Personal Information</h2>
            <p className="mb-4">
              We share your Personal Information with service providers to help us provide our 
              services and fulfill our contracts with you.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              If you are a European resident, you have the right to access personal information 
              we hold about you and to ask that your personal information be corrected, 
              updated, or deleted.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p className="mb-4">
              When you submit information through the Site, we will maintain your information 
              for our records unless and until you ask us to delete this information.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time in order to reflect changes 
              to our practices or for other operational, legal, or regulatory reasons.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              For more information about our privacy practices, if you have questions, 
              or if you would like to make a complaint, please contact us by e-mail 
              at info@44finance.com.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
