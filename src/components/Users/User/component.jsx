import './styles.css';

const User = ({ name, username, email, phone, website }) => (
    <div className="cards__unit-container">
      <article className="cards__unit">
          <h2>{name}</h2>
          <p className="cards__text">{name}</p>
          <p className="cards__text">{username}</p>
          <p className="cards__text">{email}</p>
          <p className="cards__text">{phone}</p>
          <p className="cards__text">{website}</p>
      </article>
    </div>
)

export default User;
