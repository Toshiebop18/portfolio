import Project from "../components/project"

export default function Portfolios () {
    return (
        <section className="pt-8 px-12 bg-[#142f54] text-white min-h-[80vh]">
            <h1 className="my-8 font-bold text-3xl">Portfolio</h1>
            <div className="w-5/6 flex flex-wrap justify-between gap-4">
                <Project githubLink={'https://github.com/Toshiebop18/weather_app'} porfolioImage={'/weatherApp.png'} liveLink={'https://weather-app-p43l.onrender.com/'} title={'Weather App'} />
                <Project githubLink={'https://github.com/Toshiebop18/Employee-tracker'} porfolioImage={'/employee-productivity-tracker.png'} liveLink={''} title={'Employee Tracker'} />
                <Project githubLink={'https://github.com/Toshiebop18/Vehicle-Builder'} porfolioImage={'/vehicle-builder.jpg'} liveLink={''} title={'Vehicle Builder'} />
            </div>
        </section>
    )
}