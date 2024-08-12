"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function MenuHeader() {
    return (
        <div>
            <Menu>
                {({ isOpen }) => (
                    <>
                    <MenuButton isActive={isOpen} as={Button}>
                        {isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
                    </MenuButton>
                    <MenuList className="bg-zinc-100 w-96 rounded-md pl-5 py-2.5">
                        <MenuItem className="bg-zinc-100 hover:bg-green-300">Về GrabBuzz</MenuItem>
                        <MenuItem className="bg-zinc-100 hover:bg-green-300" onClick={() => alert('Người dùng')}>Người dùng</MenuItem>
                        <MenuItem className="bg-zinc-100 hover:bg-green-300" onClick={() => alert('Đối tác')}>Đối tác</MenuItem>
                    </MenuList>
                    </>
                )}
            </Menu>
        </div>
    )
}

