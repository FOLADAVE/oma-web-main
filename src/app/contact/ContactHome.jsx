import ContactUs from "../components/Contact";

const ContactHome = () => {
    return (
        <main className="bg-customBlue min-h-screen flex flex-col">
            <section
                className="relative h-80 md:h-96 flex items-center justify-center"
                style={{
                    background: "linear-gradient(135deg, #00d2ff, #16bffd, #cb3066)", // Blue, Purple, Red gradient
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Contact Us
                    </h2>
                    <p className="text-white mt-4 text-lg md:text-xl">
                        We&apos;d love to hear from you. Get in touch with us today!
                    </p>
                </div>
            </section>
            <ContactUs/>
        </main>
    );
};

export default ContactHome;