import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div>Logo</div>
            <div>
                <Link href='/public'>Home</Link>
                <Link href='/public'>Popular Movies</Link>
                <Link href='/public'>upcoming movies</Link>
                <Link href='/public'>favourite</Link>
            </div>
        </div>
    )
}
export default Navbar
