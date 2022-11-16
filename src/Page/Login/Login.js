import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import "./login.scss";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__container__left">
                    <div className="login__container__left__item">
                        <h1>Sing In | Admin Panel</h1>
                        <div className="login__input">
                            <div className="login__input__item">
                                <input type="text" placeholder="email" />
                                <p className="text-red-400" data-aos="fade-left">
                                    Wrong Email or Password
                                </p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                />
                                <div className="password">
                                    {showPassword ? (
                                        <VisibilityOutlinedIcon
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    ) : (
                                        <VisibilityOffOutlinedIcon
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="login__button">
                                <button>
                                    <span>Log In </span>
                                    <svg
                                        viewBox="0 0 46 16"
                                        height="10"
                                        width="30"
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="arrow-horizontal"
                                    >
                                        <path
                                            transform="translate(30)"
                                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                            data-name="Path 10"
                                            id="Path_10"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login__container__right"></div>
            </div>
        </div>
    );
}

export default Login