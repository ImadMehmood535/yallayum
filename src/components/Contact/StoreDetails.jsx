"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const StoreDetails = () => {
  const storedetails = [
    {
      icon: (
        <svg
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M44.8452 41.5065C51.6671 34.3064 51.5495 22.9384 44.493 15.8819C37.3173 8.70602 25.6828 8.70602 18.5069 15.8819C11.4504 22.9384 11.333 34.3064 18.1548 41.5065C20.9413 37.0724 25.8765 34.125 31.5 34.125C37.1235 34.125 42.0588 37.0724 44.8452 41.5065ZM31.5 62.2857L14.7946 45.5805C5.56846 36.3542 5.56846 21.3957 14.7946 12.1696C24.0207 2.94346 38.9792 2.94346 48.2055 12.1696C57.4316 21.3957 57.4316 36.3542 48.2055 45.5805L31.5 62.2857ZM31.5 31.5C27.1506 31.5 23.625 27.9744 23.625 23.625C23.625 19.2758 27.1506 15.75 31.5 15.75C35.8494 15.75 39.375 19.2758 39.375 23.625C39.375 27.9744 35.8494 31.5 31.5 31.5Z"
              fill="#11181C"
            />
          </g>
        </svg>
      ),
      title: "Address",
      content: "86 Street, DIP 1, Dubai, UAE",
    },
    {
      icon: (
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.25 31.4717V38.2492C40.25 39.2554 39.472 40.0903 38.4685 40.1613C37.6301 40.2205 36.9462 40.25 36.4167 40.25C19.4798 40.25 5.75 26.5201 5.75 9.58333C5.75 9.05378 5.77961 8.36983 5.83884 7.53154C5.90979 6.52794 6.74463 5.75 7.75073 5.75H14.5285C15.0205 5.75 15.4325 6.12264 15.4819 6.61212C15.5263 7.05155 15.5675 7.40435 15.6056 7.67054C15.9933 10.3782 16.7853 12.9554 17.9183 15.3391C18.1002 15.7217 17.9816 16.1797 17.6369 16.4259L13.5001 19.3809C16.0186 25.2638 20.7362 29.9815 26.619 32.5L29.5686 28.3703C29.818 28.0215 30.2814 27.9015 30.6686 28.0853C33.0521 29.2175 35.6291 30.0085 38.3364 30.3953C38.6009 30.4332 38.9515 30.474 39.3879 30.5181C39.8774 30.5676 40.25 30.9797 40.25 31.4717Z"
            fill="#11181C"
          />
        </svg>
      ),
      title: "Phone",
      content: "+ 971 527 254 899",
    },
    {
      icon: (
        <svg
          width="51"
          height="42"
          viewBox="0 0 51 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M4.25 9.625V6.98845C4.25 6.02833 5.21753 5.25 6.35758 5.25H44.6424C45.8065 5.25 46.75 6.02866 46.75 6.98845V35.0115C46.75 35.9716 45.7825 36.75 44.6424 36.75H6.35758C5.19361 36.75 4.25 35.9714 4.25 35.0115V33.25H42.5V12.775L25.5 25.375L4.25 9.625ZM0 17.5H10.625V21H0V17.5ZM0 26.25H17V29.75H0V26.25Z"
              fill="#11181C"
            />
          </g>
        </svg>
      ),
      title: "Mail",
      content: "86 Street, DIP 1, Dubai, UAE",
    },
  ];

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,";

  const itemClasses = {
    title: "text-[#FC4242] GeneralSans text-base font-semibold tab-title ",
  };
  return (
    <div className="StoreDetails pt-28 px-0 mx-auto">
      <div className=" ">
        <div className="store-details">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 sm:gap-6 md:gap-10">
            {storedetails.map((item, key) => (
              <div
                key={key}
                className="group transition-all duration-200 cursor-pointer rounded-xl bg-[#F9F1F8] py-7 px-3 flex items-center flex-col"
              >
                <div className="icon-wrapper mb-4 min-h-[65px] flex items-center">
                  {item.icon}
                </div>
                <div className="content-wrapper text-center">
                  <h4 className="font-medium text-base mb-2">{item.title}</h4>
                  <p className="text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="map-area mt-10">
          <h2 className=" text-center mt-16 mb-10">Store Locator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="storelocationdetails">
              <Accordion
                variant="splitted"
                className="custom-accrodian-group"
                itemClasses={itemClasses}
              >
                <AccordionItem
                  key="1"
                  aria-label="Dubai Mall"
                  title="Dubai Mall"
                  hideIndicator
                >
                  <ul className="GeneralSans font-semibold text-base flex flex-col gap-4">
                    <li>
                      Address : Second Floor, Dubai Mall, Down Town, Dubai
                    </li>
                    <li>Timing : 09:00 AM - 10:00 PM</li>
                    <li>Contact : 000000000000</li>
                  </ul>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Store 2" title="Store 2" hideIndicator>
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Store 3" title="Store 3" hideIndicator>
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
            <div className="storemaparea col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.5693757073336!2d55.159301675955206!3d24.980761740432147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f729601268691%3A0x3715d6e541a00d89!2s86%20Street%20-%20Dubai%20Investments%20Park%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1717840768819!5m2!1sen!2s"
                width="100%"
                height="500"
                allowFullScreen=""
                loading="lazy"
                style={{ borderRadius: 20 }}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
