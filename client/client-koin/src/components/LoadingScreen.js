import { Image } from "react-bootstrap";

function LoadingScreen() {
  return (
    <div style={{ marginTop: "30px" }}>
      <Image
        style={{ width: "45%", height: "45%" }}
        src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
      />
    </div>
  );
}

export default LoadingScreen;
