import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#F0F0F5] dark:bg-[#020409] flex flex-col items-center justify-center gap-4 px-5"
        >
          <motion.div
            layoutId="site-logo"
            initial={{ opacity: 0, scale: 0.92, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative p-0"
          >
            <img
              src="/ligthLogo.png"
              alt="ProtoTech logo light theme"
              className="w-48 h-48 object-contain dark:hidden"
            />
            <img
              src="/DarkLogo.png"
              alt="ProtoTech logo dark theme"
              className="hidden w-48 h-48 object-contain dark:block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="w-56 sm:w-72 overflow-hidden rounded-full bg-background shadow-inner shadow-slate-900/10 dark:bg-slate-900"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "80%", "100%"] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-2 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
