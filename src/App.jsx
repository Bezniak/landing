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
import {useEffect, useState} from "react";
import ModalWindow from "./components/ModalWindow/ModalWindow.jsx";
import {FaPlusCircle} from "react-icons/fa";


const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Show the modal initially and every minute
    useEffect(() => {
        // Function to open modal
        const openModal = () => {
            setIsModalOpen(true);
        };

        // Show the modal immediately when the app is loaded
        openModal();

        // Set interval to show modal every 1 minute (60000 ms)
        const intervalId = setInterval(openModal, 60000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    // Close modal handler
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Open modal when button is clicked
    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            {/* Modal that shows immediately after the app loads */}
            {isModalOpen && <ModalWindow closeModal={closeModal}/>}
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <Footer/>

            {/* Floating Action Button */}
            <button
                onClick={openModalHandler}
                className="fixed bottom-10 right-10 bg-pink-300 text-white p-4 rounded-full shadow-lg hover:bg-pink-500 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                title="Show Pharmacies"
            >
                <FaPlusCircle size={32}/>
            </button>
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