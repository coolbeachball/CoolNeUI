function Header() {
    return (
        <header className="container-header bg-blue flex-between flex-center justify-between p-xs">
            <span className="text-light bold text-md">CoolNeUI</span>
            <nav className="inline w-12 justify-between">
                <a href="" className="link">Docs</a>
                <a href="" className="link">About</a>
                <a href="" className="link">Contact</a>
            </nav>
        </header>
    )
}

export default Header