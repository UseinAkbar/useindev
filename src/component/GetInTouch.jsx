const GetInTouch = () => {
    return (
        <section className="contact" id='contact'>
            <span>What's next?</span>
            <h1>Get in Touch</h1>
            <p>
                My inbox is always open. Let's talk and work together!
            </p>
            <a href='https://api.whatsapp.com/send?phone=6281287475131' className="contact__cta cta">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FCFCFC" className="w-6 h-6 contact__icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>
                Say Hello!
            </a>
        </section>
    )
}

export default GetInTouch