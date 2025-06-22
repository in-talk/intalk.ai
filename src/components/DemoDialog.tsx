import { Dialog, DialogPanel, DialogTitle, CloseButton } from "@headlessui/react";
import { Cross1Icon } from "@radix-ui/react-icons";
import ScheduleDemoForm from "./ScheduleDemoForm";

type DemoDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DemoDialog: React.FC<DemoDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4  data-[closed]:opacity-0"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            data-aos="fade-down"
            data-aos-duration="500"
            className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex items-center justify-between">
              <DialogTitle
                as="h3"
                className="text-gray-200 font-nacelle text-3xl font-semibold leading-10 mb-[16px]"
              >
                Send Us A Message
              </DialogTitle>
              <CloseButton onClick={onClose} className="p-2 rounded-sm hover:bg-indigo-500 bg-indigo-700 shadow-sm transition-all duration-800">
                <Cross1Icon strokeWidth={2} />
              </CloseButton>
            </div>
            <ScheduleDemoForm />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DemoDialog;
