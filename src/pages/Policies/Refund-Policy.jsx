import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function RefundPolicy() {
  return (
    <>
    <Helmet>
      <link rel="canonical" href="https://risezonictravel.com/refund-policy" />
    </Helmet>
    <div className=' bg-gray-100 px-4 sm:px-6 md:px-8 py-8 md:py-10 mt-28 mb-5 max-w-5xl mx-auto space-y-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center'>Refund Policy</h1>
      <hr/>
      <p className='text-center text-base sm:text-lg text-gray-700 mt-5'>
       At Risezonic Travel, we are committed to delivering a seamless and satisfying travel experience for all our customers. This Refund Policy defines the terms and conditions under which refunds may be granted for our services. We aim to handle all refund requests efficiently, with a strong focus on transparency and fairness. The policy outlines the applicable conditions, processing timelines, and procedures to ensure clarity and ease for our customers.

      </p>

      <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>1. Eligibility for Refunds</h2>  

      <p className='text-base sm:text-lg text-gray-700'>
Refund eligibility depends on the following:
      </p>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li >Timing of cancellation </li>
        <li >Type of service booked </li>
        <li >Vendor-specific policies (airlines, hotels, transport providers, etc.) </li>
      </ul>


      <p className='text-base sm:text-lg text-gray-700'>
     Refunds are only applicable where cancellations meet the criteria outlined in our <Link to='/cancellation-policy' className='text-blue-600'>Cancellation Policy.</Link>
     </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>2. Refund Processing Time</h1>
      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li >Approved refunds are processed within <b>7 business days</b> from confirmation. </li>
        <li >Depending on the payment method, it may take additional time for the amount to reflect in the customer’s account. </li>
      </ul>



      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>3. Mode of Refund</h1>

      <p className='text-base sm:text-lg text-gray-700'>
        Refunds will be processed using the original method of payment:
      </p>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li>Credit/Debit card payments → refunded to the same card </li>
        <li>Bank transfers → refunded to the same account </li>
        <li>Wallet payments → refunded to the same wallet </li>
      </ul>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>4. Partial Refunds</h1>
      <p className='text-base sm:text-lg text-gray-700'>
        In many cases, only partial refunds may be offered due to the following reasons:
      </p>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li>Non-refundable components (e.g., flights, visas, permits) </li>
        <li>Cancellation fees charged by suppliers </li>
        <li>Administrative and processing costs </li>
      </ul>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>
      5. Non-Refundable Situations
      </h1>
      <p className='text-base sm:text-lg text-gray-700'>
        Refunds will not be provided in the following scenarios:
        </p>

        <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
          <li>No-shows or last-minute cancellations </li>
          <li>Failure to provide required travel documents </li>
          <li>Denied visas (unless explicitly stated otherwise) </li>
          <li>Voluntary withdrawal during the trip </li>
        </ul>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>6. Refund Delays</h1>
        <p className='text-base sm:text-lg text-gray-700'>
       While we aim for timely processing, delays may occur due to the following reasons:
        </p>

        <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
          <li>Bank processing timelines </li>
          <li>Vendor confirmation delays </li>
          <li>Peak travel seasons </li>
        </ul>
        <p className='text-base sm:text-lg text-gray-700'>
          We will keep customers informed in case of any unexpected delays.
        </p >
        <p className='text-base sm:text-lg text-gray-700'>All queries will be addressed within 1- 2 business days.</p>
    </div>
    </>
  )
}
