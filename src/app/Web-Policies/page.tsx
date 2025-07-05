import React from 'react'

export default function page() {
  return (
    <div className='h-full my-40'>
      <main className="max-w-4xl mx-auto px-6 py-12  font-sans">
      <h1 className="text-3xl font-bold mb-4">Pricing Policy</h1>

      {/* Pricing Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Pricing Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All prices listed on the Net Zero Think website are in Indian Rupees
            (INR), unless stated otherwise.
          </li>
          <li>Prices are subject to change without prior notice.</li>
          <li>
            All prices displayed are exclusive of applicable taxes, unless
            specifically mentioned otherwise.
          </li>
        </ul>
      </section>

      {/* Services Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Services / Solutions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-left text-sm">
            <thead className=" font-semibold">
              <tr>
                <th className="border px-4 py-2">Service</th>
                <th className="border px-4 py-2">Min Price (INR)</th>
                <th className="border px-4 py-2">Max Price (INR)</th>
                <th className="border px-4 py-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Community Registration",
                  min: "2,500",
                  max: "12,000",
                  remark: "One time charge",
                },
                {
                  name: "Webinar Access",
                  min: "Custom pricing",
                  max: "Custom pricing",
                  remark: "Feature is coming soon",
                },
                {
                  name: "Online Training Programs",
                  min: "Custom pricing",
                  max: "Custom pricing",
                  remark: "Feature is coming soon",
                },
                {
                  name: "Tools Access",
                  min: "Custom pricing",
                  max: "Custom pricing",
                  remark: "Feature is coming soon",
                },
                {
                  name: "Consulting Services",
                  min: "Custom pricing",
                  max: "Custom pricing",
                  remark: "Pricing based on scope of work",
                },
                {
                  name: "Premium Membership",
                  min: "Custom pricing",
                  max: "Custom pricing",
                  remark: "Coming soon",
                },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.min}</td>
                  <td className="border px-4 py-2">{item.max}</td>
                  <td className="border px-4 py-2">{item.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product and Service Descriptions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Product and Service Descriptions
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We strive to provide accurate and detailed descriptions,
            specifications, and images of our products and services.
          </li>
          <li>
            However, we cannot guarantee that the information is completely
            error-free or exhaustive.
          </li>
        </ul>
      </section>

      {/* Special Offers */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Special Offers and Promotions
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We may offer discounts, promotions, or bundle packages from time to
            time.
          </li>
          <li>
            The terms of such offers will be clearly communicated on the
            website.
          </li>
        </ul>
      </section>

      {/* Refund Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Refund and Cancellation Policy</h2>
        <h3 className="font-medium mt-4 mb-1">Eligibility for Refunds</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Refunds apply to specific products/services as mentioned in their
            respective terms.
          </li>
          <li>
            Users must meet the conditions outlined in the specific refund policy.
          </li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">Refund Process</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Users must contact our support within the timeframe mentioned for the
            product or service.
          </li>
          <li>
            Refunds will be processed using the original method of payment, unless
            otherwise agreed.
          </li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">Non-Refundable Items</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Some services may be non-refundable, as mentioned in their refund
            policies.
          </li>
          <li>
            Digital content or online courses may not be eligible once accessed or
            downloaded.
          </li>
        </ul>
      </section>

      {/* Shipping Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Shipping Policy</h2>
        <p className="italic text-sm mb-2">(Currently Not Applicable)</p>

        <h3 className="font-medium mt-4 mb-1">Delivery Timeframe</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Orders are processed and shipped within 30 business days.</li>
          <li>
            Delivery time depends on location and method selected during checkout.
          </li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">Shipping Charges</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            If applicable, shipping charges will be shown at checkout.
          </li>
          <li>
            Customers are responsible for correct shipping info and customs
            duties/taxes.
          </li>
        </ul>

        <h3 className="font-medium mt-4 mb-1">Order Tracking</h3>
        <p>
          Tracking numbers will be emailed to users (if applicable) after order is
          dispatched.
        </p>
      </section>

      {/* Footer Note */}
      <section className="mb-8">
        <p className="text-sm text-gray-700">
          Note: These policies are subject to change without prior notice. Please
          review the latest version before any transactions.
        </p>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          For any questions or support, contact us at{" "}
          <a
            href="mailto:support@netzerothink.com"
            className="text-blue-600 underline"
          >
            support@netzerothink.com
          </a>{" "}
          or call{" "}
          <a href="tel:+918240615694" className="text-blue-600 underline">
            +91 82406 15694
          </a>
          .
        </p>
      </section>
    </main>
    </div>
  )
}
