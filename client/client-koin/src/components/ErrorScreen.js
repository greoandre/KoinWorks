import { Image } from "react-bootstrap";

function ErrorScreen() {
  return (
    <div style={{ marginTop: "30px" }}>
      <Image
        style={{ width: "55%", height: "55%" }}
        src="https://media.giphy.com/media/l0HU99Q4OEUCjTl3W/giphy.gif"
      />
      <p>Sorry, something went wrong...</p>
    </div>
  );
}

export default ErrorScreen;
