import useAuth from "./hooks/useAuth";

async function logout() {
  const { auth } = useAuth();
  try {
    localStorage.removeItem("auth");
    await logout(auth);
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Oops :(",
      text: "Failed to Logout",
      background: "#c9002c",
      confirmButtonColor: "#9f9adb",
      color: "#fff",
    });
  }
}

<Botton onClick={() => logout()}> </Botton>;
