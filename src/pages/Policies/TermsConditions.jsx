import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function TermsConditions() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://risezonictravel.com/terms-condition" />
  </Helmet>
    <div className=' bg-gray-100 px-4 sm:px-6 md:px-8 py-8 md:py-10 mt-28 mb-5 max-w-5xl mx-auto space-y-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center'>Terms & Conditions</h1>
      <hr />
      <p className='text-center text-base sm:text-lg text-gray-700 mt-5'>
        These Terms & Conditions govern the use of services provided by Risezonic Travel. By booking with us, customers agree to comply with the following terms and conditions.

      </p>

      <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>1. Booking and Payments</h2>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li >All bookings are subject to availability and confirmation.</li>
        <li >A minimum deposit may be required at the time of booking, with full payment due before the travel date. </li>
        <li >Prices are subject to change until full payment is received. </li>
      </ul>


    
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>2. Travel Documentation</h1>
      <p className='text-base sm:text-lg text-gray-700'>
        Customers are responsible for providing the following documents:
      </p>
      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li >Valid passports, visas, and identification </li>
        <li >Compliance with destination-specific travel requirements </li>
      </ul>

      <p className='text-base sm:text-lg text-gray-700'>
        Risezonic Travel will not be liable for denied boarding or entry due to incomplete or incorrect documentation.

      </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>3. Pricing and Inclusions</h1>

      

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li>Package prices include only the services explicitly mentioned. </li>
        <li>Additional costs such as personal expenses, optional activities, and local taxes may not be included. </li>
      </ul>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>4. Liability Disclaimer</h1>
      <p className='text-base sm:text-lg text-gray-700'>
     Risezonic Travel acts as an intermediary between customers and service providers (airlines, hotels, transport operators). We are not liable for the following:

      </p>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li>Delays, cancellations, or disruptions caused by third parties </li>
        <li>Loss of baggage, personal belongings, or documents </li>
        <li>Injuries, accidents, or unforeseen incidents during travel </li>
      </ul>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>
       5. Changes to Itinerary

      </h1>
      <p className='text-base sm:text-lg text-gray-700'>
      We reserve the right to modify itineraries due to the following reasons:

      </p>

      <ul className='pl-5 sm:pl-8 list-disc space-y-2 text-base sm:text-lg text-gray-700'>
        <li>Weather conditions </li>
        <li>Operational requirements </li>
        <li>Safety concerns </li>
      </ul>

      <p className='text-base sm:text-lg text-gray-700'>
        Alternative arrangements will be made where possible.
      </p>

      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>6. Force Majeure</h1>
      <p className='text-base sm:text-lg text-gray-700'>
      We are not responsible for failure or delay in performance due to events beyond our control, including but not limited to natural disasters, strikes, pandemics, or government restrictions.
      </p>
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>7. Customer Conduct</h1>
      <p className='text-base sm:text-lg text-gray-700'>
       Customers are expected to behave respectfully and comply with local laws. Misconduct may result in termination of services without refund.

      </p >
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>8. Intellectual Property</h1>
      <p className='text-base sm:text-lg text-gray-700'>All content on our website, including text, images, and branding, is the property of Risezonic Travel and may not be used without permission.</p>
   
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>9. Governing Law & Jurisdiction</h1>
      <p className='text-base sm:text-lg text-gray-700'>
       These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes, claims, or legal proceedings arising out of or in connection with the use of our services shall be subject to the jurisdiction of competent courts within India.
      </p>
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mt-5'>10. Updates to Policies</h1>

      <p className='text-base sm:text-lg text-gray-700'>
        Risezonic Travel reserves the right to update these policies at any time. Customers are encouraged to review them periodically.
        </p>
      <p className='text-base sm:text-lg text-gray-700'>
        We encourage you to review these Terms & Conditions carefully. By choosing to travel with us, you agree to these terms and help us ensure a smooth and enjoyable experience for all.

        </p>
    </div>
  </>
  )
}
