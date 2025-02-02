export default function Resume () {
    return (
        <section className="pt-8 px-12 bg-[#142f54] text-white min-h-[80vh]">
            <h1 className="my-8 font-bold text-3xl">Resume</h1>
            <p className="mb-4">Download my <a className="text-gray-500 font-semibold" href="https://www.dropbox.com/scl/fi/ycwwjo3dckgiqvi3z1byd/Tahnoshie-Latin.pdf?rlkey=4t5e9qg48osl7yr8vzgabvc8d&e=1&st=gqm07vt9&dl=0" target="_blank" rel="noreferrer">resume</a></p>
            <h2 className="mb-4 text-2xl">Front-end Proficiences</h2>
            <ul className="list-disc list-inside font-bold *:mb-2 mb-8">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Responsive Design</li>
                <li>React</li>
            </ul>
            <h2 className="mb-4 text-2xl">Back-end Proficiences</h2>
            <ul className="list-disc list-inside font-bold *:pb-2">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL Sequelize</li>
            </ul>
        </section>
    )
}