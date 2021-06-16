const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/product"],
    exact: false,
    component: "Product",
  },
];

export default routes;
