// Define constant routes
export const ROUTES = {
  HOME: "",
  ABOUT: "about",
  CONTACT: "contact",
  CATALOG: "catalog",
  PRODUCT_DETAILS: "catalog/:id",
};

// Define functions for dynamic paths
export const PATHS = {
  PRODUCT_DETAILS: (id: number) => `catalog/${id}`,
};
