import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ROUTES} from "./config/routes.js";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BreastHealth from "./components/BreastHealth/BreastHealth.jsx";
import PMSAndMastopathy from "./components/PMSAndMastopathy/PMSAndMastopathy.jsx";
import AboutMastopathy from "./components/AboutMastopathy/AboutMastopathy.jsx";
import UltrasoundDiagnostics from "./components/UltrasoundDiagnostics/UltrasoundDiagnostics.jsx";
import SurveyForConsultation from "./components/SurveyForConsultation/SurveyForConsultation.jsx";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};


const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
                {
                    path: ROUTES.BREAST_HEALTH,
                    element: <BreastHealth/>
                },
                {
                    path: ROUTES.PMS_MASTOPATHY,
                    element: <PMSAndMastopathy/>
                },
                {
                    path: ROUTES.ABOUT_MASTOPATHY,
                    element: <AboutMastopathy/>
                },
                {
                    path: ROUTES.ULTRASOUND_DIAGNOSTICS,
                    element: <UltrasoundDiagnostics/>
                },
                {
                    path: ROUTES.SURVEY_FOR_CONSULTATION,
                    element: <SurveyForConsultation/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;