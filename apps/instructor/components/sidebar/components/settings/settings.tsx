"use client"

import { useState } from 'react';

export default function EditProfile() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [interviewLimit, setInterviewLimit] = useState<string>("1");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePhotoChange = (e:any) => {
    if (e.target.files[0]) {
      setProfilePhoto(null);
    }
  };

  const handleSubmit = () => {
    // Submit logic here
    alert('Profile updated!');
  };

  return (
    <div className="min-h-screen bg-dark-blue text-white flex">

    {/* Main Content */}
    <main className="flex-1 p-8 bg-dark-blue">
      <h2 className="text-2xl font-semibold text-blue-200 mb-4">Edit Profile</h2>
      <div className="space-y-6">
        {/* Profile Photo */}
        <div className="flex items-center space-x-6">
          <div className="relative w-24 h-24 rounded-full bg-white">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-black">
                Upload
              </span>
            )}
          </div>
          <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
            Change Photo
            <input
              type="file"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your Company"
            className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Interviews Per Day */}
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            Interviews Per Day
          </label>
          <input
            type="number"
            placeholder="e.g. 5"
            className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            UPI ID
          </label>
          <input
            type="upi"
            placeholder="Enter new UPI ID"
            className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Change Password */}
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-300">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  </div>
);

}
