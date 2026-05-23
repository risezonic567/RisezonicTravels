import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import axios from "axios";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const API_BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:7000"
    : "https://www.risezonictravel.com"; // Live hone par ye kaam aayega

export default function LoginPage() {
  const navigate = useNavigate();

  const loginSlides = [
    {
      id: 1,
      title: "Sky-High Deals",
      highlight: "Wait for You.",
      desc: "Log in to unlock exclusive member-only fares and book your next escape in seconds.",
    },
    {
      id: 2,
      title: "Your Global",
      highlight: "Gateway.",
      desc: "From New York to New Delhi, manage all your flight bookings and boarding passes in one place.",
    },
    {
      id: 3,
      title: "Fly Smarter,",
      highlight: "Not Harder.",
      desc: "Save your preferences and payment methods for the fastest checkout experience online.",
    },
  ];

  // =========================
  // LOGIN STATE
  // =========================

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================
  // AUTH MODE
  // =========================

  const [authMode, setAuthMode] = useState("login");

  const [otpVerified, setOtpVerified] = useState(false);

  const [timer, setTimer] = useState(30);

  const [otpExpire, setOtpExpire] = useState(60);

  const [canResend, setCanResend] = useState(false);

  const [resetData, setResetData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  // =========================
  // TIMER
  // =========================

  useEffect(() => {
    let interval;

    if (authMode === "reset" && !otpVerified) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }

          return prev - 1;
        });

        setOtpExpire((prev) => {
          if (prev <= 1) {
            clearInterval(interval);

            alert("OTP Expired");

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [authMode, otpVerified]);

  // =========================
  // HANDLE LOGIN INPUT
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // LOGIN
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        // "http://localhost:7000/api/auth/login",
        `${API_BASE}/api/auth/login`,
        formData,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SEND OTP
  // =========================

  const sendOTP = async () => {
    if (!resetData.email) {
      return alert("Please enter email");
    }

    try {
      const res = await axios.post(
        // "http://localhost:7000/api/auth/forgot-password",
        `${API_BASE}/api/auth/forgot-password`,
        {
          email: resetData.email,
        },
      );

      console.log(res.data);

      alert("OTP Sent Successfully");

      setAuthMode("reset");

      setTimer(30);

      setOtpExpire(60);

      setCanResend(false);

      setOtpVerified(false);
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert(error.response?.data?.message || "Failed To Send OTP");
    }
  };

  // =========================
  // RESEND OTP
  // =========================

  const resendOTP = async () => {
    try {
      const res = await axios.post(
        // "http://localhost:7000/api/auth/forgot-password",
        `${API_BASE}/api/auth/forgot-password`,
        {
          email: resetData.email,
        },
      );

      console.log(res.data);

      alert("OTP Resent Successfully");

      setTimer(30);

      setOtpExpire(60);

      setCanResend(false);

      setOtpVerified(false);
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert(error.response?.data?.message || "Failed To Resend OTP");
    }
  };

  // =========================
  // VERIFY OTP
  // =========================

  const verifyOTP = async () => {
    if (!resetData.otp) {
      return alert("Please enter OTP");
    }

    try {
      // IMPORTANT
      // create NEW backend route:
      // POST /api/auth/verify-reset-otp

      const res = await axios.post(
        // "http://localhost:7000/api/auth/verify-reset-otp",
        `${API_BASE}/api/auth/verify-reset-otp`,
        {
          email: resetData.email,
          otp: resetData.otp,
        },
      );

      console.log(res.data);

      alert("OTP Verified Successfully");

      setOtpVerified(true);
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert(error.response?.data?.message || "OTP Verification Failed");
    }
  };

  // =========================
  // RESET PASSWORD
  // =========================

  const resetPassword = async () => {
    if (!resetData.password || !resetData.confirmPassword) {
      return alert("Please fill all fields");
    }

    if (resetData.password !== resetData.confirmPassword) {
      return alert("Passwords do not match");
    }

    if (resetData.password.length < 8) {
      return alert("Password must be at least 8 characters");
    }

    try {
      const res = await axios.post(
        // "http://localhost:7000/api/auth/reset-password",
        `${API_BASE}/api/auth/reset-password`,
        {
          email: resetData.email,
          newPassword: resetData.password,
        },
      );

      console.log(res.data);

      alert("Password Reset Successful");

      setAuthMode("login");

      setOtpVerified(false);

      setResetData({
        email: "",
        otp: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert(error.response?.data?.message || "Password Reset Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex overflow-hidden border border-blue-100">
        {/* LEFT SIDE */}

        <div className="hidden md:flex w-1/2 bg-[#003580]/85 text-white items-center justify-center relative overflow-hidden">
          <div className="absolute top-[-5%] left-[-5%] w-64 h-64 bg-sky-400 rounded-full blur-[110px] opacity-30"></div>

          <div className="absolute bottom-[-5%] right-[-5%] w-72 h-72 bg-orange-400 rounded-full blur-[120px] opacity-20"></div>

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
            className="w-full h-full login-swiper"
          >
            {loginSlides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                  <svg
                    className="w-10 h-10 text-sky-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>

                <h1 className="text-4xl font-black mb-4 leading-tight tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-sky-400 block mt-2">
                    {slide.highlight}
                  </span>
                </h1>

                <div className="w-16 h-1.5 bg-orange-400 mx-auto mb-8 rounded-full"></div>

                <p className="text-blue-100 text-lg font-medium leading-relaxed max-w-[320px] mx-auto opacity-90">
                  {slide.desc}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            {authMode === "login"
              ? "Login"
              : authMode === "forgot"
                ? "Forgot Password"
                : "Reset Password"}
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

          <a
            href={`${API_BASE}/api/auth/facebook`}
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

          <div className="text-center mb-4 text-gray-500">OR</div>

          {/* LOGIN */}

          {authMode === "login" && (
            <>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-300 transition font-bold uppercase tracking-wide"
              >
                {loading ? "Logging In..." : "Login"}
              </button>

              <p
                onClick={() => setAuthMode("forgot")}
                className="text-sm text-blue-600 mt-3 cursor-pointer hover:underline text-center"
              >
                Forgot Password?
              </p>
            </>
          )}

          {/* FORGOT */}

          {authMode === "forgot" && (
            <>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={resetData.email}
                onChange={(e) =>
                  setResetData({
                    ...resetData,
                    email: e.target.value,
                  })
                }
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <button
                type="button"
                onClick={sendOTP}
                className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-300 transition font-bold uppercase tracking-wide"
              >
                Send OTP
              </button>
            </>
          )}

          {/* RESET */}

          {authMode === "reset" && (
            <>
              {!otpVerified && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={resetData.otp}
                    onChange={(e) =>
                      setResetData({
                        ...resetData,
                        otp: e.target.value,
                      })
                    }
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />

                  <button
                    type="button"
                    onClick={verifyOTP}
                    className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-300 transition font-bold uppercase tracking-wide"
                  >
                    Verify OTP
                  </button>

                  <p className="text-center mt-3 text-sm text-gray-500">
                    OTP Expires In {otpExpire}s
                  </p>

                  {canResend && (
                    <p
                      onClick={resendOTP}
                      className="text-center mt-2 text-blue-600 cursor-pointer hover:underline"
                    >
                      Resend OTP
                    </p>
                  )}

                  {!canResend && (
                    <p className="text-center mt-2 text-gray-400">
                      Resend OTP In {timer}s
                    </p>
                  )}
                </>
              )}

              {/* PASSWORD */}

              {otpVerified && (
                <>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={resetData.password}
                    onChange={(e) =>
                      setResetData({
                        ...resetData,
                        password: e.target.value,
                      })
                    }
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={resetData.confirmPassword}
                    onChange={(e) =>
                      setResetData({
                        ...resetData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />

                  <button
                    type="button"
                    onClick={resetPassword}
                    className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-300 transition font-bold uppercase tracking-wide"
                  >
                    Reset Password
                  </button>
                </>
              )}
            </>
          )}

          {/* BACK */}

          {authMode !== "login" && (
            <p
              onClick={() => {
                setAuthMode("login");
                setOtpVerified(false);
              }}
              className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline text-center"
            >
              Back To Sign In
            </p>
          )}

          {/* SIGNUP */}

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-blue-600 cursor-pointer hover:underline font-bold"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
