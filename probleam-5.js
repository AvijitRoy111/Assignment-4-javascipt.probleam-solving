function password(userInfo) {
    if (
        !userInfo.name ||
        !userInfo.birthYear ||
        !userInfo.siteName ||
        userInfo.birthYear.toString().length !== 4
    ) {
        return "invalid";
    }

    const siteNameFormatted =
        userInfo.siteName.charAt(0).toUpperCase() + userInfo.siteName.slice(1);

    const generatedPassword = `${siteNameFormatted}#${userInfo.name}@${userInfo.birthYear}`;

    return generatedPassword;
}

const userInfo = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(userInfo));  

const invalidUserInfo = { name: "kolimuddin", birthYear: 99, siteName: "google" };
console.log(password(invalidUserInfo)); 
