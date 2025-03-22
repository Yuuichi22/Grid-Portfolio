import { CardWrapper } from "./CardWrapper"

export const Technologies = () => {
    const technologies = [
        "https://imgs.search.brave.com/mOCx1bfRkfRFUb4ME2vOJDWNJZ6K0lkAuRM8eXTi4NQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn",
        "https://imgs.search.brave.com/LvXdO64u1VSP6J9Ef_l5BqiRFpKbWCkTRB40zO2gMRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS85/NTA4NTFkNWI1MmE1/MDg0OTQ1OGJiYjg1/ZTIxM2YzNzk2ZWVm/YTkwMGU3Yzk2N2Q5/NmE1OGNlMDY3Zjky/NGJlLzY4NzQ3NDcw/NzMzYTJmMmY3MjYx/Nzc2NzY5NzQyZTYz/NmY2ZDJmNzM2MTcz/NzMyZjczNjE3Mzcz/MmQ3MzY5NzQ2NTJm/NmQ2MTY5NmUyZjcz/NmY3NTcyNjM2NTJm/NjE3MzczNjU3NDcz/MmY2OTZkNjcyZjZj/NmY2NzZmNzMyZjZj/NmY2NzZmMmU3Mzc2/Njc",
        "https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw",
        "https://imgs.search.brave.com/HR0zaJRwAbtCuRslERa-kzywu4mXt87tBhnOdLqHnR8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/OTdfRG9ja2VyX2xv/Z29fbG9nb3MtNTEy/LnBuZw",
        "https://imgs.search.brave.com/14osNFB8UbePR5iGhs4iQ7s969an3VdTpmfVIepe3WU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI5L1Bvc3RncmVz/cWxfZWxlcGhhbnQu/c3Zn",
        "https://imgs.search.brave.com/Yt9X5m-E_QgfbbrfScGTaqtxedJdJQWLZ14nJweonJg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJy/andkL3N0eWxlcy9j/b21tdW5pdHlJY29u/X3Zla3pmM29hdHJz/NjEucG5n"
    ]
    return (
        <CardWrapper>
            <div className="text-lg p-2">
                <div className="title">
                    Technologies
                </div>
                <div className="grid grid-cols-5 px-1 py-2 gap-1">
                    {technologies.map((technology) => <><img  className = "h-8 w-8 rounded-md" src={technology} alt="" /></>)}
                </div>
            </div>
            
        </CardWrapper>
    
       
    )
}