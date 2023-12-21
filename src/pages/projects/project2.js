function Project2() {
    return (
      <div>
        <Password password="portfolio-hiden" />
      </div>
    );
  }

  function Content() {
    <h1>content</h1>
  }

  function Password(props) {
    if (props.password == "portfolio-hidden") {
      return <h1>content</h1>;
    }
    return (
      <div>
        <p>input</p>
        <p>wrong password</p>
      </div>
    );
  }
  
  export default Project2;