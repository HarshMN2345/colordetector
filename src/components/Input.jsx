

const Input = ({colorval,setColorval}) => {
  return (
    <>
    <label className="lavbel">Color</label>
    <input type="text" value={colorval} onChange={(e)=>setColorval(e.target.value)}/>
    </>
  )
}

export default Input