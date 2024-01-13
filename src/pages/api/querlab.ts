export async function getLogin() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/login.json",
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}


export async function getQrEmployee() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/qr-employee.json",
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getProfileEmployee() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/employee-profile.json",
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}
