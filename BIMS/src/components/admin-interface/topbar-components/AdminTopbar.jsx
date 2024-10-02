import CustomBreadcrumbs from "./CustomBreadcrumbs";

function AdminTopbar({ title = "Default Title", breadcrumbs = [] }) {
  return (
    <header className="header w-full h-20 flex items-center justify-between py-2 px-28 fixed bg-white">
      <div className="flex flex-col text-left gap-1">
        <h3 className="font-bold text-2xl mt-2 lg:mt-3 font-inter">
          {title}
        </h3>
        <h4 className="font-light text-base text-black font-inter">
          <CustomBreadcrumbs breadcrumbs={breadcrumbs.slice(0,3)} />
        </h4>
      </div>
    </header>
  );
}

export default AdminTopbar;
