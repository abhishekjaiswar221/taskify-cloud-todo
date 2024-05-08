import { Link } from "react-router-dom";
import { Home, CheckCheck, Check } from "lucide-react";

const HeaderNavigation = () => {
  return (
    <header className="bg-gray-100 border-b-2 border-gray-200">
      <nav className="max-w-7xl">
        <div className="px-20">
          <ul className="flex items-center justify-between w-full h-14">
            <div className="flex items-center justify-center gap-2">
              <div className="p-1 bg-[#1e212f] text-white rounded-full">
                <Check strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Taskify Todo</h1>
              </div>
            </div>
            <div className="flex items-center justify-start gap-10">
              <li className="flex items-center justify-center gap-2">
                <div>
                  <Home size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <Link className="text-gray-600" to="/">
                    Home
                  </Link>
                </div>
              </li>
              <li className="flex items-center justify-center gap-2">
                <div>
                  <CheckCheck size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <Link className="text-gray-600" to="/about">
                    About
                  </Link>
                </div>
              </li>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div>
                <Link
                  to="sign-in"
                  className="px-3 py-2 text-white bg-green-600 border border-green-600 rounded-md"
                >
                  SignIn
                </Link>
              </div>
              <div>
                <Link
                  to="sign-up"
                  className="px-3 py-2 text-white bg-red-600 rounded-md"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default HeaderNavigation;
