import { useState } from "react";
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

type Operation = "create-account" | "login";

const AdminDropdown = () => {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [operation, setOperation] = useState<Operation>("" as Operation);

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
        <MenuButton as={IconButton} icon={<FaChevronDown />} bg={bg} />

        <MenuList bg={bg}>
          <MenuItem
            {...menuItemProps}
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
