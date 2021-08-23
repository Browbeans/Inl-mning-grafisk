import Jerry from "../assets/sein.jpg"

function Contact() {
    return(
        <div className="contact">
            <div className="contact-photo">
                <img src={Jerry} alt="sadasd"></img>
            </div>
            <div className="contact-text">
                <h3>Jerry Seinfeld, CEO</h3>
                <div className="employee-text">
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                </div>
            </div>
        </div>
    )
}

export default Contact