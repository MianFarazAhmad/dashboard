"use client";
import { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import SubMenuItem from "./sub-item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }
    return router.push(path);
  };

  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }
    return path === pathname;
  }, [items, path, pathname]);

  return (
    <>
      <div
  className={`relative flex items-center p-3 mt-4  pl-4 rounded-lg cursor-pointer
    ${isActive ? "text-sidebar-active" : "text-sidebar-default"}
    hover:text-sidebar-active hover:bg-sidebar-active/10
  `}
  onClick={onClick}
>
  {/* ✅ Left vertical bar when active */}
  {isActive && (
    <div className="absolute left-0 top-0 h-full w-[6px] bg-[#00D3FF] rounded-tr-full rounded-br-full" />
  )}

  <div className="flex items-center ml-4  space-x-2">
    <Icon size={20} />
    <p className="text-15 font-6">{name}</p>
  </div>

  {items&&length > 0 && (
    <ChevronDown
      size={18}
      className={`ml-auto transition-transform duration-200 ${
        expanded ? "rotate-180" : ""
      }`}
    />
  )}
</div>


      {expanded && items && items.length > 0 && (
        <div className="flex   flex-col space-y-1 ml-10">
          {items.map((item) => (
            <SubMenuItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
