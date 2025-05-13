import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <section className="bg-slate-200 text-indigo-600 py-12 font-lato">
      <div className="text-center mb-12" id='services'>
        <h2 className="text-3xl font-bold">Explore Our Services</h2>
        <p className="text-paragraphColor mt-6 font-medium">
        Welcome to our comprehensive range of services designed to meet your diverse needs.
         Explore our services below and discover how we can elevate your expectations. <br/>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-20">
  {/* Card 1 */}
  <div className="flex flex-col items-center bg-[#2b1a1a] rounded-lg p-6 text-center shadow-lg hover:opacity-90">
    <div className="mb-4">
      <Image src="/images/leader-speech.png" alt="Mass Notifications" width={50} height={50} />
    </div>
    <h3 className="font-bold text-lg text-slate-100">Speech therapy</h3>
    <p className="text-sm text-gray-300 mt-2">Improve your speech skills</p>
  </div>
  {/* Card 2 */}
  <div className="flex flex-col items-center bg-[#16253d] rounded-lg p-6 text-center shadow-lg hover:opacity-90">
    <div className="mb-4">
      <Image src="/images/chart-user.png" alt="Classroom Comms" width={50} height={50} />
    </div>
    <h3 className="font-bold text-lg text-slate-100">Diction training</h3>
    <p className="text-sm text-gray-300 mt-2">Class by class diction training</p>
  </div>
  {/* Card 3 */}
  <div className="flex flex-col items-center bg-[#1f2d1a] rounded-lg p-6 text-center shadow-lg hover:opacity-90">
    <div className="mb-4">
      <Image src="/images/group-community-social-media.png" alt="School Services" width={50} height={50} />
    </div>
    <h3 className="font-bold text-lg text-slate-100">Diction club</h3>
    <p className="text-sm text-gray-300 mt-2">Join our diction club</p>
  </div>
  {/* Card 4 */}
  <div className="flex flex-col items-center bg-green-900 rounded-lg p-6 text-center shadow-lg hover:opacity-90">
    <div className="mb-4">
      <Image src="/images/gamepad.png" alt="School Services" width={50} height={50} />
    </div>
    <h3 className="font-bold text-lg text-slate-100">Diction games</h3>
    <p className="text-sm text-gray-300 mt-2">Interactive linguistic challenges</p>
  </div>
  {/* Card 5 */}
  <div className="flex flex-col items-center bg-red-800 rounded-lg p-6 text-center shadow-lg hover:opacity-90">
    <div className="mb-4">
      <Image src="/images/network-user.png" alt="School Services" width={50} height={50} />
    </div>
    <h3 className="font-bold text-lg text-slate-100">Social polish</h3>
    <p className="text-sm text-gray-300 mt-2">Enhance your social skills</p>
  </div>
  {/* Card 6 */}
  <div className="flex flex-col items-center bg-[#2e1e0f] rounded-lg p-6 text-center shadow-lg hover:opacity-90">
    <div className="mb-4">
      <Image src="/images/screen-play.png" alt="School Websites" width={50} height={50} />
    </div>
    <h3 className="font-bold text-lg text-slate-100">Diction videos</h3>
    <p className="text-sm text-gray-300 mt-2">Practice from home</p>
  </div>
</div>
    </section>
  )
}

export default Service