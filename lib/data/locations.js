export const locations = [
  {
    id: 1,
    name: "Downtown Café",
    address: "123 Coffee Street, Downtown, City 10001",
    phone: "(123) 456-7890",
    hours: {
      weekdays: "7:00 AM - 9:00 PM",
      weekends: "8:00 AM - 10:00 PM",
    },
    features: [
      "Free Wi-Fi",
      "Outdoor Seating",
      "Parking Available",
      "Wheelchair Accessible",
    ],
    coordinates: { lat: 40.7128, lng: -74.006 },
    image: "/images/locations/downtown.jpg",
  },
  {
    id: 2,
    name: "Riverside Café",
    address: "456 River Road, Riverside, City 10002",
    phone: "(123) 456-7891",
    hours: {
      weekdays: "6:30 AM - 8:00 PM",
      weekends: "7:30 AM - 9:00 PM",
    },
    features: ["River View", "Pet Friendly", "Event Space", "Live Music"],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    image: "/images/locations/riverside.jpg",
  },
];
