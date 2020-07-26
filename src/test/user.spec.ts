import chai from "chai";
import chaiHttp from "chai-http";
import { type } from "os";
import app from "../app";

const expect = chai.expect;
chai.use(chaiHttp);

describe('User', () => {
    it('POST /user/register (200)', (done) => {
        chai
            .request(app)
            .post("/user/register")
            .send({
                name: "name",
                userId: "userId",
                password: "password",
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });
    it('POST /user/register (409)', (done) => {
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
            })
    })
});