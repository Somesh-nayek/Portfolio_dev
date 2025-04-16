import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const reCaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [loading, setLoading] = useState(false);
  const service_id=import.meta.env.VITE_SERVICE_ID;
  const template_id=import.meta.env.VITE_TEMPLATE_ID;
  const public_key=import.meta.env.VITE_PUBLIC_ID;
  const reCaptchaOnChange =async (token: string | null) => {
    const formData = {
      name: (form.current?.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.current?.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.current?.elements.namedItem("message") as HTMLTextAreaElement)?.value,
      privacy: (form.current?.elements.namedItem("privacy") as HTMLInputElement)?.checked,
      "g-recaptcha-response": token,
    };

    setLoading(true);

    await emailjs
      .send(
        service_id!,
        template_id!,
        formData,
        public_key!
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          reCaptchaRef.current?.reset();
        },
        (error: Error) => {
          console.log(error.message);
          setLoading(false);
        }
      );
  };
  const sendEmail =(e: React.FormEvent) => {
    e.preventDefault();
    reCaptchaRef.current?.execute();
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-2 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-4 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <p>privacy policy</p>
          <div className="flex flex-col">
            <ReCAPTCHA
              ref={reCaptchaRef}
              sitekey="6Ld1WxorAAAAAIiKeGKxEKcbmZZSZv8T2naTGr0z"
              size="invisible"
              onChange={reCaptchaOnChange}
            />
          </div>
          <button
            type="submit"
            className={`py-3 bg-[#b7a7b6] px-8 outline-none w-fit text-white shadow-md font-bold
             shadow-primary rounded-xl`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper({
  Component: Contact,
  idName: "contact",
});

export default WrappedContact;
