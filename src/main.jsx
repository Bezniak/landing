import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ParallaxProvider } from "react-scroll-parallax";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </HelmetProvider>
    </StrictMode>,
);
