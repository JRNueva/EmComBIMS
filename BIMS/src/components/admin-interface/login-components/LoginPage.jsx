import LoginForm from './LoginForm'
import CityHall from "../../../assets/admin-interface/images/CityHall.png"
import Logo from "./Logo"

function LoginPage() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-3/4 h-full relative">
          {/* CityHall Image */}
          <img 
            src={CityHall} 
            className="w-full h-full block"
            alt="City Hall"
          />

          {/* Blue Overlay */}
          <div className='absolute inset-0 bg-[#1D2D44] opacity-75 mix-blend-multiply'></div>

          {/* Logo positioned on top left */}
          <div className="absolute top-12 left-10">
            <Logo />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-1/2 bg-[#ffffff] flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
