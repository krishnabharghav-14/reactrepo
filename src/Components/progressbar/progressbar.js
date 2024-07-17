import ProgressBar from 'react-bootstrap/ProgressBar';

function Customprogressbar(prop) {
    const{ scale } = prop;
  return <ProgressBar now={scale} />;
}

export default Customprogressbar;