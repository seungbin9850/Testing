import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

const expect = chai.expect;
let token;
chai.use(chaiHttp);

describe("Post spec test", () => {
    before((done) => {
        chai
            .request(app)
            .post("/user/login")
            .send({
                userId: "userId",
                password: "password"
            })
            .end((err, res) => {
                token = res.body.accessToken;
                done();
            });
    });
    it("POST /post (200)", (done) => {
        chai
            .request(app)
            .post("/post")
            .set("access-token", token)
            .send({
                title: "title",
                content: "content"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    })
})