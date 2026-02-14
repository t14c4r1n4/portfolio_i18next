import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const form = useRef();
    const { t } = useTranslation();
    const [btnText, setBtnText] = useState(t('contact.submit'));

    const sendEmail = (e) => {
        e.preventDefault();
        setBtnText('Sending...');

        emailjs.init({
            publicKey: "wGaxxKJPEE4FZFPbd"
        });

        const serviceID = "service_egaum63";
        const templateID = "template_yzi86jh";
        emailjs.sendForm(serviceID, templateID, form.current)
            .then(
                () => {
                    setBtnText(t('contact.submit'));
                    alert('Sent!');
                },
                (err) => {
                    setBtnText(t('contact.submit'));
                    alert(`Error: ${JSON.stringify(err)}`);
                }
            );
    };

    return (
        <div className="section-container grid gap-8 grid-cols-1" id="contact">
            <h2 className="text-3xl font-semibold">{t('nav.contact')}</h2>
            <div className="flex flex-col">
                <form ref={form} onSubmit={sendEmail} className="space-y-4" id="form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="user_name">
                            {t('contact.name.label')}<abbr title="required">*</abbr>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            pattern="^[a-zA-Z]{5,24}$"
                            required
                            placeholder={t('contact.name.placeholder')}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="user_email">
                            {t('contact.email.label')}<abbr title="required">*</abbr>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                            maxLength={50}
                            placeholder={t('contact.email.placeholder')}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">
                            {t('contact.message.label')}<abbr title="required">*</abbr>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            placeholder={t('contact.message.placeholder')}
                            rows="5"
                            className="form-input w-full"
                        />
                    </div>

                    <input
                        type="submit"
                        id="button"
                        value={btnText}
                        className="form-submit px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer transition-colors duration-300"
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;
