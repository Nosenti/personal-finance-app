"use client";
import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import IconNavOverview from '@/public/assets/images/icon-nav-overview.svg';
import IconNavBudgets from '@/public/assets/images/icon-nav-budgets.svg';
import IconNavPots from '@/public/assets/images/icon-nav-pots.svg';
import IconNavRecurringBills from '@/public/assets/images/icon-nav-recurring-bills.svg';
import IconNavTransactions from '@/public/assets/images/icon-nav-transactions.svg';
import Logo from '@/public/assets/images/logo-large.svg';
import LogoSmall from '@/public/assets/images/logo-small.svg';
import IconMinimizeMenu from '@/public/assets/images/icon-minimize-menu.svg';
import { Button } from './ui/button';

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <div
      className={`bg-primary rounded-r-xl h-full text-white flex flex-col justify-between ${
        isMinimized ? 'w-20' : 'w-64'
      } transition-all duration-300`}
    >
      {/* Top Section */}
      <div>
        <div
          className={`top flex items-center pt-6 mb-12 ${
            isMinimized ? 'justify-center' : 'pl-6'
          }`}
        >
          {isMinimized ? <LogoSmall /> : <Logo />}
        </div>
        <ul>
          <li>
            <SidebarButton
              path="/in/overview"
              icon={<IconNavOverview />}
              isMinimized={isMinimized}
            >
              Overview
            </SidebarButton>
          </li>
          <li>
            <SidebarButton
              path="/in/transactions"
              icon={<IconNavTransactions />}
              isMinimized={isMinimized}
            >
              Transactions
            </SidebarButton>
          </li>
          <li>
            <SidebarButton
              path="/in/budgets"
              icon={<IconNavBudgets />}
              isMinimized={isMinimized}
            >
              Budgets
            </SidebarButton>
          </li>
          <li>
            <SidebarButton
              path="/in/pots"
              icon={<IconNavPots />}
              isMinimized={isMinimized}
            >
              Pots
            </SidebarButton>
          </li>
          <li>
            <SidebarButton
              path="/in/recurring-bills"
              icon={<IconNavRecurringBills />}
              isMinimized={isMinimized}
            >
              Recurring Bills
            </SidebarButton>
          </li>
        </ul>
      </div>
      {/* Bottom Section */}
      <div className="mb-6">
        <Button
          onClick={() => setIsMinimized(!isMinimized)}
          className={`w-full flex justify-start pl-6 text-gray-300 hover:text-white`}
        >
				  <IconMinimizeMenu className={ `${isMinimized && 'rotate-180'}`} />
        </Button>
      </div>
    </div>
  );
}
