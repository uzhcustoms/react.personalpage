import foto from './foto.jpg'

export function Personal(props) {
    return (
        <>
            <h1>Персональная страница</h1>
            <div className="container">
                <img src={foto} width="25%" height="50%"></img>
                <div className="movie">
                    <div className="movie-item">
                        <p className="title">ФИО:</p>
                        <p className="text">{props.name}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Телефон:</p>
                        <p className="text">{props.tel}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Email:</p>
                        <p className="text">{props.email}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Город проживания:</p>
                        <p className="text">{props.city}</p>
                    </div>
                    <div className="movie-item">
                        <p className="title">Опыт работы:</p>
                        <p className="text www">{props.experience}</p>
                    </div>

                    <div className="movie-item">
                        <p className="title">Навыки:</p>
                        <p className="text www">{props.skills}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export function PersonalPage() {
    let page = { qname: "Пекарский Виктор Викторович", qtel: "0502101214", qemail: "uzhcustoms67@gmail.com", qcity: "Ужгород", qexperience: "1 год", qskills: ["HTML", "CSS", "JS", "Angular", "React"] };
    let { qname, qtel, qemail, qcity, qexperience, qskills } = page;

    return (
        <Personal name={qname} tel={qtel} email={qemail} city={qcity} experience={qexperience} skills={qskills.map(item => (item + ', '))} />
    );
}