import wa from '../asset/wa.png'

const GetInTouch = () => {
    return (
        <div className="contact" id='mycontact'>
            <span>What's next?</span>
            <h1>Get in Touch</h1>
            <p>
                My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href='https://api.whatsapp.com/send?phone=6281287475131' className="contact__cta cta">
                <img src={wa} alt="" />
                Say Hello!
            </a>
        </div>
    )
}

export default GetInTouch