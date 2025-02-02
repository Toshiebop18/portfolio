export default function project ({githubLink, porfolioImage, liveLink, title}) {
    return (
        <div className="w-[48%] relative group hover:opacity-50">
            <img src={porfolioImage} className="w-full h-full" alt="portfolio" />
            <div className="absolute top-10 flex items-center gap-4 hidden group-hover:flex">
                <h1 className="text-black font-bold text-3xl left-10">{title}</h1>
                <a href={githubLink} target="_blank" rel="noreferrer"><img src="/icon-github.svg" alt="github link" /></a>
                <a href={liveLink} target="_blank" rel="noreferrer"><img src="/external-link.png" className="w-4" alt="deployed link" /></a>
            </div>
        </div>
    )
}