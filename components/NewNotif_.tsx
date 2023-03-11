interface NewNotif_Props {
    
}
 
const NewNotif_ = ({}:NewNotif_Props) => {
    return ( 
        <div className={`h-2 w-2 absolute top-0 right-[-4px]`}>
            <span className="relative flex justify-center items-center h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-orange-600"></span>
            </span>
          </div>
     );
}
 
export default NewNotif_;