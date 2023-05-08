export const NAVBAR_TEXTS = [
  { page: "/", text: "Home Page" },
  { page: "/dashboard", text: "Dashboard Page" },
  { page: "/add", text: "Add Device Page" },
  { page: "/update", text: "Update Device Page" },
  { page: "/calendar", text: "Calendar Page" },
  { page: "/analytics", text: "Analytics Page" },
  { page: "/settings", text: "Settings Page" },
  { page: "/helpandsupport", text: "Help and Support Page" },
  { page: "/logout", text: "Logout Page" },
];

export const buildingData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10, -80], // livingroom bottom
            [-150, -80], // livingroom, bedrrom, kitchen left
            [-150, 80], // livingroom, bedrrom, kitchen left
            [40, 80], // livingroom, bedrrom, kitchen right
            [40, -20], // livingroom, bedrrom, kitchen right
            [150, -20], // office right
            [150, -80], // office right
            [30, -80], // office right
            [30, -74], // office right
            [34, -74], // office left
            [34, -68], // office right
            [40, -68], // office left
            [40, -74], // office left
            [144, -74], // office right inner
            [144, -26], // office right inner
            [40, -26], // office left
            [40, -60], // office left
            [34, -60], // livingroom, bedrrom, kitchen right
            [34, 74], // livingroom, bedrrom, kitchen right
            [-144, 74], // bedroom left
            [-144, 30], // bedroom left
            [10, 30],
            [10, 24],
            [-144, 24],
            [-144, -24],
            [10, -24],
            [10, -30],
            [-144, -30],
            [-144, -74],
            [10, -74],
          ],
        ],
      },
    },
  ],
};

export const roomsData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Living Room",
        device: 0,
        totalDevices: 4,
      },
      path: "livingroom",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-144, -30],
            [34, -30],
            [34, -74],
            [-144, -74],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Kitchen",
        device: 3,
        totalDevices: 4,
      },
      path: "kitchen",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-144, 24],
            [34, 24],
            [34, -24],
            [-144, -24],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Bedroom",
        device: 4,
        totalDevices: 6,
      },
      path: "bedroom",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-144, 74],
            [34, 74],
            [34, 30],
            [-144, 30],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Office",
        device: 2,
        totalDevices: 3,
      },
      path: "office",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [40, -26],
            [144, -26],
            [144, -74],
            [40, -74],
          ],
        ],
      },
    },
  ],
};
