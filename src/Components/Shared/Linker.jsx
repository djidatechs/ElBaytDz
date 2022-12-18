import { Link, useParams } from "react-router-dom"

function Linker({ children, to , styles="" }) {
    const path = useParams();
    const Param = path['*'].split("/")[0].toLowerCase() || ''
    const toParam = to?.toLowerCase()?.split("/")[1] 
    const fakeActive = Param === toParam ? true : false
    const Color = fakeActive ? "text-night" : "text-white"
    console.log(to?.toLowerCase()?.split("/")[1])

    return (
    <div className={fakeActive ? 'underline decoration-4 underline-offset-8' : undefined}>
      <Link to={to} className={styles + " " + Color}>
        {children}
      </Link>
    </div>
    )
  }
  
  export default Linker