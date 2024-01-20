import { createContext } from "react";

export interface CurrentLocationContextType {
  longitude: number,
  latitude: number,
  country: string,
  address: string,
  timezoneOffset: number,
  timestamp: number,
  message: string,
  verdict: string,
  temperature: {
    value: string,
    verdict: number,
  },
  visibility: {
    value: string,
    verdict: number
  },
  precipitation: {
    value: string,
    verdict: number
  },
  wind: {
    value: string,
    verdict: number
  },
  gusts: {
    value: string,
    verdict: number
  },
  uvIndex: {
    value: string,
    verdict: number
  },
  nearbyPilots: {
    value: number,
    verdict: number
  },
  kpIndex: {
    value: string,
    verdict: number
  },
  satellites: {
    value: number,
    verdict: number
  }
}

interface ForecastItem {
  title: string;
  value: string | number;
  verdict: number;
  full_data_html?: string;
}

interface ForecastData {
  address: string;
  latitude: string;
  longitude: string;
  portrait_width: number;
  landscape_width: number;
  timezoneOffset: number;
  forecast: {
    dateLabel: string;
    dateLabelLong: string;
    timeLabel: string;
    message: string;
    verdict: number;
    timestamp: number;
    data: ForecastItem[];
  }[];
}

export const LocationContext = createContext<CurrentLocationContextType | null>(null)

export const transformForecastData = (latitude: number, longitude: number, data: ForecastData): CurrentLocationContextType => {
  const forecastData = data.forecast[0]; // Assuming there's only one forecast entry in the array

  // Function to extract country from the address
  const extractCountryFromAddress = (address: string): string => {
    // You can implement a logic here based on your address structure
    // For example, if the country is at the end of the address, you can use:
    const addressParts = address.split(',').map(part => part.trim());
    return addressParts[addressParts.length - 1] || '';
  };

  const country = extractCountryFromAddress(data.address);

  return {
    longitude,
    latitude,
    country,
    address: data.address,
    timezoneOffset: data.timezoneOffset,
    timestamp: forecastData.timestamp,
    message: forecastData.message,
    verdict: forecastData.verdict.toString(),
    temperature: {
      value: forecastData.data.find((item) => item.title === 'Temp (C)')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'Temp (C)')?.verdict || 0,
    },
    visibility: {
      value: forecastData.data.find((item) => item.title === 'Visibility')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'Visibility')?.verdict || 0,
    },
    precipitation: {
      value: forecastData.data.find((item) => item.title === 'Precip Prob')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'Precip Prob')?.verdict || 0,
    },
    wind: {
      value: forecastData.data.find((item) => item.title === 'Wind (km/h)')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'Wind (km/h)')?.verdict || 0,
    },
    gusts: {
      value: forecastData.data.find((item) => item.title === 'Gusts (km/h)')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'Gusts (km/h)')?.verdict || 0,
    },
    uvIndex: {
      value: forecastData.data.find((item) => item.title === 'UV Index')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'UV Index')?.verdict || 0,
    },
    nearbyPilots: {
      value: forecastData.data.find((item) => item.title === 'Pilots Nearby')?.value as number || 0,
      verdict: forecastData.data.find((item) => item.title === 'Pilots Nearby')?.verdict || 0,
    },
    kpIndex: {
      value: forecastData.data.find((item) => item.title === 'Kp Index')?.value as string || '',
      verdict: forecastData.data.find((item) => item.title === 'Kp Index')?.verdict || 0,
    },
    satellites: {
      value: forecastData.data.find((item) => item.title === 'Sats')?.value as number || 0,
      verdict: forecastData.data.find((item) => item.title === 'Sats')?.verdict || 0,
    },
  };
};