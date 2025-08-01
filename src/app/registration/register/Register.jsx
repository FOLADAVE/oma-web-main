// src/app/registration/Register.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
	{
		title: "Recitation",
		description: "Showcase your recitation skills and compete with the best.",
		image: "/images/storyteller.png",
		link: "/registration/register/recitation", // Add link for Recitation
	},
	{
		title: "Words Often Mispronounced",
		description: "Demonstrate your mastery of commonly mispronounced words.",
		image: "/images/talk.png",
		link: "/registration/register/mispronounced", // Corrected link
	},
];

const Register = () => {
	return (
		<main className="flex flex-col min-h-screen bg-white">
			<div className="flex flex-col items-center justify-center flex-1 py-16">
				<h1 className="text-5xl font-bold text-blue-900 mb-4 text-center drop-shadow-xl">
					Registration Form
				</h1>
				<p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
					To register, pick a category below and showcase your talent in the 2024
					OMA Diction Awards Competition!
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
					{categories.map((cat) => (
						<div
							key={cat.title}
							className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(49,46,129,0.25),0_2px_8px_rgba(49,46,129,0.10)] hover:shadow-[0_16px_60px_rgba(49,46,129,0.35),0_4px_16px_rgba(49,46,129,0.15)] p-10 flex flex-col items-center h-full transition-all duration-300 border-2 border-indigo-100"
						>
							<div className="rounded-full bg-indigo-100 p-5 mb-6 shadow-xl border-4 border-red-500">
								<Image
									src={cat.image}
									alt={cat.title}
									width={110}
									height={110}
									className="object-contain"
								/>
							</div>
							<h2 className="text-2xl font-bold text-blue-900 mb-2 text-center drop-shadow">
								{cat.title}
							</h2>
							<p className="text-gray-700 text-center mb-6 text-base">
								{cat.description}
							</p>
							{cat.link ? (
								<Link href={cat.link} className="w-full flex justify-center">
									<button className="text-sm bg-gradient-to-r from-blue-900 to-indigo-700 text-white w-64 px-6 py-3 rounded-lg shadow-2xl hover:from-indigo-800 hover:to-blue-900 transition-all duration-200 mt-auto text-center whitespace-nowrap font-semibold tracking-wide border-2 border-indigo-200">
										{cat.title}
									</button>
								</Link>
							) : (
								<button className="text-sm bg-gradient-to-r from-blue-900 to-indigo-700 text-white w-64 px-6 py-3 rounded-lg shadow-2xl hover:from-indigo-800 hover:to-blue-900 transition-all duration-200 mt-auto text-center whitespace-nowrap font-semibold tracking-wide border-2 border-indigo-200" disabled>
									{cat.title}
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Register;