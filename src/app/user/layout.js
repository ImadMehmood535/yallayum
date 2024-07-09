export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className="h-[700px] w-[400px] bg-themeGray-0 rounded-lg"></div>
      {children}
    </section>
  );
}
