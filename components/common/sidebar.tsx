"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BarChart2, Home, Layers, Menu, MessageCircle, Moon, PanelLeft, Settings, Star, Sun, Users } from 'lucide-react';
import Link from 'next/link';
import { useSupabase } from '@/hooks/useSupabase';


const Sidebar =  () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useSupabase();
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex w-16 flex-col items-center border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-4">
    <div className="mb-6">
      <Link href="/account">
      <Avatar className="h-8 w-8 bg-green-500 text-white">
        <AvatarImage src={`https://avatar.vercel.sh/${user?.email?.slice}`} />
        <AvatarFallback className='uppercase text-black'>{user?.email?.slice(0, 2)}</AvatarFallback>
      </Avatar>
      </Link>
    </div>
    <nav className="flex flex-1 flex-col items-center space-y-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <Home className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-gray-100 dark:bg-gray-700"
      >
        <MessageCircle className="h-5 w-5 text-green-500" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <BarChart2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <Layers className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <Users className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <Star className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <PanelLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
    </nav>
    <div className="mt-auto flex flex-col items-center space-y-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-500" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
    </div>
  </div>
  )
}

export default Sidebar