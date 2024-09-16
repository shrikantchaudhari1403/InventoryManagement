import React from "react";
import "./index.css";

export const stateOptions = [
  { id: "AL", value: "AL", label: "Alabama" },
  { id: "AK", value: "AK", label: "Alaska" },
  { id: "AS", value: "AS", label: "American Samoa" },
  { id: "AZ", value: "AZ", label: "Arizona" },
  { id: "AR", value: "AR", label: "Arkansas" },
  { id: "CA", value: "CA", label: "California" },
  { id: "CO", value: "CO", label: "Colorado" },
  { id: "CT", value: "CT", label: "Connecticut" },
  { id: "DE", value: "DE", label: "Delaware" },
  { id: "DC", value: "DC", label: "District Of Columbia" },
  { id: "FM", value: "FM", label: "Federated States Of Micronesia" },
  { id: "FL", value: "FL", label: "Florida" },
  { id: "GA", value: "GA", label: "Georgia" },
  { id: "GU", value: "GU", label: "Guam" },
  { id: "HI", value: "HI", label: "Hawaii" },
  { id: "ID", value: "ID", label: "Idaho" },
  { id: "IL", value: "IL", label: "Illinois" },
  { id: "IN", value: "IN", label: "Indiana" },
  { id: "IA", value: "IA", label: "Iowa" },
  { id: "KS", value: "KS", label: "Kansas" },
  { id: "KY", value: "KY", label: "Kentucky" },
  { id: "LA", value: "LA", label: "Louisiana" },
  { id: "ME", value: "ME", label: "Maine" },
  { id: "MH", value: "MH", label: "Marshall Islands" },
  { id: "MD", value: "MD", label: "Maryland" },
  { id: "MA", value: "MA", label: "Massachusetts" },
  { id: "MI", value: "MI", label: "Michigan" },
  { id: "MN", value: "MN", label: "Minnesota" },
  { id: "MS", value: "MS", label: "Mississippi" },
  { id: "MO", value: "MO", label: "Missouri" },
  { id: "MT", value: "MT", label: "Montana" },
  { id: "NE", value: "NE", label: "Nebraska" },
  { id: "NV", value: "NV", label: "Nevada" },
  { id: "NH", value: "NH", label: "New Hampshire" },
  { id: "NJ", value: "NJ", label: "New Jersey" },
  { id: "NM", value: "NM", label: "New Mexico" },
  { id: "NY", value: "NY", label: "New York" },
  { id: "NC", value: "NC", label: "North Carolina" },
  { id: "ND", value: "ND", label: "North Dakota" },
  { id: "MP", value: "MP", label: "Northern Mariana Islands" },
  { id: "OH", value: "OH", label: "Ohio" },
  { id: "OK", value: "OK", label: "Oklahoma" },
  { id: "OR", value: "OR", label: "Oregon" },
  { id: "PW", value: "PW", label: "Palau" },
  { id: "PA", value: "PA", label: "Pennsylvania" },
  { id: "PR", value: "PR", label: "Puerto Rico" },
  { id: "RI", value: "RI", label: "Rhode Island" },
  { id: "SC", value: "SC", label: "South Carolina" },
  { id: "SD", value: "SD", label: "South Dakota" },
  { id: "TN", value: "TN", label: "Tennessee" },
  { id: "TX", value: "TX", label: "Texas" },
  { id: "UT", value: "UT", label: "Utah" },
  { id: "VT", value: "VT", label: "Vermont" },
  { id: "VI", value: "VI", label: "Virgin Islands" },
  { id: "VA", value: "VA", label: "Virginia" },
  { id: "WA", value: "WA", label: "Washington" },
  { id: "WV", value: "WV", label: "West Virginia" },
  { id: "WI", value: "WI", label: "Wisconsin" },
  { id: "WY", value: "WY", label: "Wyoming" }
];

const countries = [
  {
    id: "NG",
    value: "NG",
    label: "Nigeria",
    flag: "https://www.countryflags.io/NG/shiny/32.png"
  },
  {
    id: "US",
    value: "US",
    label: "United States",
    flag: "https://www.countryflags.io/US/shiny/32.png"
  },
  {
    id: "IL",
    value: "IL",
    label: "Isreal",
    flag: "https://www.countryflags.io/IL/shiny/32.png"
  },
  {
    id: "RO",
    value: "RO",
    label: "Romania",
    flag: "https://www.countryflags.io/RO/shiny/32.png"
  },
  {
    id: "DE",
    value: "DE",
    label: "Germany",
    flag: "https://www.countryflags.io/DE/shiny/32.png"
  },
  {
    id: "BS",
    value: "BS",
    label: "Bahamas",
    flag: "https://www.countryflags.io/BS/shiny/32.png"
  },
  {
    id: "CN",
    value: "CN",
    label: "China",
    flag: "https://www.countryflags.io/CN/shiny/32.png"
  },
  {
    id: "SO",
    value: "SO",
    label: "Somalia",
    flag: "https://www.countryflags.io/SO/shiny/32.png"
  }
];

export const updatedCountries = countries.map((item) => {
  item.label = (
    <div className="label">
      <span>{item.label}</span>
      <img src={item.flag} alt="flag" />
    </div>
  );
  return item;
});
