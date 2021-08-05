export function Movie(props) {
    return (
        <>
            <h1>Любимый фильм</h1>
            <div className="container">
                <img src={props.imgUrl} width="25%" height="50%"></img>
                <div className="movie">
                    <div className="movie-item">
                        <p className="title">Название фильма:</p>
                        <p className="text">{props.title}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Режисер:</p>
                        <p className="text">{props.director}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Год выпуска:</p>
                        <p className="text">{props.year}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Киностудия:</p>
                        <p className="text">{props.studio}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Описание:</p>
                        <p className="text www">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}