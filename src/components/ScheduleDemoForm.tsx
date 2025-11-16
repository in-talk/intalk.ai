import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Zoom } from "react-toastify";
import { useClose } from "@headlessui/react";
import { Label } from "./ui/Label";

function ScheduleDemoForm() {
  const close = useClose();

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    teamsEmail: "",
    email: "",
    address: "",
    phone: "",
    inbound_outbound: "",
    campaignSelection: "",
    otherCampaign: "",
    numberOfTestingBots: "",
    hasReferral: "",
    referralName: "",
    referralContact: "",
    heardAboutUs: "",
    dialerProvider: "",
    voipProvider: "",
    shiftStartTimings: "",
    shiftEndTimings: "",
    ip: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      company_name: formData.companyName,
      contact_name: formData.name,
      teams_email: formData.teamsEmail,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      inbound_outbound: formData.inbound_outbound,
      campaign_selection:
        formData.campaignSelection === "Other"
          ? formData.otherCampaign
          : formData.campaignSelection,
      testing_bots: formData.numberOfTestingBots,
      has_referral: formData.hasReferral,
      referral_name: formData.referralName,
      referral_contact: formData.referralContact,
      heard_about_us: formData.heardAboutUs,
      dialer_provider: formData.dialerProvider,
      voip_provider: formData.voipProvider,
      shift_start_timings: formData.shiftStartTimings,
      shift_end_timings: formData.shiftEndTimings,
      ip_address: formData.ip,
      message: formData.message,
      disclaimer_text: termsCheck
        ? `By submitting this form I hereby confirm that this inquiry is made voluntarily and independently, and I consent to be contacted by your Company regarding my inquiry.`
        : "N/A",
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setFormData({
            companyName: "",
            name: "",
            teamsEmail: "",
            email: "",
            address: "",
            phone: "",
            inbound_outbound: "",
            campaignSelection: "",
            otherCampaign: "",
            numberOfTestingBots: "",
            hasReferral: "",
            referralName: "",
            referralContact: "",
            heardAboutUs: "",
            dialerProvider: "",
            voipProvider: "",
            shiftStartTimings: "",
            shiftEndTimings: "",
            ip: "",
            message: "",
          });
          setLoading(false);
          toast.success("Message sent successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
          close();
        },
        (error) => {
          setLoading(false);
          toast.error("Error sending email", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }
      );
  };

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setFormData({ ...formData, ip: data.ip }));
  }, []);

  console.log("ip", formData.ip);

  return (
    <div className="py-5 px-3 rounded-2xl max-h-[63dvh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <form className="flex flex-col gap-2 px-1" onSubmit={handleSubmit}>
        {/* Row 1: Company Name & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Company Name *"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Contact Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 2: Teams Email & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Teams Id/Email *"
            name="teamsEmail"
            value={formData.teamsEmail}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Email *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 3: Address & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Phone *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 4: Inbound/Outbound & Campaign Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-200 text-xs font-nacelle mb-2 block">
              Inbound or Outbound? *
            </label>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  id="radio-inbound"
                  type="radio"
                  name="inbound_outbound"
                  value="inbound"
                  checked={formData.inbound_outbound === "inbound"}
                  onChange={handleChange}
                  className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <label
                  htmlFor="radio-inbound"
                  className="ml-2 text-gray-200 text-sm font-nacelle cursor-pointer"
                >
                  Inbound
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="radio-outbound"
                  type="radio"
                  name="inbound_outbound"
                  value="outbound"
                  checked={formData.inbound_outbound === "outbound"}
                  onChange={handleChange}
                  className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor="radio-outbound"
                  className="ml-2 text-gray-200 text-sm font-nacelle cursor-pointer"
                >
                  Outbound
                </label>
              </div>
            </div>
          </div>

          <select
            name="campaignSelection"
            value={formData.campaignSelection}
            onChange={handleChange}
            className="w-full h-11 text-gray-200 text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 pr-10 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundColor: "rgba(17, 24, 39, 0.5)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23E5E7EB' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
            }}
            required
          >
            <option value="" className="bg-gray-800 text-gray-200">
              Select Campaign *
            </option>
            <option value="ACA" className="bg-gray-800 text-gray-200">
              ACA
            </option>
            <option value="FE" className="bg-gray-800 text-gray-200">
              FE (Final Expense)
            </option>
            <option value="Medicare" className="bg-gray-800 text-gray-200">
              Medicare
            </option>
            <option value="CGM" className="bg-gray-800 text-gray-200">
              CGM
            </option>
            <option value="SOLAR" className="bg-gray-800 text-gray-200">
              SOLAR
            </option>
            <option value="Other" className="bg-gray-800 text-gray-200">
              Other
            </option>
          </select>
        </div>

        {/* Row 5: Other Campaign (Conditional) & Number of Testing Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formData.campaignSelection === "Other" ? (
            <input
              type="text"
              className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
              placeholder="Please specify campaign *"
              name="otherCampaign"
              value={formData.otherCampaign}
              onChange={handleChange}
              required
            />
          ) : (
            <div></div>
          )}

          <select
            name="numberOfTestingBots"
            value={formData.numberOfTestingBots}
            onChange={handleChange}
            className="w-full h-11 text-gray-200 text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 pr-10 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundColor: "rgba(17, 24, 39, 0.5)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23E5E7EB' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
            }}
            required
          >
            <option value="" className="bg-gray-800 text-gray-200">
              Number of Testing Bots *
            </option>
            <option value="5" className="bg-gray-800 text-gray-200">
              5
            </option>
            <option value="10" className="bg-gray-800 text-gray-200">
              10
            </option>
            <option value="15" className="bg-gray-800 text-gray-200">
              15
            </option>
            <option value="20" className="bg-gray-800 text-gray-200">
              20
            </option>
          </select>
        </div>

        {/* Row 6: Has Referral Radio Buttons */}
        <div>
          <label className="text-gray-200 text-xs font-nacelle mb-2 block">
            Have you been referred by anyone? *
          </label>
          <div className="flex gap-6">
            <div className="flex items-center">
              <input
                id="referral-yes"
                type="radio"
                name="hasReferral"
                value="yes"
                checked={formData.hasReferral === "yes"}
                onChange={handleChange}
                className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-300 focus:ring-indigo-500"
                required
              />
              <label
                htmlFor="referral-yes"
                className="ml-2 text-gray-200 text-sm font-nacelle cursor-pointer"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="referral-no"
                type="radio"
                name="hasReferral"
                value="no"
                checked={formData.hasReferral === "no"}
                onChange={handleChange}
                className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-300 focus:ring-indigo-500"
              />
              <label
                htmlFor="referral-no"
                className="ml-2 text-gray-200 text-sm font-nacelle cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* Row 7: Referral Details or Heard About Us */}
        {formData.hasReferral === "yes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
              placeholder="Referral Name *"
              name="referralName"
              value={formData.referralName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
              placeholder="Referral Contact Number *"
              name="referralContact"
              value={formData.referralContact}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.hasReferral === "no" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="heardAboutUs"
              value={formData.heardAboutUs}
              onChange={handleChange}
              className="w-full h-11 text-gray-200 text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 pr-10 transition-colors appearance-none cursor-pointer"
              style={{
                backgroundColor: "rgba(17, 24, 39, 0.5)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23E5E7EB' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
              required
            >
              <option value="" className="bg-gray-800 text-gray-200">
                Where did you hear about us? *
              </option>
              <option value="LinkedIn" className="bg-gray-800 text-gray-200">
                LinkedIn
              </option>
              <option value="Facebook" className="bg-gray-800 text-gray-200">
                Facebook
              </option>
              <option
                value="Social Media"
                className="bg-gray-800 text-gray-200"
              >
                Social Media
              </option>
              <option
                value="Social Media"
                className="bg-gray-800 text-gray-200"
              >
                Google Search
              </option>
            </select>
            <div></div>
          </div>
        )}

        {/* Row 8: Dialer & VoIP Provider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="Dialer Provider Name"
            name="dialerProvider"
            value={formData.dialerProvider}
            onChange={handleChange}
          />
          <input
            type="text"
            className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 transition-colors"
            placeholder="VoIP Provider Name"
            name="voipProvider"
            value={formData.voipProvider}
            onChange={handleChange}
          />
        </div>

        {/* Row 9: Shift Timings & Campaign Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="pl-2 text-gray-200 text-sm"
              htmlFor="shiftTimings"
            >
              Shift Start Time
            </label>
            <input
              type="time"
              className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 pr-4 transition-colors"
              name="shiftStartTimings"
              value={formData.shiftStartTimings}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="pl-2 text-gray-200 text-sm"
              htmlFor="shiftEndTimings"
            >
              Shift End Time
            </label>
            <input
              type="time"
              className="w-full h-11 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 pr-4 transition-colors"
              name="shiftEndTimings"
              value={formData.shiftEndTimings}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 10: Message */}
        <textarea
          className="w-full min-h-20 text-gray-200 placeholder-gray-400 bg-transparent text-sm shadow-sm font-nacelle leading-6 rounded-2xl border border-gray-200 focus:outline-none focus:border-indigo-400 p-3 transition-colors resize-y"
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={formData.message}
          rows={2}
        />

        <div className="flex max-w-md items-center gap-3 my-5">
          <input
            type="checkbox"
            id="terms"
            checked={termsCheck}
            onChange={() => setTermsCheck((prev) => !prev)}
          />
          <Label htmlFor="terms" className="text-gray-300">
            By submitting this form I hereby confirm that this inquiry is made
            voluntarily and independently, and I consent to be contacted by your
            Company regarding my inquiry.
          </Label>
        </div>

        <button
          type="submit"
          title={!termsCheck ? "Please check the checkbox to submit form" : ""}
          disabled={loading || !termsCheck}
          className="w-full h-11 text-white text-sm font-semibold leading-6 rounded-full transition-all duration-300 hover:bg-indigo-600 bg-indigo-700 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default ScheduleDemoForm;
