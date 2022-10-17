
interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps ) {
  return(
    <button type="submit" className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">
      {children}
    </button>
  )
}

export default Button;