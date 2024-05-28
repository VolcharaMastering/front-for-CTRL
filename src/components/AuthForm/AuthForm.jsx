import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { yupResolver } from "@hookform/resolvers/yup";
import authValidation from "../../validations/authValidation";
import Eye from "../../UI/Eye/Eye";
import EyeState from "../../stores/EyeState";
import { login, registerUser } from "../../api/users";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import ApiLogsStore from "../../stores/ApiLogsStore";
import "./AuthForm.scss";

const AuthForm = observer(({ formType }) => {
  const handleAuth = (formData) => {
    ApiLogsStore.setClean();
    if (formType === "login") {
      login(formData);
    } else if (formType === "register") {
      const formDataCopy = { ...formData };

      delete formDataCopy.confirmPassword;
      registerUser(formDataCopy);
    }
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(authValidation),
  });

  useEffect(() => {
    ApiLogsStore.setClean();
  }, []);

  return (
    <form className="auth-form" onSubmit={handleSubmit(handleAuth)}>
      <div className="auth-form__input-block">
        <input
          {...register("email")}
          id="Popup-email"
          name="email"
          className={`auth-form__input ${errors.email ? "error" : ""}`}
          type="text"
          placeholder="Your email"
        />
        <span
          className={`auth-form__valid-message 
                        ${errors.email ? "auth-form__valid-message_active" : ""}`}
        >
          {errors?.email && errors?.email?.message}
        </span>
      </div>

      {formType !== "login" && (
        <div className="auth-form__input-block">
          <input
            {...register("username")}
            id="RegisterPopup-name"
            name="username"
            className="auth-form__input"
            type="text"
            placeholder="Your name"
          />
          <span
            className={`auth-form__valid-message 
                      ${errors.username && "auth-form__valid-message_active"}`}
          >
            {errors?.username && errors?.username?.message}
          </span>
        </div>
      )}

      <div className="auth-form__input-block">
        <input
          {...register("password")}
          id="Popup-password"
          name="password"
          className={`auth-form__input ${errors.password ? "error" : ""}`}
          placeholder="Your password"
          type={EyeState.isOpened ? "text" : "password"}
        />
        <Eye />
        <span
          className={`auth-form__valid-message 
                        ${errors.password ? "auth-form__valid-message_active" : ""}`}
        >
          {errors?.password && errors?.password?.message}
        </span>
      </div>
      {formType !== "login" && (
        <div className="auth-form__input-block">
          <input
            {...register("confirmPassword")}
            id="Popup-repeatPassword"
            name="confirmPassword"
            className="auth-form__input"
            placeholder="Repeat your password"
            type={EyeState.isOpened ? "text" : "password"}
          />
          <Eye />
          <span
            className={`auth-form__valid-message 
                      ${errors.confirmPassword ? "form__valid-message_active" : ""}`}
          >
            {errors?.confirmPassword && errors?.confirmPassword?.message}
          </span>
        </div>
      )}
      <div className="auth-form__button">
        <ButtonElement
          name={formType === "login" ? "Login" : "Register"}
          action={handleSubmit(handleAuth)}
          size="small"
            disabled={!isValid}
          onClick={handleSubmit(handleAuth)}
        />
      </div>
      <span
            className={`auth-form__auth-message 
                      ${ApiLogsStore.logs && "form__auth-message"}`}
          >
            {ApiLogsStore.logs}
          </span>
    </form>
  );
});
export default AuthForm;
