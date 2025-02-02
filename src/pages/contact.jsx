import { useState } from "react"

export default function Contact () {
    const [errors, setErrors] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const message = e.target.message.value
        if (name === '') {
            setErrors('Name is required')
            return
        }
        if (email === '') {
            setErrors('Email is required')
            return
        }

        if (message === '') {
            setErrors('Message is required')
            return
        }
    }

    return (
        <section className="pt-8 px-12 bg-[#142f54] text-white min-h-[80vh]">
            <h1 className="my-8 font-bold text-3xl">Contact</h1>
            <form className="flex flex-col md:w-1/2 gap-4" onSubmit={submitForm}>
                <label>Name:</label>
                <input name="name" type="text" className="mb-8 py-2 outline-none text-black"  />
                <label>Email Address:</label>
                <input name="email" type="email" className="mb-8 py-2 outline-none text-black" />
                <label>Message:</label>
                <textarea name="message" className="min-h-36 text-black outline-none">

                </textarea>
                <p>{errors}</p>
                <button className="bg-gray-700 w-fit px-8 py-2 rounded hover:bg-gray-400">Submit</button>
            </form>
        </section>
    )
}