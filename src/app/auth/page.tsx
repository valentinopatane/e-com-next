import { redirect } from "next/navigation";
const AuthRedirectPage = () => {
  redirect("/auth/login");
};

export default AuthRedirectPage;
