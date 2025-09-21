import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: ""
  });
  const [captured, setCaptured] = useState(null);
  const navigate = useNavigate();

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    // Capture info, then redirect to Home:
    setCaptured(form);
    // Store to session so Home could read it later if needed
    sessionStorage.setItem("contactSubmission", JSON.stringify(form));
    navigate("/");
  }

  return (
    <section className="stack gap-lg">
      <h2>Contact</h2>
      <div className="card">
        <div className="contact-info">
          <p><strong>Email:</strong> aguanasa@my.centennialcollege.ca</p>
          <p><strong>Phone:</strong> +1 (437) 601-0857</p>
          <p><strong>Location:</strong> Toronto, Canada</p>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="row">
            <label>First Name
              <input required name="firstName" value={form.firstName} onChange={onChange}/>
            </label>
            <label>Last Name
              <input required name="lastName" value={form.lastName} onChange={onChange}/>
            </label>
          </div>

          <div className="row">
            <label>Contact Number
              <input name="phone" value={form.phone} onChange={onChange}/>
            </label>
            <label>Email Address
              <input required type="email" name="email" value={form.email} onChange={onChange}/>
            </label>
          </div>

          <label>Message
            <textarea required name="message" rows="5" value={form.message} onChange={onChange}/>
          </label>

          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>

      {captured && (
        <details className="card">
          <summary>Captured (for demo)</summary>
          <pre>{JSON.stringify(captured, null, 2)}</pre>
        </details>
      )}
    </section>
  );
}
