// Root Layout Interface
import React from "react";

export interface RootLayoutProps {
    children: React.ReactNode;
}

// MenuLists Interface
export interface MenuListItem {
    id: string;
    pathTitle: string;
    menuTitle: string;
}
