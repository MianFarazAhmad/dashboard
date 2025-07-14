// components/ProfileCard.tsx
'use client'
import React, { useEffect } from 'react';
import { useNavbarTitle } from '../nav/NavbarTitleContext';
type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const ProfileCard: React.FC = () => {
  const { setTitle } = useNavbarTitle();

  useEffect(() => {
    setTitle('Profile');
  }, []);
  const socialLinks = [
    {
      label: 'linkedin.com/in/erwin',
      iconSrc: '/icon/linkdenn.svg',
    },
    {
      label: 'facebook.com/erwin',
      iconSrc: '/icon/fb.svg',
    },
    {
      label: 'instagram.com/erwin',
      iconSrc: '/icon/insta.svg',
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
          <p className='mr-4 font-5 text-22  '>Profile </p>

        </div>

        <button className="flex xs-d-none  items-center bg-gray-900 text-white px-4 py-2 text-sm rounded hover:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M7.52258 7.22729H6.52258C5.99215 7.22729 5.48344 7.43801 5.10837 7.81308C4.7333 8.18815 4.52258 8.69686 4.52258 9.22729V18.2273C4.52258 18.7577 4.7333 19.2664 5.10837 19.6415C5.48344 20.0166 5.99215 20.2273 6.52258 20.2273H15.5226C16.053 20.2273 16.5617 20.0166 16.9368 19.6415C17.3119 19.2664 17.5226 18.7577 17.5226 18.2273V17.2273" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5226 5.2274L19.5226 8.2274M20.9076 6.8124C21.3014 6.41856 21.5227 5.88438 21.5227 5.3274C21.5227 4.77042 21.3014 4.23625 20.9076 3.8424C20.5137 3.44856 19.9796 3.22729 19.4226 3.22729C18.8656 3.22729 18.3314 3.44856 17.9376 3.8424L9.52258 12.2274V15.2274H12.5226L20.9076 6.8124Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Edit Profile</button>
      </div>
    <div className="px-6 space-x-4">
  <div className="shadow">
    <div className="block py-5 rounded-t-lg bg-brand1"></div>

    <div className="flex flex-col sm:flex-row px-6 py-7 bg-white rounded-b-lg">
      {/* Profile Image + Camera Overlay */}
      <div className="relative self-start sm:self-center">
        <img
          src="/profile.png"
          alt="Erwin Smith"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
        />
        <img
          src="/icon/camera.png"
          alt="Camera"
          className="w-6 h-6 absolute bottom-1 right-1 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* Name and Title */}
      <div className="flex flex-col justify-center flex-1 sm:pl-4 mt-4 sm:mt-0">
        <h2 className="text-[20px] font-semibold">Erwin Smith</h2>
        <p className="text-gray-500 text-[18px]">Super Admin</p>
      </div>

      {/* Social Icons — will go below on small screens */}
      <div className="flex space-x-2 mt-4 sm:mt-0 sm:items-center sm:ml-auto">
        <img src="/icon/linkdenn.svg" alt="LinkedIn" width={20} height={20} />
        <img src="/icon/fb.svg" alt="Facebook" width={20} height={20} />
        <img src="/icon/insta.svg" alt="Instagram" width={20} height={20} />
      </div>
    </div>
  </div>
</div>

      <div className="mx-6 my-6 px-6 py-6 bg-white rounded-lg shadow">

        {/* Profile Header */}


        {/* Basic Info */}
        <section className='mb-3'>
          <h3 className="font-6 text-24">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {fields.map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <label className="text-sm black">{label}</label>
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

            <h3 className="font-6 text-24">About</h3>
            <textarea
              rows={4}
              className="mt-2 w-full px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write about yourself..."
              defaultValue="Lorem ipsum dolor sit amet consectetur. Tincidunt tellus commodo enim viverra neque sagittis. Sed faucibus non montes mi in. Rutrum odio ipsum nisi ac diam. Tortor odio nullam egestas urna eu. Quis pharetra quam ipsum vitae vel ut. Sagittis..."
            />
          </section>

         <div>
      <h2 className="text-lg font-semibold text-gray-900 mt-7 mb-4">Social Links</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
        {socialLinks.map((link) => (
          <div key={link.label} className="flex items-center space-x-3 text-gray-500">
            <div className="bg-blue-100 p-2 rounded-md">
              <img src={link.iconSrc} alt={link.label} className="w-5 h-5" />
            </div>
            <span className="text-sm">{link.label}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 rounded border border-gray-300 text-sm">Cancel</button>
        <button className="px-4 py-2 rounded bg-gray-900 text-white text-sm flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M16.4318 21.2273V16.4623C16.4315 16.2533 16.39 16.0465 16.3098 15.8535C16.2295 15.6606 16.112 15.4854 15.9639 15.3379C15.8159 15.1904 15.6402 15.0735 15.447 14.994C15.2538 14.9145 15.0467 14.8738 14.8378 14.8743H9.52576C9.31679 14.8738 9.10977 14.9145 8.91653 14.994C8.72329 15.0735 8.54763 15.1904 8.39958 15.3379C8.25154 15.4854 8.13402 15.6606 8.05375 15.8535C7.97348 16.0465 7.93202 16.2533 7.93176 16.4623V21.2273M16.4318 3.51231V5.8743C16.4315 6.08328 16.39 6.29014 16.3098 6.48308C16.2295 6.67602 16.112 6.85124 15.9639 6.99873C15.8159 7.14621 15.6402 7.26307 15.447 7.34261C15.2538 7.42216 15.0467 7.46283 14.8378 7.46231H9.52576C9.31679 7.46283 9.10977 7.42216 8.91653 7.34261C8.72329 7.26307 8.54763 7.14621 8.39958 6.99873C8.25154 6.85124 8.13402 6.67602 8.05375 6.48308C7.97348 6.29014 7.93202 6.08328 7.93176 5.8743V3.2273M16.4318 3.51231C16.017 3.32449 15.567 3.22733 15.1118 3.2273H7.93176M16.4318 3.51231C16.7758 3.66831 17.0928 3.88631 17.3658 4.15731L19.7478 6.5323C20.0435 6.82662 20.2783 7.17644 20.4386 7.56169C20.5988 7.94694 20.6815 8.36004 20.6818 8.77731V18.0493C20.6815 18.4673 20.5988 18.8812 20.4385 19.2672C20.2781 19.6533 20.0432 20.0039 19.7472 20.2991C19.4512 20.5943 19.0999 20.8282 18.7134 20.9874C18.3269 21.1467 17.9128 21.2282 17.4948 21.2273H6.86976C6.45174 21.2284 6.03761 21.147 5.65107 20.9878C5.26452 20.8287 4.91315 20.5949 4.61705 20.2998C4.32095 20.0047 4.08594 19.6542 3.92545 19.2682C3.76496 18.8822 3.68216 18.4683 3.68176 18.0503V6.40331C3.68229 5.98536 3.76519 5.57163 3.92574 5.18575C4.08628 4.79987 4.32132 4.44943 4.6174 4.15446C4.91349 3.85949 5.26482 3.62578 5.6513 3.46669C6.03778 3.3076 6.45182 3.22625 6.86976 3.2273H7.93176" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <span>Save Changes</span>
        </button>
      </div>
    </div>
        </div></div></div>
  );
};

export default ProfileCard;
