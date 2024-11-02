function Main({ name, city, position }) {
  return (
    <div>
      <img src="my.png" alt="Developer Img" />
      <div>
        <h3>{name}</h3>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </div>
  );
}

export default Main;
