import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:gokulraja840@gmail.com?subject=${formData.subject}&body=${formData.message} - ${formData.name} - ${formData.email}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col mt-14">
        <h4 className="text-4xl font-semibold text-black dark:text-white text-center font-outfit">
          Connect with me on{" "}
          <span className="link link-underline link-underline-black">
            Socials
          </span>
        </h4>

        <div className="flex flex-wrap gap-6 justify-center font-outfit text-xl font-extralight text-gray-500 mt-14">
          <p className="hover:text-black dark:hover:text-gray-300 duration-200 link link-underline link-underline-black">
            <a
              href="https://github.com/Gokul-Raja84"
              target={"_blank"}
              rel="noreferrer"
            >
              github
            </a>
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentColor", width: "14px", height: "14px" }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>
          <p className="hover:text-black dark:hover:text-gray-300 duration-200 link link-underline link-underline-black">
            <a
              href="https:bento.me/gokulraja"
              target={"_blank"}
              rel="noreferrer"
            >
              bento
            </a>
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentColor", width: "14px", height: "14px" }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>
          <p className="hover:text-black dark:hover:text-gray-300 duration-200 link link-underline link-underline-black">
            <a
              href="https://www.linkedin.com/in/gokulraja84/"
              target={"_blank"}
              rel="noreferrer"
            >
              linkedin
            </a>
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentColor", width: "14px", height: "14px" }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>

          <p className="hover:text-black dark:hover:text-gray-300 duration-200 link link-underline link-underline-black">
            <a
              href="https://twitter.com/_iamGokulRaja_"
              target={"_blank"}
              rel="noreferrer"
            >
              twitter
            </a>
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentColor", width: "14px", height: "14px" }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>
          {/* <p className="hover:text-black dark:hover:text-gray-300 duration-200 link link-underline link-underline-black">
            <a
              href="https://instagram.com/gokul._raja._/"
              target={"_blank"}
              rel="noreferrer"
            >
              instagram
            </a>
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentColor", width: "14px", height: "14px" }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p> */}
          <p className="hover:text-black dark:hover:text-gray-300 duration-200 link link-underline link-underline-black">
            <a
              href="https://gokulraja.hashnode.dev/"
              target={"_blank"}
              rel="noreferrer"
            >
              blog
            </a>
            <span className="inline-flex">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentColor", width: "14px", height: "14px" }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>
        </div>

        <h5 className="mt-28">
          <p className="text-xl font-md font-outfit text-gray-900 dark:text-gray-200 md:ml-5">
            or drop a mail at{" "}
            <a
              href="mailto:gokulraja840@gmail.com"
              className="cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className="link link-underline link-underline-black">
                {" "}
                gokulraja840@gmail.com
              </span>
            </a>
            <span className="inline-flex dark:text-white text-black">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
                width="24"
                style={{
                  width: "15px",
                  height: "14px",
                }}
              >
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </p>
        </h5>
      </div>

      <div className="text-sm bottom-20 md:bottom-10 items-center justify-center absolute flex flex-col font-outfit text-gray-500">
        <p>
          Website Designed and Developed by{" "}
          <span className="text-blue-500 link link-underline link-underline-black">
            <a
              target={"_blank"}
              href="https://github.com/Gokul-Raja84"
              rel="noreferrer"
            >
              Gokul Raja⚡
            </a>
          </span>
        </p>
        <p className="mt-2">
          Crafted with love ❤️‍🔥, some chaos😶‍🌫️ + lots of Coffee☕
        </p>
      </div>
    </div>
  );
}
