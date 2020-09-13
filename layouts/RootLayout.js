import Link from "next/link";

export function RootLayout({children}) {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/employee"><a>Show All List</a></Link>
            </nav>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}