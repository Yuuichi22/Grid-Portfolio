
export const Nav = () => {
    const Links  = [
        {
            name : "2022pcecsdivyansh046@poornima.org",
            icon : "",
            url : "2022pcecsdivyansh046@poornima.org"
        },
        {
            name : "Leetcode",
            icon : "https://img.icons8.com/?size=160&id=9L16NypUzu38&format=png",
            url : "https://leetcode.com/u/aizen22"
        },
        {
            name : "Github",
            icon : "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
            url : "https://github.com/Yuuichi22"
        },
        
    ]
    return (
        <nav className="flex md:flex-row flex-col gap-5 my-5  p-2 justify-around text-[16px] items-center">
            {Links.map((link) => <><a href={link.url}>
                <div className="flex items-center gap-1">
                    {link.icon && <img src={link.icon} className="h-5 rounded-md"/>}
                    <span>{link.name}</span>
                </div>
            </a></> )}
        </nav>
    )
}