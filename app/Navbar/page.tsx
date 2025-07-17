export default function Navbar() {
  return (
    <>
    <div className="absolute top-0 left-0 w-full z-20 bg-transparent hover:bg-white hover:text-black text-white ">
        
      <div className="flex justify-evenly  px-10 py-4">
        <div className="flex gap-6">
          <div>Panjar</div>
          <div>Help</div>
          <div>Company</div>
        </div>
        <div className="flex gap-6">
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </div>
    </div>
    </>
  );
}
