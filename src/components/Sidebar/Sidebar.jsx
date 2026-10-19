import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";

export default function Sidebar() {
  return (
    <>
      <div className="d-none d-md-block">
        <DesktopNav />
      </div>
      <div className="d-md-none">
        <MobileNav />
      </div>
    </>
  );
}
