import { useState } from "react";
import BackButton from "./Buttons/BackButton";
import NextButton from "./Buttons/NextButton";
import toast from "react-hot-toast";
import Image from "./Image";
import imageComponents from "../../data/imageData"; // Adjust the path as needed
import SubmitButton from "./Buttons/SubmitButton";
import ShowData from "./ShowData";
import {
  isStep1Valid,
  isStep2CreditCardValid,
  isStep2PaypalValid,
} from "./checkoutLogic";
const CheckoutForm = () => {
  const [step, setStep] = useState(1);

  const [invoice, setInvoices] = useState(true);

  const [formDatas, setformDatas] = useState({
    // Step 1: Personal Information
    firstName: "",
    lastName: "",
    address: "",
    // Step 2: Payment Methods and Card Info
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    // Step 3: Final Notes and Instructions
    notes: "",
  });

  const updateformDatas = (key, value) => {
    setformDatas((prevformDatas) => ({
      ...prevformDatas,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInvoices(false);
    console.log("Form submitted:", formDatas);
  };

  const handleNext = () => {
    if (step === 1 && isStep1Valid(formDatas)) {
      setStep(step + 1);
    } else if (
      step === 2 &&
      (isStep2CreditCardValid(formDatas) || isStep2PaypalValid(formDatas))
    ) {
      setStep(step + 1);
    } else {
      toast.error("Fill the form first", { position: "top-right" });
    }
  };

  const handleBack = () => {
    if (step != 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setInvoices(true);
    setformDatas({
      name: "",
      email: "",
      paymentMethod: "",
      cardNumber: "",
      expirationDate: "",
      notes: "",
      // Add more fields as needed
    });
  };

  return (
    <section className="relative">
      {invoice ? (
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
            <h2 className="text-3xl font-semibold md:text-5xl text-center mb-4">
              <span
                className="bg-contain bg-center bg-no-repeat px-4 text-white"
                style={{
                  backgroundImage:
                    "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')",
                  backgroundSize: "contain", // you can adjust this based on your needs
                  backgroundPosition: "center", // you can adjust this based on your needs
                  backgroundRepeat: "no-repeat", // you can adjust this based on your needs
                  padding: "4px", // adjust padding as needed
                  color: "white", // adjust text color as needed
                }}
              >
                Lets Build
              </span>
              MultiStep Checkout Form with React Js
            </h2>

            <div className="mb-4 rounded-3xl border border-solid border-black bg-white px-4 py-10 [box-shadow:rgb(0,_0,_0)_9px_9px] sm:px-8 sm:py-16 md:px-20">
              <div className="mb-4 grid w-full">
                <div className="relative">
                  {step === 1 && (
                    <div>
                      <label className="mb-1 font-semibold">First Name:</label>
                      <input
                        className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                        type="text"
                        value={formDatas.firstName}
                        onChange={(e) =>
                          updateformDatas("firstName", e.target.value)
                        }
                      />
                      <label className="mb-1 font-semibold">Last Name:</label>
                      <input
                        className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                        type="text"
                        value={formDatas.lastName}
                        onChange={(e) =>
                          updateformDatas("lastName", e.target.value)
                        }
                      />
                      <label className="mb-1 font-semibold">Address:</label>
                      <textarea
                        className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                        value={formDatas.address}
                        style={{ height: "100px" }} // Adjust the height as needed
                        onChange={(e) =>
                          updateformDatas("address", e.target.value)
                        }
                        rows={4}
                      />
                      <div className="mt-4 flex justify-between">
                        <BackButton handleBack={handleBack}></BackButton>
                        <NextButton handleNext={handleNext}></NextButton>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <label className="mb-1 font-semibold">
                        Payment Method:
                      </label>
                      <select
                        className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                        value={formDatas.paymentMethod}
                        onChange={(e) =>
                          updateformDatas("paymentMethod", e.target.value)
                        }
                      >
                        <option value="">Select Payment Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                      </select>
                      {formDatas.paymentMethod === "creditCard" && (
                        <>
                          <label className="mb-1 font-semibold">
                            Card Number:
                          </label>
                          <input
                            className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                            type="text"
                            value={formDatas.cardNumber}
                            onChange={(e) =>
                              updateformDatas("cardNumber", e.target.value)
                            }
                          />
                          <label className="mb-1 font-semibold">
                            Expiration Date:
                          </label>
                          <input
                            className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                            type="text"
                            value={formDatas.expirationDate}
                            onChange={(e) =>
                              updateformDatas("expirationDate", e.target.value)
                            }
                          />
                        </>
                      )}
                      <div className="mt-4 flex justify-between">
                        <BackButton handleBack={handleBack}></BackButton>
                        <NextButton handleNext={handleNext}></NextButton>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <label className="mb-1 font-semibold">
                        Notes and Instructions:
                      </label>
                      <textarea
                        className="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
                        value={formDatas.notes}
                        onChange={(e) =>
                          updateformDatas("notes", e.target.value)
                        }
                      />
                      <div className="mt-4 flex justify-between">
                        <BackButton handleBack={handleBack}></BackButton>
                        <SubmitButton
                          handleSubmit={handleSubmit}
                        ></SubmitButton>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ShowData formDatas={formDatas} handleReset={handleReset}></ShowData>
      )}

      {imageComponents?.map((image, index) => (
        <Image key={index} src={image.src} classes={image.classes} />
      ))}
    </section>
  );
};

export default CheckoutForm;
