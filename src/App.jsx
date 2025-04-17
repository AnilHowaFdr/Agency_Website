import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import TeamDetails from "./pages/TeamDetails";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Testimonial from "./pages/Testimonial";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceDetail" element={<ServiceDetail />} />
        <Route path="/teamDetails" element={<TeamDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolioDetail" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
