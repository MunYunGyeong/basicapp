import MyListData from './MyListData.json'
import MyListItem from './MyListItem';
 console.log(MyListData);

export default function MyList() {
    const tags = MyListData.map(item => 
                            <MyListItem key={item.title}
                                        title = {item.title} 
                                        imgUrl = {item.imgUrl}
                                        content = {item.content}
                            />
);

  return (
    <div className="w-10/12 grid grid-cols-2 gap-4">
        {tags}

    </div>
  )
}
