import CustomNavBar, { NavBar } from "./CustomNavBar";
export default function Base({ children }) {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavBar />
      {children}
    </div>
  );
}
