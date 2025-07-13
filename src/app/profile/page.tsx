// components/ProfileCard.tsx
import React from 'react';

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const ProfileCard: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://linkedin.com/in/erwin',
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4v-14h-4v14zM7.5 10h3.78v2.06h.05c.53-1 1.83-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.12V24h-4v-6.69c0-1.6-.03-3.65-2.23-3.65-2.23 0-2.57 1.74-2.57 3.54V24h-4v-14z" />
        </svg>
      ),
    },
    {
      href: 'https://facebook.com/erwin',
      label: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.84 7.93 9.8V14.9H7v-2.9h2.93V9.8c0-2.9 1.74-4.5 4.4-4.5 1.27 0 2.6.22 2.6.22v2.86h-1.47c-1.45 0-1.9.9-1.9 1.82v2.16H17l-.47 2.9h-2.53v6.9C18.56 20.84 22 16.84 22 12z" />
        </svg>
      ),
    },
    {
      href: 'https://instagram.com/erwin',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm9.25 2a.75.75 0 1 1 0 1.5h-.01a.75.75 0 1 1 0-1.5zm-4.25 1.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
        </svg>
      ),
    },
  ];

  const fields: [string, string][] = [
    ['First Name', 'Erwin'],
    ['Last Name', 'Smith'],
    ['Email Address', 'erwinsmith@gmail.com'],
    ['Phone Number', '+1 999 6669'],
    ['Location', 'San Francisco, CA'],
  ];

  return (


    <div className='pb-6'>
      <div className='flex justify-between p-6 items-center pt-5 '>
        <div className='flex items-center'>
          <p className='mr-4 font-6 text-18  '>Profile </p>

        </div>

        <button className="flex xs-d-none  items-center bg-gray-800 text-white px-3 h-8 text-sm rounded hover:bg-gray-700"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>Edit Profile</button>
      </div>
       <div className=" px-6 space-x-4">
        <div className=' flex items-center p-4 bg-white rounded-lg shadow'>
          <img
            src="/profile.png"
            alt="Erwin Smith"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="flex-1 pl-4">
            <h2 className="text-15 font-7">Erwin Smith</h2>
            <p className="text-gray-500">Super Admin</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            Edit Profile
          </button>
        </div></div>
      <div className="mx-6 my-6 px-6 py-6 bg-white rounded-lg shadow">

        {/* Profile Header */}
       

        {/* Basic Info */}
        <section className='mb-3'>
          <h3 className="font-6 text-18">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {fields.map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <label className="text-sm text-gray-600">{label}</label>
                <input
                  type="text"
                  className="mt-1 px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={label}
                  defaultValue={value}
                />
              </div>
            ))}
          </div>
        </section></div>
<div>
        {/* About */}
            <div className="mx-6   px-6 py-6 bg-white rounded-lg shadow">

        <section className="mt-6">
          
          <h3 className="font-6 text-18">About</h3>
          <textarea
            rows={4}
            className="mt-2 w-full px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write about yourself..."
            defaultValue="Lorem ipsum dolor sit amet consectetur. Tincidunt tellus commodo enim viverra neque sagittis. Sed faucibus non montes mi in. Rutrum odio ipsum nisi ac diam. Tortor odio nullam egestas urna eu. Quis pharetra quam ipsum vitae vel ut. Sagittis..."
          />
        </section>

        {/* Social Links */}
        <section className="mt-6">
          <h3 className="font-6 text-18">Social Links</h3>
          <div className="mt-2 flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </div></div></div>
  );
};

export default ProfileCard;
