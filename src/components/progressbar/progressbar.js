import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomProgressBar({scale}) {
  return <ProgressBar now={scale} />;
}

export default CustomProgressBar;