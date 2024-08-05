import InnerpageHeader from "@/components/general/InnerpageHeader";
import React from "react";

const Index = () => {
  return (
    <div>
      <div className="w-full ">
        <InnerpageHeader pagetitle={"Return and Shipping Policy"} />
      </div>

      <div className="py-12">
        <div className="container flex flex-col gap-8 ">
          <p>
            Your satisfaction is our highest priority at YallaYum. If your order
            doesn’t bring you joy, reach out to us by email, and we’ll make it
            right. Whether it’s a refund, store credit, or a replacement item
            you need, we’re here to help. Please note that we’re unable to
            refund the original shipping and insurance fees. Also, our return
            policy is active for 30 days from the shipping date; we may not
            accept returns beyond this period.
          </p>

          <h2>In-Store Returns</h2>
          <p>
            If you’ve shopped in-store, simply bring the item(s) back along with
            your receipt to the original location for a hassle-free refund on
            any defective or unused goods.
          </p>

          <h2>Shipping Guidelines</h2>

          <p>
            At YallaYum, we deliver exclusively across the contiguous UAE. For
            online purchases, we’re quick to ship: orders made from Monday to
            Thursday are dispatched the following business day. Orders placed on
            Friday post-2 PM, on weekends, or during holiday periods might take
            a little longer – we’ll start processing these on the next business
            day.
          </p>

          <h2>Holiday Ordering</h2>
          <p>
            We understand your eagerness, especially during festive seasons! Do
            keep in mind that holiday orders may experience a bit of a delay in
            processing time.
          </p>

          <h2>Expedited Delivery</h2>

          <p>
            Opting for Next Day Shipping accelerates delivery, but the packing
            time at our end remains constant. Your express choice speeds up the
            carrier’s delivery timetable.
          </p>

          <p>
            This policy is set to take effect from January 1, 2024. Thank you
            for choosing YallaYum for your shopping needs – where your happiness
            is just an order away!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
