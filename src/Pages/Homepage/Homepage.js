import Footer from "../../Components/Footer/Footer";

import Maincontent from "../../Components/Maincontent/Maincontent";
import Slideshow from "../../Components/Sideshow/Slideshow";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Slideshow />
      <Maincontent />
      <Footer />
    </motion.div>
  );
}

export default Homepage;