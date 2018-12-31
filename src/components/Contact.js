import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact-main">
                <div className="ContactTitleContainer"><h1 className="ContactTitle">Contact Information</h1></div>
                <div className="ContactDetails">
                    <div className="ContactNumber"><p>555-555-5555</p></div>
                    <div className="ContactAddress"><p>55 Place Road, NSW 2000</p></div>
                    <div className="ContactEmail"><p>test@example.com</p></div>
                </div>
            </div>
        )
    }
}

export default Contact;