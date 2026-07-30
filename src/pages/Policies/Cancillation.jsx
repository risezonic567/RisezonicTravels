import React from 'react'
import { Helmet } from 'react-helmet'

export default function Cancillation() {
  return (
   <>
   <Helmet>
    <link rel="canonical" href="https://risezonictravel.com/cancellation-policy" />
   </Helmet>
    <div className=' bg-gray-100 px-4 sm:px-6 md:px-8 py-8 md:py-10 mt-28 mb-5 max-w-5xl mx-auto space-y-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center'>Cancellation Policy</h1>
      <hr/>
      <p className='text-center text-base sm:text-lg text-gray-700 mt-5'>
        At Risezonic Travel, we understand that travel plans can change due to unforeseen circumstances. Our cancellation policy is designed to be fair, transparent, and aligned with standard practices in the travel industry while protecting both our customers and operational commitments.
      </p>

      <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>1. Cancellation by Customer</h2>  

      <p className='text-base sm:text-lg text-gray-700'>
        Customers may request cancellation of their bookings by contacting our support team via email or phone. The applicable cancellation charges will depend on the timing of the request relative to the travel date.
      </p>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li><b>More than 30 days before departure:</b></li>
        <li className='list-none'>Full refund minus a nominal processing fee. </li>
        <li><b>15–30 days before departure:</b></li>
        <li className='list-none'>25% cancellation fee of the total booking amount.</li>
        <li><b>7–14 days before departure:</b></li>
        <li className='list-none'>50% cancellation fee. </li>
        <li><b>Less than 7 days before departure:</b></li>
        <li className='list-none'>No refund applicable. </li>
      </ul>


      <p className='text-base sm:text-lg text-gray-700'>
        For certain services such as flights, train tickets, or third-party hotel bookings, cancellation charges may vary depending on supplier policies and may be higher or non-refundable.
      </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>2. Last-Minute Cancellations & No-Shows</h1>
      <p className='text-base sm:text-lg text-gray-700'>

        Failure to show up at the designated time and location without prior notice will be treated as a “no-show,” and no refunds will be issued.

      </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>3. Modifications Instead of Cancellation</h1>

      <p className='text-base sm:text-lg text-gray-700'>
        In many cases, customers may opt to modify their bookings instead of canceling. Amendments are subject to availability and may incur additional charges depending on the nature of the change.

      </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>4. Cancellation Due to Unforeseen Circumstances</h1>
      <p className='text-base sm:text-lg text-gray-700'>
        In cases of natural disasters, political unrest, or other force majeure events, we will assess situations on a case-by-case basis. While we aim to be flexible, refunds will depend on recoveries from our vendors.

      </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>
        5. Cancellation by the Company
      </h1>
      <p className='text-base sm:text-lg text-gray-700'>
        Risezonic Travel reserves the right to cancel bookings due to operational issues, insufficient participation, or circumstances beyond our control. In such cases:
        </p>

        <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
          <li>Customers will be offered an alternative package, or </li>
          <li>A full refund will be processed without any deductions</li>
        </ul>
        <p className='text-base sm:text-lg text-gray-700'>
          We understand that plans can change, and we’re here to assist you every step of the way. If you need help with a cancellation, please reach out to our team we’ll be happy to guide you.
        </p>
    </div>
   </>
  )
}
