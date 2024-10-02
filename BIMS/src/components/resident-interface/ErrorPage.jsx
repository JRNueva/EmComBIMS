import { useNavigate } from 'react-router-dom';
import ScrollToTop from './basic-components/ScrollToTop.jsx';
import NavBar from './navbar-components/Navbar';
import Footer from './footer-components/Footer.jsx';
import ButtonDefault from './basic-components/ButtonDefault.jsx';

function ErrorPageResident() {
    const navigate = useNavigate();

    return <>
        <ScrollToTop/>

        <NavBar active='' />
        
        <main className="bg-lightGray text-start font-inter flex
            px-8 md:px-12 lg:px-24 items-center justify-center"
        >
            <div className="container w-fit min-h-screen 
                px-6 py-40 mx-auto lg:flex gap-5 lg:items-center"
            >
                <div className="flex flex-col w-full lg:w-1/2 gap-1 py-10">
                    <p className="uppercase text-5xl font-semibold text-balance text-darkestBlue">
                        404 error
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-lowBlue">
                        Page not found
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Sorry, the page you are looking for doesn't exist.Here are some helpful links:
                    </p>

                    <div className="flex flex-row w-full mt-6 gap-10">
                        <ButtonDefault
                        type="home"
                        className="flex items-center justify-evenly w-48 pt-2.5 shadow-none
                            text-lowBlue bg-snow border border-lowBlue text-sm" 
                        onClick={() => window.history.back()} 
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span> Go Back</span>
                        </ButtonDefault>

                        <ButtonDefault
                            type="home"
                            className="w-48 pt-2.5 bg-lowBlue text-sm" 
                            onClick={() => navigate('/')}  
                        >
                            Take Me Home
                        </ButtonDefault>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full mx-auto" 
                        src="https://merakiui.com/images/components/illustration.svg" 
                        alt="" 
                />
                </div>
            </div>
        </main>

        <Footer />
    </>
}

export default ErrorPageResident;