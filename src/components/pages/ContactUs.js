import { useEffect, useState, useRef } from "react";
import "./ContactUs.css";
import {
  contactUs_LHSPatch,
  contactUs_PostIt,
  contactUs_LinesGraphic,
  contactUs_Tape,
} from "../../assets";
import { GoogleSpreadsheet } from "google-spreadsheet";
import writeSheetRow from "../../api/writeSheetRow";

function ContactUs() {
  const sheet = useRef();
  const SHEET_ID = 497499690;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // const success = await writeSheetRow(SHEET_ID, [
    //   formValues.name,
    //   formValues.email,
    //   formValues.number,
    //   formValues.message,
    // ]);

    // if (success) {
    //   window.alert("Form Submission Successful");

    //   setFormValues({
    //     name: "",
    //     email: "",
    //     number: "",
    //     message: "",
    //   });
    // } else {
    //   window.alert("Form Submission Unsuccessful");
    // }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact Us", ...formValues }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  useEffect(async () => {
    // const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";
    // await doc.loadInfo();
    // sheet.current = doc.sheetsByIndex[3];
    // await sheet.addRow(["Test", "Test", "Test", "Test"]);
    // console.log(sheet.sheetId);
  }, []);

  return (
    <div className="contactus-container">
      <div className="figure1">
        <img src={contactUs_LHSPatch}></img>
      </div>
      <div className="contactus-text">
        <h1 className="contactus-heading">CONTACT US</h1>
        <p>
          The Debut Project is geared towards potential first-time professional
          help seekers looking to manage their mental health. If you are
          interested to know more about us, would like to share any feedback, or
          even work with us on our mission, please drop a message via the form
          below!
        </p>

        <div className="contactus-form-container">
          <div className="contactus-left">
            <form
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="Contact Us"
              method="post"
              // onSubmit={handleSubmit}
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="Contact Us" />

              <div hidden>
                <input name="bot-field" />
              </div>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                required
              ></input>
              <br></br>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                required
              ></input>
              <br></br>

              <input
                id="number"
                name="number"
                placeholder="Contact Number"
                value={formValues.number}
                onChange={handleChange}
                required
              ></input>
              <br></br>

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formValues.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">SEND MESSAGE</button>
            </form>
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
          <div className="contactus-right">
            {/* <img src={contactUs_PostIt} className="figure2"></img> */}
            <img src={contactUs_LinesGraphic} className="figure3_lines"></img>
            <img src={contactUs_Tape} className="contactus-tape" />

            <div className="contactus-right-text">
              <h2>
                You can also reach out to us
                <br />
                via the following means -
              </h2>
              <ul>
                <li>
                  Email: <a href="#">thedebutproj@gmail.com</a>{" "}
                </li>
                <li>
                  Phone: <a href="#">+91 7218583843</a>{" "}
                </li>

                <li>
                  We request 24 to 48 hours to get back to you.
                  <br />
                  <br />
                  <a href="#">
                    - Please note that this is not an emergency mental health
                    service, and we advise you to click on the "Helplines" link
                    at the foot of this webpage if you require immediate
                    assistance.
                    <br />- If you are a mental health professional looking to
                    be listed on our website, please click on the "For Mental
                    Health Professionals" option at the foot of the webpage.{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
