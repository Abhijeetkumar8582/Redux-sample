import Link from "next/link"
import { useRouter } from 'next/router'



function Navbar() {
  const router = useRouter()

  const onNavbarClick = (category) => {
    router.push({
      pathname: '/articles/[category]',
      query: { category: category }
    })
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Brownmen</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active mx-2" aria-current="page" onClick={() => onNavbarClick("Nutrition")} href="#">Nutrition</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="#" onClick={() => onNavbarClick("Fitness")}>Fitness</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="#" onClick={() => onNavbarClick("Health")}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="#" onClick={() => onNavbarClick("yoga")}>Yoga</Link>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar