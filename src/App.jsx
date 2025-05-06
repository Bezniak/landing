import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ROUTES } from "./config/routes.js";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import PMSAndMastopathy from "./components/PMSAndMastopathy/PMSAndMastopathy.jsx";
import AboutMastopathy from "./components/AboutMastopathy/AboutMastopathy.jsx";
import UltrasoundDiagnostics from "./components/UltrasoundDiagnostics/UltrasoundDiagnostics.jsx";
import SurveyForConsultation from "./components/SurveyForConsultation/SurveyForConsultation.jsx";
import { useState } from "react";
import ModalWindow from "./components/ModalWindow/ModalWindow.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            {isModalOpen && <ModalWindow closeModal={closeModal} />}
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <Footer />

            {/* Floating Action Button with larger permanent shadow animation */}
            <motion.button
                onClick={openModalHandler}
                initial={{ boxShadow: "0 0 15px rgba(255, 0, 0, 0.4)" }}
                animate={{
                    boxShadow: [
                        "0 0 15px rgba(255, 0, 0, 0.4)",
                        "0 0 35px rgba(255, 0, 0, 0.8)",
                        "0 0 15px rgba(255, 0, 0, 0.4)"
                    ]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="fixed bottom-10 right-10 z-50 cursor-pointer bg-white text-red-500 p-4 rounded-full
                focus:outline-none focus:ring-2 hover:bg-red-500 hover:text-white"
                title="Show Pharmacies"
            >
                <FaShoppingCart size={28} />
            </motion.button>
        </div>
    );
};

const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home />
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound />
                },
                {
                    path: ROUTES.PMS_MASTOPATHY,
                    element: <PMSAndMastopathy />
                },
                {
                    path: ROUTES.ABOUT_MASTOPATHY,
                    element: <AboutMastopathy />
                },
                {
                    path: ROUTES.ULTRASOUND_DIAGNOSTICS,
                    element: <UltrasoundDiagnostics />
                },
                {
                    path: ROUTES.SURVEY_FOR_CONSULTATION,
                    element: <SurveyForConsultation />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default App;
