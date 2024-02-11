import { useContext, useState } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import LoginModal from "../Admin/LoginModal";
import { useAuth } from "../Auth/AuthProvider";
import { HeaderStyleContext } from "./HeaderMain";

type Operation = "create-account" | "login";

const AdminDropdown = () => {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [operation, setOperation] = useState<Operation>("" as Operation);
  const headerStyleProps = useContext(HeaderStyleContext);

  const { setLoggedInAdmin } = useAuth();

  const bg = useColorModeValue("valaBlue.50", "valaBlue.800");
  const menuItemProps = {
    h: 10,
    bg: bg,
    fontSize: 16,
    _hover: { bg: useColorModeValue("valaBlue.100", "valaBlue.900") },
  };

  return (
    <>
      <Menu>
        <MenuButton
          {...headerStyleProps}
          color={"white"}
          as={IconButton}
          icon={<FaChevronDown />}
          _active={{ bg: headerStyleProps._hover.bg }}
        />

        <MenuList
          bg={headerStyleProps.bg}
          border={"none"}
          boxShadow={"0px 5px 10px black"}
        >
          <MenuItem
            {...menuItemProps}
            {...headerStyleProps}
            icon={<FaPlus fontSize={"22px"} />}
            onClick={() => {
              setOperation("create-account");
              setModalVisibility(true);
            }}
          >
            Create an Account
          </MenuItem>
          <MenuItem
            {...menuItemProps}
            {...headerStyleProps}
            icon={<LuLogIn fontSize={"22px"} />}
            onClick={() => {
              setOperation("login");
              setModalVisibility(true);
            }}
          >
            Login
          </MenuItem>
        </MenuList>
      </Menu>

      <LoginModal
        modalIsVisible={modalIsVisible}
        setModalVisibility={() => setModalVisibility(false)}
        operation={operation}
        onLogin={(adminInfo) => setLoggedInAdmin(adminInfo)}
      />
    </>
  );
};

export default AdminDropdown;
