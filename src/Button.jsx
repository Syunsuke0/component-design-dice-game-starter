import "./Button.css";

const Button = ({ clickFunc, label }) => {
  return (
    <button onClick={clickFunc} className="Button">
      {label}
    </button>
  );
};

export default Button;
