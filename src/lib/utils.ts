import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// utils/getIPAddress.ts

/**
 * Fetches the user's IP address using multiple fallback methods
 * @returns Promise<string> - The user's IP address or 'Unknown' if all methods fail
 */
export const getUserIPAddress = async (): Promise<string> => {
  // Method 1: Try ipify (most reliable, free)
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    if (data.ip) {
      return data.ip;
    }
  } catch (error) {
    console.log('ipify failed, trying next method...');
  }

  // Method 2: Try ipapi.co
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.ip) {
      return data.ip;
    }
  } catch (error) {
    console.log('ipapi.co failed, trying next method...');
  }

  // Method 3: Try ip-api.com
  try {
    const response = await fetch('https://ip-api.com/json/');
    const data = await response.json();
    if (data.query) {
      return data.query;
    }
  } catch (error) {
    console.log('ip-api.com failed, trying next method...');
  }

  // Method 4: Try cloudflare trace
  try {
    const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
    const text = await response.text();
    const ipMatch = text.match(/ip=([^\n]+)/);
    if (ipMatch && ipMatch[1]) {
      return ipMatch[1];
    }
  } catch (error) {
    console.log('Cloudflare trace failed');
  }

  return 'Unknown';
};

/**
 * Fetches detailed IP information including location
 * @returns Promise<IPInfo> - Detailed IP information
 */
export interface IPInfo {
  ip: string;
  country?: string;
  region?: string;
  city?: string;
  timezone?: string;
  isp?: string;
}

export const getDetailedIPInfo = async (): Promise<IPInfo> => {
  try {
    // Using ipapi.co for detailed info (100 requests/day free)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      ip: data.ip || 'Unknown',
      country: data.country_name,
      region: data.region,
      city: data.city,
      timezone: data.timezone,
      isp: data.org,
    };
  } catch (error) {
    console.error('Failed to get detailed IP info:', error);
    
    // Fallback to just IP
    const ip = await getUserIPAddress();
    return { ip };
  }
};