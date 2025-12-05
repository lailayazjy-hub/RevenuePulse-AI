
import { AppTheme } from '../types';

export const APP_THEMES: AppTheme[] = [
  {
    id: 'terra-cotta',
    name: 'Terra Cotta Landscape',
    colors: {
      primary: '#52939D',
      highRisk: '#D66D6B',
      mediumRisk: '#F3B0A9',
      lowRisk: '#BDD7C6',
      text: '#242F4D',
    }
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    colors: {
      primary: '#2E7B57',
      highRisk: '#9A6C5A',
      mediumRisk: '#E4F46A',
      lowRisk: '#2E7B57',
      text: '#14242E',
    }
  },
  {
    id: 'autumn-leaves',
    name: 'Autumn Leaves',
    colors: {
      primary: '#B1782F',
      highRisk: '#2E2421',
      mediumRisk: '#B49269',
      lowRisk: '#B1782F',
      text: '#8B8F92',
    }
  },
  {
    id: 'citrus-garden',
    name: 'Citrus Garden',
    colors: {
      primary: '#4D7B41',
      highRisk: '#F8B24A',
      mediumRisk: '#FDD268',
      lowRisk: '#8FAB56',
      text: '#242F4D',
      accent1: '#B5E2EA', // Light Blue
      accent2: '#82A179', // Sage Green
    }
  },
  {
    id: 'rustic-cafe',
    name: 'Rustic Café',
    colors: {
      primary: '#5BB1B3',
      highRisk: '#A65A4E',
      mediumRisk: '#E89A63',
      lowRisk: '#D5B48A',
      text: '#1A1D32',
      accent1: '#8BC7C5',
      accent2: '#011B4D'
    }
  },
  {
    id: 'blood-orange',
    name: 'Blood Orange Velvet',
    colors: {
      primary: '#1A2F5E',
      highRisk: '#B43836',
      mediumRisk: '#F6891F',
      lowRisk: '#E4C18B',
      text: '#202530',
      accent1: '#C5C6C9'
    }
  },
  {
    id: 'canyon-heat',
    name: 'Canyon Heat',
    colors: {
      primary: '#FF7A15',
      highRisk: '#7A0010',
      mediumRisk: '#B1126F',
      lowRisk: '#EF3D22',
      text: '#3B1F12',
      accent1: '#FFD11A'
    }
  }
];
