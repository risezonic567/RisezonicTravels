import { useEffect } from "react";

import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";

export default function SocialSuccess() {

  const [params] =
    useSearchParams();

  const navigate =
    useNavigate();

  useEffect(() => {

    const token =
      params.get("token");

    if (token) {

      localStorage.setItem(
        "token",
        token
      );

      navigate("/");
    }

  }, []);

  return <div>Logging in...</div>;
}