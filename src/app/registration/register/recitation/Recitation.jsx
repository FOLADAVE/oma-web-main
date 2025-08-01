"use client";

import { useState } from "react";

export default function OmaRegistrationForm() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Lagos OMA Diction Awards - Student Recitation Enrollment Form
        </h1>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-8 rounded">
          <p className="font-medium">Please, make a payment of ₦7,000 to:</p>
          <ul className="list-disc list-inside">
            <li><strong>Account Name:</strong> Oma Professional Services</li>
            <li><strong>Account Number:</strong> 0107068307</li>
            <li><strong>Bank:</strong> GTBANK</li>
          </ul>
          <p className="mt-2">This payment is for <strong>one pupil</strong>.</p>
        </div>

        <form
          action="https://submit-form.com/C9e86jmh5"
          method="POST"
          className="space-y-6"
        >
          {/* Student Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <input name="First Name" placeholder="First Name of Pupil" required className="input" />
            <input name="Middle Name" placeholder="Middle Name of Pupil" className="input" />
            <input name="Surname" placeholder="Surname of Pupil" required className="input" />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <input name="Grade/Class" placeholder="Grade/Class (3 to 6)" required className="input" />
            <input name="Age" type="number" placeholder="Age" required className="input" />
            <select name="Gender" required className="input text-black bg-white">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input name="Parent WhatsApp" placeholder="Guardian/Parent WhatsApp No" required className="input" />
          </div>

          {/* School Info */}
          <h2 className="text-xl font-semibold text-blue-800 mt-4">School Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="School Name" placeholder="Name of School" required className="input" />
            <input name="School Address" placeholder="Address" required className="input" />
            <input name="School WhatsApp" placeholder="School WhatsApp No" className="input" />
            <input name="School Email" type="email" placeholder="School Email" className="input" />
          </div>

          {/* Recitation Info */}
          <h2 className="text-xl font-semibold text-blue-800 mt-4">Poetry Recitation</h2>
          <select name="Poetry Recitation Choice" required className="input text-black bg-white">
            <option value="">Select a Poem</option>
            <option>The Vultures – David Diop</option>
            <option>Abiku – JP Clark</option>
            <option>The Chaos – Gerard Nolst Trinité</option>
            <option>Yesterday – Godswill Effiong Samuel</option>
            <option>Butterfly – Godswill Effiong Samuel</option>
            <option>Home – Godswill Effiong Samuel</option>
            <option>Evergreen – Godswill Effiong Samuel</option>
            <option>Air – Abiola Matthew Olagunju</option>
          </select>
          <input name="Poetry Author" placeholder="Author of Poetry Choice" required className="input" />

          {/* Release Section */}
          <h2 className="text-xl font-semibold text-blue-800 mt-4">Pronouncer&apos;s Release</h2>
          <p className="text-base text-gray-700">I release</p>
          <input name="Released Pupil" placeholder="Name of pupil being released" className="input" />
          <p className="text-base text-gray-700">to attend the 2024 OMA DICTION AWARDS COMPETITION</p>
          <input name="Sign" placeholder="Guardian/Parent Signature" className="input" />
          <input name="Date" type="date" required className="input" />

          {/* Receipt Link Instead of File */}
          <label className="block font-semibold text-blue-700 mt-4">
            Receipt Upload Link:
          </label>
          <input
            type="url"
            name="Payment Receipt Link"
            placeholder="Paste Google Drive, WhatsApp or email link to receipt"
            required
            className="input"
          />

          {/* Broadcast Note */}
          <p className="text-sm text-red-700 mt-2">
            Please note: This event will be broadcast live on TV, online, and on Diction Oracle YouTube Channel.
          </p>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg w-full"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </main>
  );
}
