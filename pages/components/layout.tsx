import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="xs:px-6 md:pl-[18rem] py-12 flex flex-col flex-1 h-screen bg-black text-white">
        <main className="pb-10">{children}</main>
      </div>
    </>
  );
}
