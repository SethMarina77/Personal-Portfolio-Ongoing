import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const MoreAboutMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ont1xlx",
        "template_xp5nsrh",
        form.current,
        "CazhcWNjW4T2BvG8Z"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          toast.success("Message sent successfully!") ; // Success toast
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("Failed to send message. Please try again."); // Error toast
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <div className="pt-8 h-[100vh] bg-neutral-900">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg text-gray-200">
                If you'd like to speak with me, please don't hesitate.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-gray-200">
                  Send me a message!
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="from_name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Name"
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email_id">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Email"
                    type="email"
                    name="email_id"
                    id="email_id"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Your Message"
                    rows="8"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
                <input type="hidden" name="to_name" value="Seth" />{" "}
               
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Me a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutMe;
