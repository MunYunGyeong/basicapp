

export default function TailButton({caption,bcolor, handleClick}) {

// const name = "Jisu";
// const message = `Hello, ${name}!`;  // ← 이 백틱 기호는 따옴표가 아닙니다!
console.log(caption);

    const colorB = {
      'blue'  : 'bg-blue-600' ,
      'orange' : 'bg-orange-600'
    }

    const colorBHover = {
      'blue'  : 'hover:bg-blue-800' ,
      'orange' : 'hover:bg-orange-800' 
    }

  return (
    <div>
      <button type='button' className={`inline-flex
        px-5 py-3
        rounded-md
        mx-2
        justify-center items-center
        text-white font-bold
        ${colorB[bcolor]}
        ${colorBHover[bcolor]}`}
        onClick={handleClick}>
            
        {caption}

      </button>
     
    </div>
  )
}
