export async function getLogin2({ username, password }) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "BoP2023!");
  myHeaders.append("User-Agent", "bop.citratubindo.com");
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  var raw = '{"username":"kevin.alnizar","password":"Kijang=13"}';

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://hrd.citratubindo.com/sys-hr/sys-login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export async function getLogin({ username, password }) {
  try {
    const res = await fetch(
      "https://hrd.citratubindo.com/sys-hr/auth/tes_auth",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "Accept,Authorization,Content-Type",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "aa",
          password: "aaa",
        }),
      },
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


const saveReg = () =>{
  setisLoading(true);
  fetch('https://admin40th.citratubindo.com/api/saveReg', {
    method: 'post',
    header: {
         Accept: 'application/json',
         'Content-type': 'application/json',
        },
        body: JSON.stringify({
            nik: emp_id,
            fullname: full_name,
            tgl_lahir: tgl_lahir,
            dept: dept,
            company: company,
            total_attend: total_attend,
            noted_remark: noted_remark,
            photo_emp: imgSrc,
            unique_code: unique_code,
        }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setisLoading(false);
        if(responseJson.msg=='Success'){
          localStorage.setItem("session_qr", arr_unique);
          const arr_unique = responseJson.details.unique_code_64;
          localStorage.setItem("session_qr", arr_unique);
           router.push({
            pathname: '/page_qr',
            query: { ref: arr_unique }
           })
        }else{
          const arr_unique = responseJson.details[0].unique_code_64;
          router.push({
            pathname: '/page_qr',
            query: { ref: arr_unique }
           })
        }

    })
    .catch((error) => {
        setisLoading(false);
        // alert('An error occurred while fetching data');
    });
}
