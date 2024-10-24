import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const form = useRef();
    const { t } = useTranslation();
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
        <div className="section-container grid gap-8 grid-cols-1" id="contact">
            <h2 className="">{t('nav.contact')}</h2>
            <div className="flex flex-col">
                <form ref={form} onSubmit={sendEmail} className="space-y-2.5">
                    <div className="form-group">
                        <label className="form-label">
                            {t('contact.name.label')}
                            <abbr title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            pattern="^[a-zA-Z]+$/i"
                            required={true}
                            minLength={5}
                            maxLength={24}
                            placeholder={t('contact.name.placeholder')}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            {t('contact.email.label')}
                            <abbr title="required">*</abbr>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            required={true}
                            maxLength={50}
                            placeholder={t('contact.email.placeholder')}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            {t('contact.message.label')}
                            <abbr title="required">*</abbr>
                        </label>
                        <textarea
                            name="message"
                            required={true}
                            placeholder={t('contact.message.placeholder')}
                            rows="5" cols="33"
                            className="form-input"
                        />
                        <div className="">
                            <input type="submit" value={t('contact.submit')} className="form-submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;