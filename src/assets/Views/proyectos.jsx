export const Proyectos = (props) => {
  return (
    <>
      <div className="">
        <img className=" w-full h-42" src={props.img} alt="" />
        <div className="p-2">
          <p className="py-2 font-semibold text-xl">{props.name}</p>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  )
}
