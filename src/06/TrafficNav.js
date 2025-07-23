import TailButton from '../ui/TailButton';

export default function TrafficNav({title, c, sel, setSel}) {
//버튼 그룹
    const cTag = c.map(item => <TailButton 
                                key = {item}
                                caption = {item}
                                bcolor={sel === item? 'orange':'blue'}
                                handleClick={() => handleClick(item)} />);

    //버튼이 클릭되었을때 선택된 현재 눌러진 값이 뭔지 만들어 줘야 함, sel 값이 뭔지?? sel값을 알았다면  setSel에 의해서 선택된 값이 item 된다.        

    const handleClick = (item) => {
        setSel(item);

        console.log(item)
    };

  return (
    <div className="w-full flex justify-start items-center my-5 ">
      <div className="w-1/5 justify-start items-center"> 
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 
                      md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
