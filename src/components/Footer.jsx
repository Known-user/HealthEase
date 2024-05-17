export default function Footer(props) {
  return (
    <section className="pt-0 w-100 bg-dark text-light">
      <div className={`d-flex align-items-center bg-${props.mode}`}>
        <div className="col-md-7 col-lg-8 text-center text-md-start">
          <div className="p-3">
            © 2023 Copyright:{" "}
            <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </div>
        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end p-3">
        <a
            href="https://www.linkedin.com/in/abhay-rawat-b58b2226b/"
            target="_blank"
          >
            <img
              className="m-2"
              src="https://media.licdn.com/dms/image/D5603AQGTNxPSc1bOYA/profile-displayphoto-shrink_200_200/0/1704168676991?e=1721260800&v=beta&t=WHqKMDmJwKhAN-KNh_mLoEv-jP7Qa9xlO_8UfuGCHJE"
              style={{ width: "30px", borderRadius: "5rem" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/pruthimayank/" target="_blank">
            <img
              className="m-2"
              src="https://media.licdn.com/dms/image/D5603AQE0auN2K_bpAQ/profile-displayphoto-shrink_800_800/0/1678854276203?e=2147483647&v=beta&t=CF0wW6y-K3rmts8IkK1GmPVphRF890l2BtH1M2QieQs"
              style={{ width: "30px", borderRadius: "5rem" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/satyakant-mishra-958847203/"
            target="_blank"
          >
            <img
              className="m-2"
              src="https://media.licdn.com/dms/image/D4D03AQHOdrEZjAXdjQ/profile-displayphoto-shrink_800_800/0/1674058965777?e=2147483647&v=beta&t=6zqRs4UQY39SDdLkOqCyuo_lAqv2eTmCfCcZOqRNuZA"
              style={{ width: "30px", borderRadius: "5rem" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-dishwar-6871b026a/"
            target="_blank"
          >
            <img
              className="m-2"
              src="https://media.licdn.com/dms/image/D4D03AQGc2NlT9AuzdQ/profile-displayphoto-shrink_400_400/0/1678727937874?e=1688601600&v=beta&t=2texiQ719hdEJPtssw-t3Wln16a6NKzN-0JWwNP34Fo"
              style={{ width: "30px", borderRadius: "5rem" }}
            />
          </a>
          
        </div>
      </div>
    </section>
  );
}
