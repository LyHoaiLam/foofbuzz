
// Ensure this is a client component
"use client";
import MenuHeader from "@/Components/MenuHeader/MenuHeader";
import { Search2Icon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import Link from "next/link";


export default function Header() {
  return (
    <div className="bg-green-600 flex justify-around h-10 items-center">
      <div>
        <ul className="flex justify-around text-2xl">
          <li className="mx-4">
            <MenuHeader />
          </li>
          <li className="mx-4 bg-gradient-to-r from-red-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
            GrabBuzz
          </li>
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
          <li>
            <Link href="/login/login">
              <Button className="bg-yellow-50 border-2 rounded-md border-solid divide-neutral-950 text-lg w-20">
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


