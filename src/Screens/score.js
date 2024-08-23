const Score = (props) => {

    const { score, onNextQuestion } = props;
    console.log(score)

    return (
        <div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
        </div>
    );

}

export default Score