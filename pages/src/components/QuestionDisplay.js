class QuestionDisplay extends React.Component {
    constructor() {
        this.state = {
            currentStep: 1
        };

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    _next() {
        let currentStep = this.state.currentStep;
        // Make sure currentStep is set to something reasonable
        if (currentStep >= 2) {
            currentStep = 3;
        } else {
            currentStep = currentStep + 1;
        }

        this.setState({
            currentStep: currentStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        if (currentStep <= 1) {
            currentStep = 1;
        } else {
            currentStep = currentStep - 1;
        }

        this.setState({
            currentStep: currentStep
        });
    }

    render() {
        return (
            <div>
                <Step1 currentStep={currentStep} />
                <Step2 currentStep={currentStep} />
                <Step3 currentStep={currentStep} />
                <Step4 currentStep={currentStep} />
                <Step5 currentStep={currentStep} />
                <Step6 currentStep={currentStep} />
                <button onClick={this._next}>Next</button>
                <button onClick={this._prev}>Prev</button>
            </div>
        );
    }
}