"use client"
import { Button } from "./ui/button";
import {DropdownMenu , DropdownMenuContent, DropdownMenuTrigger} from "./ui/dropdown-menu"

const UserAccountNav = () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild className="overflow-visible">
            <Button variant="ghost" size="sm" className="relative">My account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white w-60" align="end">
            <div className="flex item-center justify-start gap-2 p-2"></div>
        </DropdownMenuContent>
    </DropdownMenu>
}

export default UserAccountNav;