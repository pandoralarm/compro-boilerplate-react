import Card from "./Card";
import img1 from "../assets/img/card1.png";
import img2 from "../assets/img/card2.png";
import img3 from "../assets/img/card3.png";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card title="Web Development" img={img1} text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="E-Commerce Services" img={img2} text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="Cyber Security" img={img3} text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
