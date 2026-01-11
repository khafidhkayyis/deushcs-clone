"use client";

import React, { useState } from "react";
import Image from "next/image";
import gamePosterImage from "./images/DEUS-HOAFL-Background-1-768x856.png";

export default function ConsultationPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        companyName: "",
        jobTitle: "",
        companySize: "1 - 100",
        countryCity: "",
        jobRole: "",
        hearAboutUs: "Google Search",
        phoneNumber: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-full min-h-screen bg-[#fff9e8] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#122430] text-center mb-12">
                    Let&apos;s Get in Touch!
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* Left Side - Contact Form */}
                    <div className="bg-[#fff9e8] rounded-lg shadow-lg p-6 md:p-8 order-2 lg:order-1">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Work Email */}
                            <div>
                                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    id="workEmail"
                                    name="workEmail"
                                    value={formData.workEmail}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                    required
                                />
                            </div>

                            {/* Company Name */}
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                    required
                                />
                            </div>

                            {/* Job Title */}
                            <div>
                                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    id="jobTitle"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                    required
                                />
                            </div>

                            {/* Company Size */}
                            <div>
                                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2 ">
                                    Company Size
                                </label>
                                <select
                                    id="companySize"
                                    name="companySize"
                                    value={formData.companySize}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent"
                                >
                                    <option value="1 - 100">1 - 100</option>
                                    <option value="101 - 500">101 - 500</option>
                                    <option value="501 - 1000">501 - 1000</option>
                                    <option value="1000+">1000+</option>
                                </select>
                            </div>

                            {/* Country and City */}
                            <div>
                                <label htmlFor="countryCity" className="block text-sm font-medium text-gray-700 mb-2">
                                    Country and City
                                </label>
                                <input
                                    type="text"
                                    id="countryCity"
                                    name="countryCity"
                                    value={formData.countryCity}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                    required
                                />
                            </div>

                            {/* Job Role */}
                            <div>
                                <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                                    What is your job role
                                </label>
                                <input
                                    type="text"
                                    id="jobRole"
                                    name="jobRole"
                                    value={formData.jobRole}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                    required
                                />
                            </div>

                            {/* How did you hear about us */}
                            <div>
                                <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                                    How did you hear about us
                                </label>
                                <select
                                    id="hearAboutUs"
                                    name="hearAboutUs"
                                    value={formData.hearAboutUs}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                >
                                    <option value="Google Search">Google Search</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Advertisement">Advertisement</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Company Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#122430] focus:border-transparent bg-white"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#122430] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a3a4a] transition-colors duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Game Poster and Contact Info */}
                    <div className="flex flex-col items-center order-1 lg:order-2">
                        {/* Game Poster */}
                        <div className="mb-8 w-full max-w-md">
                            <Image
                                src={gamePosterImage}
                                alt="HEROES OF A FALLEN LAND"
                                width={768}
                                height={856}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4 text-[#122430]">
                            {/* WhatsApp */}
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <a href="https://wa.me/6282312121660" className="text-base md:text-lg hover:underline">
                                    +6282312121660
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:gregory.kurnia@deushcs.com" className="text-base md:text-lg hover:underline">
                                    gregory.kurnia@deushcs.com
                                </a>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-base md:text-lg">
                                    Jl. Jalur Sutera Bar. Alam No.15, RT.003/RW.006, Panunggangan Tim., Sutera, Kota Tangerang, Banten 15143, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

