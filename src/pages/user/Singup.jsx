import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import axios from "axios";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Pata lagao ki website localhost par chal rahi hai ya live domain par
const API_BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:7000"
    : "https://www.risezonictravel.com"; // Live hone par ye kaam aayega

// axios.defaults.withCredentials = true;

export default function Signup() {
  const signupSlides = [
    {
      title: "Discover Your",
      highlight: "Next Destination.",
      desc: "Join our community of 10k+ travelers and get access to exclusive flight deals worldwide.",
    },
    {
      title: "Book Faster,",
      highlight: "Fly Better.",
      desc: "Create an account to save your preferences and enjoy a seamless 1-click booking experience.",
    },
    {
      title: "Earn Rewards",
      highlight: "On Every Trip.",
      desc: "Sign up today and start collecting miles that you can redeem for your future adventures.",
    },
  ];

  const [showOTPBox, setShowOTPBox] = useState(false);

  const [otp, setOtp] = useState("");

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // REGISTER USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await axios.post(
        // "http://localhost:7000/api/auth/register",
        `${API_BASE}/api/auth/register`,
        formData,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      alert("OTP Sent to email");

      setShowOTPBox(true);
    } catch (error) {
      console.log(error.response?.data);

      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // VERIFY OTP
  const handleOTPVerify = async () => {
    try {
      const res = await axios.post(
        // "http://localhost:7000/api/auth/verify-otp",
        `${API_BASE}/api/auth/verify-otp`,
        {
          email: formData.email,
          otp,
        },
      );

      console.log(res.data);

      alert("OTP Verified Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);

      alert(error.response?.data?.message || "OTP Verification Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-15 mt-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex overflow-hidden min-h-[600px] border border-blue-100">
        {/* LEFT - AVIATION THEME AUTO-SLIDER */}
        <div className="hidden md:flex w-1/2 bg-[#003580]/85 text-white items-center justify-center relative overflow-hidden">
          {/* Background Decorative Circles */}
          <div className="absolute top-[-5%] left-[-5%] w-64 h-64 bg-sky-400 rounded-full blur-[110px] opacity-30"></div>

          <div className="absolute bottom-[-5%] right-[-5%] w-72 h-72 bg-orange-400 rounded-full blur-[120px] opacity-20"></div>

          {/* Flight Path */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-10 150 Q 200 80 400 200 T 900 150"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="12,12"
            />
          </svg>

          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full signup-swiper"
          >
            {signupSlides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center p-12 text-center"
              >
                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                  <svg
                    className="w-10 h-10 text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h1 className="text-4xl font-black mb-4 leading-tight tracking-tight">
                  {slide.title}

                  <br />

                  <span className="text-sky-400 block mt-2">
                    {slide.highlight}
                  </span>
                </h1>

                <div className="w-16 h-1.5 bg-orange-400 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(251,146,60,0.5)]"></div>

                <p className="text-blue-100 text-lg font-medium leading-relaxed max-w-[320px] mx-auto opacity-90">
                  {slide.desc}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Pagination */}
          <style jsx global>{`
            .signup-swiper .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.3) !important;
              opacity: 1;
              width: 10px;
              height: 10px;
            }

            .signup-swiper .swiper-pagination-bullet-active {
              background: #38bdf8 !important;
              width: 30px;
              border-radius: 6px;
              transition: all 0.4s ease;
            }

            .signup-swiper .swiper-pagination {
              bottom: 50px !important;
            }
          `}</style>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          {/* SIGNUP FORM */}
          {!showOTPBox && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Create Account
              </h2>

              {/* SOCIAL BUTTONS */}
              <button
                type="button"
                onClick={() => {
                  // window.location.href = "http://localhost:7000/api/auth/google";
                  window.location.href = `${API_BASE}/api/auth/google`;
                }}
                className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-3"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  className="w-5 h-5"
                />
                Login with Google
              </button>

              {/* <a
            href="http://localhost:7000/api/auth/facebook"
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-4 font-medium text-gray-700 hover:bg-gray-50 transition duration-200 text-center"
            style={{ textDecoration: "none" }}
          > */}
              <a
                href={`${API_BASE}/api/auth/facebook`} // <--- Double quotes ki jagah `{}` aur backticks
                className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-4 font-medium text-gray-700 hover:bg-gray-50 transition duration-200 text-center"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  className="w-5 h-5"
                  alt="FB"
                />
                Login with Facebook
              </a>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] bg-gray-200 flex-1"></div>

                <div className="text-gray-400 text-xs font-bold uppercase">
                  OR
                </div>

                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>

              {/* INPUTS */}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200"
              />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200"
              />

              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200"
              />

              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all font-bold"
              >
                Create Account
              </button>

              <p className="text-center text-sm mt-6 text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          )}

          {/* OTP BOX */}
          {showOTPBox && (
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Verify OTP
              </h2>

              <p className="text-center text-gray-500 mb-6">
                Enter OTP sent to
                <span className="font-semibold text-blue-600">
                  {" "}
                  {formData.email}
                </span>
              </p>

              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-200"
              />

              <button
                onClick={handleOTPVerify}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-bold"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
