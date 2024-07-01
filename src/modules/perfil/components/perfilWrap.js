import Menu from "../../home/components/Menu"
import PerfilForm from "./perfilForm"

function PerfilWrap() {
    return(
        <>
        <div className="fixed">
          <Menu />
        </div>
        <div className="h-screen ml-24 h-full w-full ">
            <PerfilForm />
        </div>
      </>
      );
}

export default PerfilWrap;