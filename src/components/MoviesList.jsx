import Card from "./Card";

export default function MoviesList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Card
            title={"titolo"}
            description={"descrizione"}
            link={"/movies/1"}
          ></Card>
        </div>
        <div className="col-4">
          <Card
            title={"titolo"}
            description={"descrizione"}
            link={"/movies/2"}
          ></Card>
        </div>
        <div className="col-4">
          <Card
            title={"titolo"}
            description={"descrizione"}
            link={"/movies/3"}
          ></Card>
        </div>
      </div>
    </div>
  );
}
