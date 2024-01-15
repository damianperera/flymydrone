import { createContext } from "react";

export interface CurrentLocationContextType {
  longitude: number,
  latitude: number,
  country: string
}

export const LocationContext = createContext<CurrentLocationContextType>({
  longitude: 11.576124,
  latitude: 48.137154,
  country: "Germany"
})