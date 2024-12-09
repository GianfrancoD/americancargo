import { motion } from "framer-motion";
import logosinfondo from "../assets/logosinfondo.png";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-500 to-gray-300 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src={logosinfondo}
            alt="Suramérica Cargo Logo"
            width={300}
            height={300}
            className="mx-auto bg-white rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-white rounded-full"
                animate={{
                  y: ["0%", "-60%", "0%"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
