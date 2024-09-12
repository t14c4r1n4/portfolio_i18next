import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_k1rvvtc", "template_ev69smj", form.current, {
                publicKey: "CC3Yq74MwFmqL7Rka",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="grid gap-8 grid-cols-1 mb-10">
            <div className="flex flex-col">
                <form ref={form} onSubmit={sendEmail} className="space-y-2.5">
                    <div className="form-group">
                        <label className="form-label">
                            Name
                            <abbr title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            pattern="^[a-zA-Z]+$/i"
                            required={true}
                            minLength={5}
                            maxLength={24}
                            placeholder="Name"
                            message="Please tell me your name"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Email
                            <abbr title="required">*</abbr>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            required={true}
                            message="Please enter your valid E-Mail-Adress"
                            maxLength={50}
                            placeholder="E-Mail"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Message
                            <abbr title="required">*</abbr>
                        </label>
                        <textarea
                            name="message"
                            message="Please enter your message"
                            required={true}
                            placeholder="Message"
                            rows="5" cols="33"
                            className="form-input"
                        />
                        <div className="">
                            <input type="submit" value="Send" className="form-submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;