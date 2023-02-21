import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import {GoOrganization} from "react-icons/go";
import {BsFillCalendar2XFill,BsCalendarCheckFill} from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
//import { vms } from "../Sidebar/assetsnew";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
// import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { SOMETHING_WENT_WRONG} from '../Sidebar/utils/const'

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome size="1.5em"/>,
  },
  {
    path: "/organisation",
    name: "Organisation",
    icon: <GoOrganization size="1.5em"/>,
    subRoutes: [
      {
        path: "/organisation/employee/Employee",
        name: "Employee ",
        icon: <FaUser />,
      },
      {
        path: "/organisation/Location",
        name: "Location",
        icon: <FaLock />,
      },
      {
        path: "/organisation/department/Department",
        name: "Department",
        icon: <FaMoneyBill />,
      },
      {
        path: "/organisation/Designation",
        name: "Designation",
        icon: <FaMoneyBill />,
      },
      {
        path: "/organisation/BirthdayFolks",
        name: "Birthday Folks",
        icon: <FaMoneyBill />,
      },
      {
        path: "/organisation/NewHires",
        name: "New Hires",
        icon: <FaMoneyBill />,
      },
      {
        path: "/organisation/Organizationsetting",
        name: "Settings",
        icon: <BiCog />,
      }
    ],
  },
  {
    path: "/attendence",
    name: "Attendence",
    icon: <BsCalendarCheckFill size="1.5em"/>,
    subRoutes: [
      {
        path: "/attendence/ListofAttendence",
        name: "List of Attendence ",
        icon: <FaUser />,
      },
      {
        path: "/attendence/Regularization",
        name: "Regularization",
        icon: <FaLock />,
      },
      {
        path: "/attendence/Report",
        name: "Report",
        icon: <FaMoneyBill />,
      },
      {
        path: "/attendence/Attendencesetting",
        name: "Setting",
        icon: <BiCog />,
      },
    ],
  },
  {
    path: "/leave",
    name: "Leave",
    icon: <BsFillCalendar2XFill size="1.5em"/>,
    subRoutes: [
      {
        path: "/leaves/Listview",
        name: "List View",
        icon: <FaUser />,
      },
      {
        path: "/leaves/Leaveapplication",
        name: "Leave Application",
        icon: <FaLock />,
      },
      {
        path: "/leaves/Leavesetting",
        name: "Setting",
        icon: <BiCog />,
      },
    ],
  },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog size="1.5em"/>,
    exact: true,
  }
  
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iisOpen, ssetIsOpen] = useState(true);
  // const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    ssetIsOpen(!iisOpen);
    // setIsActive(current => !current);
    // console.log("hi--", isActive)
  }


  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <div className="side">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                
                <motion.img src={require('../Sidebar/assetsnew/vms.png')}
                variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  // width="50px" height="40px"
                alt="" />
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
         
          <section className="routes">
            { routes.map((route, index) => {
             if (route.subRoutes) {
              return (
               // isOpen && (
                <SidebarMenu
                    setIsOpen={setIsOpen}
                    // ssetIsOpen={ssetIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    iisOpen={iisOpen}
                  />
                  //)
                );
              }

              return (
                <NavLink
                // style={{backgroundColor:"red"}}
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text1"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        </div>
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default SideBar;
