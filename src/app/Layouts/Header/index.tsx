
// Ensure this is a client component
"use client";

import MenuHeader from "@/Components/MenuHeader/MenuHeader";
import { Search2Icon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <div className="bg-green-600 flex justify-around h-10 items-center">
      <div>
        <ul className="flex justify-around text-2xl">
          <li className="mx-4">
            <MenuHeader />
          </li>
          <li className="mx-4">GrabBuzz</li>
        </ul>
      </div>

      <div>
        <ul className="flex text-2xl">
          <li className="mx-4">Trở thành đối tác của chúng tôi</li>
          <li className="mx-4">Trung tâm hỗ trợ</li>
          <li className="mx-4">Tiếng Việt</li>
          <li className="mx-4">
            <Search2Icon className="" />
          </li>
        </ul>
      </div>
    </div>
  );
}


