export const CardWrapper = ({classText,children}) => {
    return(
        <div className = {`inline-block bg-[#14213d] md:rounded-lg hover:shadow-2xl ${classText} w-full rounded-md`}>
              {children}
        </div>
      
    )
}