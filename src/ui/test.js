
export default function TailButton({caption,handleClick}) {
  return (
    <div>
      <button className="inline-flex px-5 py-3 
                         rounded-md mx-2
                         justify-center items-center
                         text-white font-bold
                         bg-blue-600
                         hover:bg-blue-800
                         onClikc = {handleClick}">

            {caption}
      </button>
    </div>
  )
}
