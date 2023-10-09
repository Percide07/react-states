import Person from "./Person";
const PersonList= ({items})=>{
    return(
        <div>
            {items.map((item)=>(
                <Person key={item.id}  {...item} />
))}
        </div>
    )
        }
export default PersonList;