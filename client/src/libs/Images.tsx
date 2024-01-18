export const SuccessImage = () => {
  return (
    <div className="animation-ctn">
      <div className="icon icon--order-success svg">
        <svg
          width="208"
          height="208"
          viewBox="0 0 208 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#30AE4D" strokeWidth="2">
            <circle
              cx="101"
              cy="102"
              r="75"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            />
            <circle
              id="colored"
              cx="101"
              cy="102"
              r="75"
              fill="#30AE4D"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            />
            <path
              className="st0"
              d="M65.875 102L89.93 126.055L138.125 77.9451"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: "100px, 100px",
                strokeDashoffset: "200px",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export const FailedImage = () => {
  return (
    <div className="animation-ctn">
      <div className="icon icon--order-success svg">
        <svg
          width="160"
          height="155"
          viewBox="0 0 170 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#FF4B55" strokeWidth="2">
            <circle
              cx="84"
              cy="84"
              r="84"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            />
            <circle
              cx="84"
              cy="84"
              r="84"
              fill="#FF4B55"
              id="colored"
              style={{
                strokeDasharray: "480px, 480px",
                strokeDashoffset: "960px",
              }}
            />
            <path
              d="M54.4316 113.539L113.577 54.3931"
              stroke="white"
              strokeWidth="8.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: "100px, 100px",
                strokeDashoffset: "200px",
              }}
            />
            <path
              d="M113.577 113.539L54.4316 54.3931"
              stroke="white"
              strokeWidth="8.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: "100px, 100px",
                strokeDashoffset: "200px",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
