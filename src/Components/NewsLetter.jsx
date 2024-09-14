import { useForm } from "react-hook-form";
import '../assets/css/newsletter.css'

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => alert("Email Sent");

  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <h6 className="">Newsletter</h6>
        <h3>Watch Our Courses</h3>
        <p>Problems trying to resolve the conflict between</p>
        <p>
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
          <input
            id="email"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email Address",
              },
            })}
            className="newsletter-email"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="newsletter-submit"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
