// Define constant routes
export const ROUTES = {
  HOME: "",
  ABOUT: "about",
  CONTACT: "contact",
  CATALOG: "catalog",
  PRODUCT_DETAILS: "catalog/:id",
};

// Define functions for dynamic paths
// Pitfall: Do not forget to add "/" in the beginning to make the path "absolute"
// to prevent duplicate paths like catalog/catalog/2
export const PATHS = {
  PRODUCT_DETAILS: (id: number) => `/catalog/${id}`,
};
