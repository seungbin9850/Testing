import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

const expect = chai.expect;
chai.use(chaiHttp);

describe("User Spec Test", () => {
  it("POST /user/register (409)", (done) => {
    chai
      .request(app)
      .post("/user/register")
      .send({
        name: "name",
        userId: "userId",
        password: "password",
      })
      .end((err, res) => {
        expect(res).to.have.status(409);
        done();
      });
  });
  it("POST /user/login (200)", (done) => {
    chai
      .request(app)
      .post("/user/login")
      .send({
        userId: "userId",
        password: "password",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("message");
        expect(res.body).to.have.property("accessToken");
        expect(res.body.message).to.eq("성공");
        done();
      });
  });
  it("POST /user/login (403)", (done) => {
    chai
      .request(app)
      .post("/user/login")
      .send({
        userId: "userId",
        password: "password1111",
      })
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.eq("실패");
        done();
      });
  });
  it("POST /user/login (404)", (done) => {
    chai
      .request(app)
      .post("/user/login")
      .send({
        userId: "userId1111",
        password: "password",
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message");
        done();
      });
  });
});
