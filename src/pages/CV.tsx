
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Страница с резюме Владислава Коткаса
 */
const CV = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="aspect-square bg-slate-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-2">Vladislav Kotkas</h1>
              <p className="text-xl text-muted-foreground mb-4">Founder & CEO at 44Finance</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Finance</Badge>
                <Badge>Entrepreneurship</Badge>
                <Badge>Web Development</Badge>
                <Badge>SEO</Badge>
              </div>
              <p className="text-lg mb-6">
                Financial expert and entrepreneur with over 10 years of experience in the fintech industry.
                Passionate about helping people make informed financial decisions through transparent
                information and technology.
              </p>
            </div>
          </div>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-medium">Founder & CEO</h3>
                  <span className="text-sm text-muted-foreground">2015 - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">44Finance</p>
                <p>
                  Founded and grew 44Finance into a leading loan comparison platform serving
                  multiple European countries. Developed the business strategy, built partnerships
                  with financial institutions, and led the technology development.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-medium">Financial Consultant</h3>
                  <span className="text-sm text-muted-foreground">2012 - 2015</span>
                </div>
                <p className="text-muted-foreground mb-2">Major Financial Institution</p>
                <p>
                  Provided financial advice to clients, analyzed market trends, and developed
                  financial strategies. Specialized in consumer credit and mortgage products.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-medium">Web Developer</h3>
                  <span className="text-sm text-muted-foreground">2010 - 2012</span>
                </div>
                <p className="text-muted-foreground mb-2">Tech Solutions Inc.</p>
                <p>
                  Developed and maintained websites for financial services clients. 
                  Implemented SEO strategies and analytics tracking.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-medium">MBA, Finance</h3>
                  <span className="text-sm text-muted-foreground">2008 - 2010</span>
                </div>
                <p className="text-muted-foreground">University of Finance</p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-medium">BSc, Computer Science</h3>
                  <span className="text-sm text-muted-foreground">2004 - 2008</span>
                </div>
                <p className="text-muted-foreground">Technical University</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Skills & Languages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Financial Analysis</Badge>
                    <Badge variant="outline">SEO</Badge>
                    <Badge variant="outline">Web Development</Badge>
                    <Badge variant="outline">Business Strategy</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Digital Marketing</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>English</span>
                      <span>Fluent</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Estonian</span>
                      <span>Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Russian</span>
                      <span>Fluent</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Finnish</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CV;
