function StepperDots({stepArray, step}) {

    return (
        <div className="d-flex justify-content-between align-items-center ">
            {stepArray.map(steps => (
                <div key={steps} className={`dot step${step} ${step >= steps ? 'filled' : ''}`}></div>
            ))}
        </div>
    )
}

export default StepperDots