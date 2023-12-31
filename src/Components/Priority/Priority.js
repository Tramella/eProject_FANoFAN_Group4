import { Container } from "react-bootstrap";
import "./Priority.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Priority() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Container fluid="lg">
        <div class="container-fluid mb-5" data-aos="fade-up">
          <div class="text-center mt-5">
            <h1 className="priority-title">Our Services</h1>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box1" data-aos="zoom-in">
                <div class="our-services settings">
                  <div className="icon">
                    <i class="fa-solid fa-truck-fast"></i>
                  </div>
                  <h3>Free Shipping</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box1" data-aos="zoom-in">
                <div class="our-services speedup">
                  <div className="icon">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3>Secure Shopping</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box1" data-aos="zoom-in">
                <div class="our-services privacy">
                  <div className="icon">
                    <i class="fa-regular fa-comment-dots"></i>
                  </div>
                  <h3>24/7 Help Center</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Priority;
