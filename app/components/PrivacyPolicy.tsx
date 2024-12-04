'use client';
import React, { useState } from 'react';
import { ChevronRight, Shield, Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Introduction from './sections/Introduction';
import AccountDeletion from './sections/AccountDeletion';
import AgeRestriction from './sections/AgeRestriction';
import BrokenLinks from './sections/BrokenLinks';
import CancellationPolicy from './sections/CancellationPolicy';
import ChildProtection from './sections/ChildProtection';
import ContentRemoval from './sections/ContentRemoval';
import CookiePolicy from './sections/CookiePolicy';
import CopyRightPolicy from './sections/CopyRightPolicy';
import UserConduct from './sections/UserConduct';
import DataPolicy from './sections/DataPolicy';
import RefundPolicy from './sections/RefundPolicy';
import SubsciptionPolicy from './sections/SubsciptionPolicy';
import TermsOfUsage from './sections/TermsOfUsage';

const PrivacyPolicy: React.FC = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const sidebarSections = [
        { title: 'Introduction', id: 'introduction' },
        { title: 'Account Deletion', id: 'account-deletion' },
        { title: 'Age Restrictions', id: 'age-restriction' },
        { title: 'Broken Links', id: 'broken-links' },
        { title: 'Cancellation Policy', id: 'cancellation-policy' },
        { title: 'Child Protection', id: 'child-protection' },
        { title: 'Content Removal', id: 'content-removal' },
        { title: 'Cookie Policy', id: 'cookie-policy' },
        { title: 'Copyright Policy', id: 'copyright-policy' },
        { title: 'User Conduct', id: 'user-conduct' },
        { title : 'Data Policy', id:'data-policy'},
        { title : 'Refund Policy', id:'refund-policy'},
        { title: 'Subscription Policy', id:'subscription-policy' },
        { title: 'Terms of Usage', id: 'terms-of-usage' }
      ];

    
      
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault(); // Prevent default anchor link behavior
        setIsSheetOpen(false); // Close the Sheet

        // Smoothly scroll to the section
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300); // Add slight delay to ensure the Sheet closes first
        }
    };


    const SidebarContent = () => (
        <nav className="space-y-2">
          {sidebarSections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              className="flex items-center py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={(e) => handleLinkClick(e, section.id)}
            >
              <ChevronRight size={16} className="mr-2" />
              {section.title}
            </a>
          ))}
        </nav>
      );

      return (
        <div className="flex min-h-screen bg-gray-50">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden md:block fixed top-0 h-full left-0 w-64 bg-white shadow-md p-6 border-r">
            <div className="flex items-center mb-8">
              <Shield className="mr-3 text-blue-600" size={24} />
              <h2 className="text-xl font-bold text-gray-800">Privacy Policy</h2>
            </div>
            <SidebarContent />
          </div>
    
          {/* Mobile Menu - Visible only on mobile */}
          <div className="md:hidden fixed top-4 left-4 z-50">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <Shield className="mr-3 text-blue-600" size={24} />
                    Privacy Policy
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                  <SidebarContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
    
          {/* Main Content */}
          <main className="flex-1 p-6 md:p-12 overflow-y-auto md:ml-64">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-gray-900 ms-10 md:ms-0">Privacy Policy</h1>
              
              <Introduction />
              <AccountDeletion/>
              <AgeRestriction/>
              <BrokenLinks/>
              <CancellationPolicy/>
              <ChildProtection/>
              <ContentRemoval/>
              <CookiePolicy/>
              <CopyRightPolicy/>
              <UserConduct/>
              <DataPolicy/>
              <RefundPolicy/>
              <SubsciptionPolicy/>
              <TermsOfUsage/>
            </div>
          </main>
        </div>
      );
    };
export default PrivacyPolicy;