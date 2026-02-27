import React from 'react';

export interface Client {
  name: string;
  handle: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}