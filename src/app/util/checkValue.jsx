export const checkValue = ({ userInfo, setError, currentStep }) => {
  // test123-с зөвхөн тоог эсвэл үсэг ялгаж авах
  // console.log("test123".match(/[\p{Number}\p{Mark}]+/gu));
  // console.log("test123".match(/[\p{Letter}\p{Mark}]+/gu));

  // /[0-9]/.test(userInfo.firstName)

  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const checkError = {
    firstName:
      userInfo.firstName.length < 3
        ? "Your name must be contain 3 or more characters"
        : !userInfo.firstName || /[^a-zA-Z]/.test(userInfo.firstName)
        ? "First name cannot contain special characters or numbers."
        : "",

    lastName:
      userInfo.lastName.length < 3
        ? "Your name must be contain 3 or more characters"
        : !userInfo.lastName || /[^a-zA-Z]/.test(userInfo.lastName)
        ? "Last name cannot contain special characters or numbers."
        : "",
    username: !userInfo.username
      ? "Username field is empty."
      : userInfo.username.length < 6
      ? "Username must be contain 6 or more characters"
      : /^\d+$/.test(userInfo.username)
      ? "Username cannot be only numbers"
      : specialCharacters.test(userInfo.username)
      ? "Username cannot contain special characters"
      : "",
  };

  setError(checkError);
  if (!Object.values(checkError).some((v) => v)) setCurrenStep(currentStep + 1);
};
