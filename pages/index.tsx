import LoginTopBar from "../components/loginTopBar";
import Nav from "../components/nav";
import UserComponent from "../components/politico";

const Layout: React.FC = () => (
  <div className="bg-slate-100 flex">
    <Nav />
    <div className="flex flex-col flex-grow">
      <LoginTopBar />

      <UserComponent />
    </div>

  </div>
)

export default Layout;
