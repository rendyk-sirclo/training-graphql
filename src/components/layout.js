import Navbar from "@/components/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="utama">{children}</main>

      <style global jsx>{`
        .utama {
          min-height: calc(100vh - 80px);
        }
      `}</style>
    </>
  );
};

export default Layout;
