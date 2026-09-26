import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Helper/Layout.jsx";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeOneSingle from "./components/HomeOne/index-single.jsx";
import HomeTwoSingle from "./components/HomeTwo/index-single.jsx";
import HomeThreeSingle from "./components/HomeThree/index-single.jsx";
import HomeFourSingle from "./components/HomeFour/index-single.jsx";
import HomeOneDark from "./components/HomeOne/index-1-dark.jsx";
import HomeTwoDark from "./components/HomeTwo/index-2-dark.jsx";
import HomeThreeDark from "./components/HomeThree/index-3-dark.jsx";
import HomeFourDark from "./components/HomeFour/index-4-dark.jsx";
import HomeOneRed from "./components/HomeOne/index-1-red.jsx";
import HomeTwoRed from "./components/HomeTwo/index-2-red.jsx";
import HomeThreeRed from "./components/HomeThree/index-3-red.jsx";
import HomeFourRed from "./components/HomeFour/index-4-red.jsx";
import HomeOneYellow from "./components/HomeOne/index-1-yellow.jsx";
import HomeTwoYellow from "./components/HomeTwo/index-2-yellow.jsx";
import HomeThreeYellow from "./components/HomeThree/index-3-yellow.jsx";
import HomeFourYellow from "./components/HomeFour/index-4-yellow.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Services from "./components/ServicesPages/index.jsx";
import ServicesDetails from "./components/ServicesPages/ServicesDetails.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import Team from "./components/TeamPages/index.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import Pricing from "./components/PricingPages/index.jsx";
import PricingSwitcher from "./components/PricingPages/PricingSwitcher.jsx";
import Testimonial from "./components/TestimonialPages/index.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },
      {
        path: "/index-2",
        element: <HomeTwo />
      },
      {
        path: "/index-3",
        element: <HomeThree />
      },
      {
        path: "/index-4",
        element: <HomeFour />
      },
      {
        path: "/index-single",
        element: <HomeOneSingle />
      },
      {
        path: "/index-2-single",
        element: <HomeTwoSingle />
      },
      {
        path: "/index-3-single",
        element: <HomeThreeSingle />
      },
      {
        path: "/index-4-single",
        element: <HomeFourSingle />
      },
      {
        path: "/index-dark",
        element: <HomeOneDark />
      },
      {
        path: "/index-2-dark",
        element: <HomeTwoDark />
      },
      {
        path: "/index-3-dark",
        element: <HomeThreeDark />
      },
      {
        path: "/index-4-dark",
        element: <HomeFourDark />
      },
      {
        path: "/index-red",
        element: <HomeOneRed />
      },
      {
        path: "/index-2-red",
        element: <HomeTwoRed />
      },
      {
        path: "/index-3-red",
        element: <HomeThreeRed />
      },
      {
        path: "/index-4-red",
        element: <HomeFourRed />
      },
      {
        path: "/index-yellow",
        element: <HomeOneYellow />
      },
      {
        path: "/index-2-yellow",
        element: <HomeTwoYellow />
      },
      {
        path: "/index-3-yellow",
        element: <HomeThreeYellow />
      },
      {
        path: "/index-4-yellow",
        element: <HomeFourYellow />
      },
      {
        path: "/page-about",
        element: <AboutUs />
      },
      {
        path: "/page-services",
        element: <Services />
      },
      {
        path: "/page-service-details",
        element: <ServicesDetails />
      },
      {
        path: "/page-projects",
        element: <Projects />
      },
      {
        path: "/page-project-details",
        element: <ProjectsDetails />
      },
      {
        path: "/shop-products",
        element: <Products />
      },
      {
        path: "/shop-cart",
        element: <Cart />
      },
      {
        path: "/shop-checkout",
        element: <Checkout />
      },
      {
        path: "/shop-products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "/shop-product-details",
        element: <ProductsDetails />
      },
      {
        path: "/news-grid",
        element: <News />
      },
      {
        path: "/news-details",
        element: <NewsDetails />
      },
      {
        path: "/page-contact",
        element: <Contact />
      },
      {
        path: "/page-team",
        element: <Team />
      },
      {
        path: "/page-team-details",
        element: <TeamDetails />
      },
      {
        path: "/page-testimonial",
        element: <Testimonial />
      },
      {
        path: "/page-faq",
        element: <Faq />
      },
      {
        path: "/page-pricing",
        element: <Pricing />
      },
      {
        path: "/page-pricing-switcher",
        element: <PricingSwitcher />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;