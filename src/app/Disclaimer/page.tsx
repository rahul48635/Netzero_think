import React from 'react'

export default function page() {
  return (
    <div className='h-full my-40'>
       <main className="max-w-4xl mx-auto px-6 py-12  font-sans">
      <h1 className="text-3xl font-bold mb-4">Website Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: <span className="font-medium">2022-01-14</span>
      </p>

      <p className="mb-4">
        The information provided by Net Zero Think Private Limited (“Company”,
        “we”, “our”, “us”) on{" "}
        <a
          href="https://netzerothink.com/"
          className="text-blue-600 underline"
        >
          https://netzerothink.com/
        </a>{" "}
        (the “Site”) is for general informational purposes only. All information
        is provided in good faith, however we make no representation or warranty
        of any kind regarding the accuracy, adequacy, validity, reliability,
        availability, or completeness of any information on the Site.
      </p>

      <p className="mb-8 font-semibold text-red-700">
        UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
        DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR
        RELIANCE ON ANY INFORMATION PROVIDED. YOUR USE IS SOLELY AT YOUR OWN RISK.
      </p>

      {/* External Links */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">External Links Disclaimer</h2>
        <p className="mb-4">
          The Site may contain links to other websites or content from third
          parties. We do not investigate, monitor, or guarantee the reliability
          or accuracy of such links.
        </p>
        <p className="font-semibold text-red-700">
          WE DO NOT WARRANT OR ASSUME RESPONSIBILITY FOR THIRD-PARTY SITES OR
          FEATURES LINKED THROUGH THE SITE.
        </p>
      </section>

      {/* Professional Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Professional Disclaimer</h2>
        <p className="mb-4">
          The Site does not contain financial advice. All content is for
          informational and educational purposes only. You should consult a
          financial professional before making decisions.
        </p>
        <p className="font-semibold text-red-700">
          THE USE OR RELIANCE ON ANY INFORMATION ON THIS SITE IS AT YOUR OWN RISK.
        </p>
      </section>

      {/* Affiliates Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Affiliates Disclaimer</h2>
        <p>
          The Site may contain affiliate links. We may earn a commission for
          purchases made via these links.
        </p>
      </section>

      {/* Testimonials Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Testimonials Disclaimer</h2>
        <p className="mb-4">
          Testimonials on the Site reflect individual experiences and may not
          reflect the experiences of all users. They are reviewed and may be
          edited for clarity or length.
        </p>
        <p className="font-semibold">YOUR INDIVIDUAL RESULTS MAY VARY.</p>
      </section>

      {/* Errors and Omissions Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Errors and Omissions Disclaimer</h2>
        <p className="mb-4">
          While we try to ensure accuracy, Net Zero Think Private Limited is not
          responsible for any errors or omissions. All content is provided “as
          is” without warranty.
        </p>
        <p>
          We are not liable for actions taken based on content from this site or
          for any resulting damages.
        </p>
      </section>

      {/* Logos and Trademarks Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Logos and Trademarks Disclaimer</h2>
        <p>
          Third-party logos or trademarks shown on the site belong to their
          respective owners and do not imply endorsement by Net Zero Think
          Private Limited.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          For feedback or support, contact us at{" "}
          <a
            href="mailto:support@netzerothink.com"
            className="text-blue-600 underline"
          >
            support@netzerothink.com
          </a>
          .
        </p>
      </section>
    </main>
    </div>
  )
}
