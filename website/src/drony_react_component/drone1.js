import "../drony/style.css"
export default function drone1({name, srcPath}){
    const imgPath = '/media/'+srcPath
    console.log(imgPath)
    return (
            <main>
                <div className="container">
                    <img src={imgPath} alt="drone1"/>
                    <a href="#">
                        <button>{name}</button>
                    </a>
                </div>
            </main>
        )
}