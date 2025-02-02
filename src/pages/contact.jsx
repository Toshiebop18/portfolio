export default function Contact () {
    return (
        <section className="pt-8 px-12 bg-[#142f54] text-white min-h-[80vh]">
            <h1 className="my-8 font-bold text-3xl">Contact</h1>
            <form className="flex flex-col md:w-1/2 gap-4">
                <label>Name:</label>
                <input type="text" className="mb-8 py-2 outline-none text-black"  />
                <label>Email Address:</label>
                <input type="email" className="mb-8 py-2 outline-none text-black" />
                <label>Message:</label>
                <textarea className="min-h-36 text-black outline-none">

                </textarea>
                <p>error</p>
                <button className="bg-gray-700 w-fit px-8 py-2 rounded hover:bg-gray-400">Submit</button>
            </form>
        </section>
    )
}