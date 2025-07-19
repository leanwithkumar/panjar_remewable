export default function Footer() {
  return (
    <footer className="bg-[#191C1F] text-white px-6 md:px-20 py-14">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What are you waiting for?
          </h2>
          <p className="text-xl md:text-2xl font-medium py-4">
            Join the waitlist now
          </p>
          <button
            className="bg-white text-black font-medium px-6 py-2 rounded-full"
          >
            Join Now
          </button>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-600 my-10" />

        {/* Logo & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-xl font-semibold">Panjar Renewables</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Website Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Help</a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-400">
          © Panjar Renewable LLP, 2025 | Website made by @leanwithkumar
        </div>
      </div>
    </footer>
  );
}
