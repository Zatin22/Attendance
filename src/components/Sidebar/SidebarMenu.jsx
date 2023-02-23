import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, iisOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" activeClassName="active">
        
        <div className="menu_item">

          <div className="icon">{route.icon}</div>
          {/* <AnimatePresence> */}
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
          {/* </AnimatePresence> */}
        </div>
        {isOpen && (
          <motion.div className="arrow" onClick={toggleMenu}
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}

            {iisOpen && (<div className="check">
                 <div>
                     {route.subRoutes.map((subRoute, i) => (
                   <div variants={menuItemAnimation} key={i} custom={i}>
                     <NavLink to={subRoute.path} className="link">
                       {/* <div className="icon1">{subRoute.icon}</div> */}
                      <div className="link_text">{subRoute.name}</div>
                    </NavLink>
                   </div>
                       ))}
                 </div>
             </div> )}

      </div>


      {/* <AnimatePresence> */}
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <motion.div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  {/* <div className="icon">{subRoute.icon}</div> */}
                  <motion.div className="link_text1">{subRoute.name}</motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      {/* </AnimatePresence> */}
    </>
  );
};

export default SidebarMenu;
