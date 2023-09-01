export function signUpCompany(companyData) {
    const apiUrl = 'http://wanted.ap-northeast-2.elasticbeanstalk.com/companies';
  
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'), 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData), 
    };
  
    return fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('API 요청 실패');
        }
        return response.json();
      })
      .then(data => {
        console.log('API 응답:', data);
        return data;
      })
      .catch(error => {
        console.error('API 오류:', error);
        throw error;
      });
  }
  