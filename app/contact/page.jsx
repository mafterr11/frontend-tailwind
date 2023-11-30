import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";


export const metadata = {
  title: "Contact - Delirium",
  description: "Contact Turkish Delirium page",
  keywords: "Restaurant Contact Information, Turkish Delirium Contact, Location Details, Phone Number for Turkish Delirium, Email Address for Turkish Delirium, Business Hours for Turkish Delirium, Map and Directions to Turkish Delirium, Reservation Information for Turkish Delirium, Social Media Links for Turkish Delirium, Customer Feedback for Turkish Delirium",
};

const page = () => {
  return (
    <div className="lg:py-[10rem] lg:px-12 pb-10 bg-black/40">
      <div className="container flex justify-center items-center flex-wrap-reverse sm:flex-nowrap  mx-auto bg-black/40 lg:p-8 pt-[7rem] lg:h-screen ">
        <div className="w-full lg:w-full lg:h-3/4 md:w-1/2 mt-12 lg:mt-0 rounted-lg">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2848.0129493943437!2d26.05004825471762!3d44.45340569321442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI3JzEyLjMiTiAyNsKwMDMnMDYuNyJF!5e0!3m2!1sen!2sat!4v1700651270658!5m2!1sen!2sat" width="100%" height="100%" style={{border: "0"}} allowFullScreen=""></iframe>
        </div>

        <div className="text-center flex flex-col w-3/4 text-xl gap-4">
          <h1 className="text-3xl">Contact Us</h1>
          <p><strong>Rezervari:</strong> contact@delirium.ro</p>
          <p><strong>Restaurant:</strong> 021-XXX-230</p>
          <p><strong>Adresa:</strong> Strada Vidin 58, Bucuresti</p>
          <div>
          <p><strong>Program:</strong> 12:00 am - 22:00 pm </p>
          <div className="flex justify-center items-center mt-12 gap-12">
          <Link target="_blank" href="https://tiktok.com/">
          <FaTiktok size={40}/>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/">
          <FaInstagram size={40}/>
          </Link>
          <Link target="_blank" href="https://www.facebook.com/" >
          <IoLogoFacebook size={40}/>
          </Link>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
