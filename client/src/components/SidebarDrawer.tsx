import { CgClose } from "react-icons/cg";

type Props = {
  children: React.ReactNode;
  openAnimation?: boolean;
  closeAnimation?: boolean;
  sidebarName: string;
  setSidebarOpen: (open: boolean) => void;
  sidebarWidth?: string;
  sidebarSide: 'left-0' | 'right-0';
  sidebarBackgroundColor?: string;
}

export default function SidebarDrawer({ children, openAnimation, closeAnimation, sidebarName, setSidebarOpen, sidebarWidth, sidebarSide, sidebarBackgroundColor }: Props) {
  return (
    <div className={`${openAnimation ? 'sidebar-drawer' : ''} ${closeAnimation ? 'animate-slide-exit' : ''} fixed top-0 ${sidebarSide} ${sidebarWidth} h-full ${sidebarBackgroundColor} text-black shadow-lg z-50 p-5 overflow-y-auto`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{sidebarName}</h2>
        <CgClose className="text-gray-500 cursor-pointer hover:text-black transition-colors duration-300" size={24} onClick={() => setSidebarOpen(false)} />
      </div>
      {children}
    </div>
  )
}