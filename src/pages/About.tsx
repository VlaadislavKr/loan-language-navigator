
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Link } from 'react-router-dom';

/**
 * Страница "О нас"
 * Содержит информацию о проекте 44Finance и его команде
 */
const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              At 44Finance, we're committed to providing transparent, accurate, and unbiased 
              information about loan products across multiple countries. Our mission is to help 
              consumers make informed financial decisions by comparing different credit offers 
              and understanding their options.
            </p>
            <p className="text-lg mb-6">
              We believe that everyone deserves access to clear financial information in their 
              preferred language, which is why we offer our services in multiple languages 
              across different countries.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-lg mb-6">
              We analyze and compare hundreds of loan offers from various lenders, presenting 
              the information in a clear, easy-to-understand format. Our comparison tools help 
              you find the most suitable financial solutions based on your specific needs.
            </p>
            <p className="text-lg mb-6">
              Our website covers various types of loans including quick loans, consumer loans, 
              mortgage loans, and more. We regularly update our database to ensure that all 
              information is current and accurate.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-lg mb-6">
              Our team consists of financial experts, data analysts, and content creators who 
              are passionate about helping people make smart financial choices. Meet our team 
              leader:
            </p>
            <div className="mb-6">
              <Link to="/about/vladislav-kotkas-cv" className="text-blue-600 font-medium hover:underline">
                Vladislav Kotkas - Founder & CEO
              </Link>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">How We Make Money</h2>
            <p className="text-lg mb-6">
              We maintain our independence by clearly separating our editorial content from our 
              commercial relationships. We may receive compensation from lenders when users 
              click on links or apply for products through our platform, but this never affects 
              our rankings, evaluations, or reviews.
            </p>
            <p className="text-lg">
              Our primary focus is always on providing value to our users through honest, 
              transparent, and comprehensive information.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
