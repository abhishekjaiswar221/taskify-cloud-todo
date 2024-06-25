import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

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
            {/* <div className="flex items-center justify-start gap-10">
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
            </div> */}
            <div className="flex items-center justify-center gap-3">
              <div>
                <Button
                  variant="outline"
                  className="border-[1.5px] text-[#3b5d22] hover:text-[#3b5d22]  border-[#3b5d22]"
                  asChild
                >
                  <Link to="sign-in">Sign In</Link>
                </Button>
              </div>
              <div>
                <Button asChild>
                  <Link to="sign-up">Sign Up</Link>
                </Button>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default HeaderNavigation;
