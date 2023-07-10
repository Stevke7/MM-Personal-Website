export function SuccessMessage(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center p-3 text-center ">
            <img style={{width: "64px", height: "64px", marginBottom:'12px'}} src="/icons/Featured icon.svg" alt=""/>
            <h5 className="fw-bold text-black">Message sent</h5>
            <p>Thank You for reaching out!<br/>I’ll get back to you within the next 24 hours..</p>
        </div>
    )
}